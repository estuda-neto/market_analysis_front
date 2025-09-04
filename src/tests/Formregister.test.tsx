import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FormRegister } from "@/components/Forms";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {success: jest.fn(),error: jest.fn()},
}));

describe("FormRegister Component", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    jest.clearAllMocks();
  });

  it("deve renderizar todos os inputs e o botão", () => {
    render(<FormRegister />);

    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha:")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirme a senha:")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /registrar/i })).toBeInTheDocument();
  });

  it("deve mostrar mensagens de erro ao enviar com campos vazios", async () => {
    render(<FormRegister />);
    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));

    expect(
      await screen.findByText("O nome de usuário é obrigatório")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("O email é obrigatório")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("A senha é obrigatória")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("A confirmação de senha é obrigatória")
    ).toBeInTheDocument();

    // Não deve chamar toast.error neste caso
    expect(toast.error).not.toHaveBeenCalled();
  });

  it("deve enviar os dados corretamente e redirecionar quando sucesso", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 201,
    }) as jest.Mock;

    render(<FormRegister />);

    fireEvent.change(screen.getByLabelText("Username:"), {target: { value: "neto" },});
    fireEvent.change(screen.getByLabelText("Email:"), {target: { value: "neto@email.com" },});
    fireEvent.change(screen.getByLabelText("Senha:"), {target: { value: "123456" },});
    fireEvent.change(screen.getByLabelText("Confirme a senha:"), {target: { value: "123456" },});

    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/api/users",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "neto",
            email: "neto@email.com",
            password: "123456",
            repeat_password: "123456",
          }),
        })
      );

      expect(toast.success).toHaveBeenCalled();
      expect(pushMock).toHaveBeenCalledWith("/");
    });
  });

  it("deve mostrar erro quando o email já existe", async () => {
    global.fetch = jest.fn().mockResolvedValue({status: 400}) as jest.Mock;

    render(<FormRegister />);

    fireEvent.change(screen.getByLabelText("Username:"), {target: { value: "neto" },});
    fireEvent.change(screen.getByLabelText("Email:"), {target: { value: "existe@email.com" },});
    fireEvent.change(screen.getByLabelText("Senha:"), {target: { value: "123456" },});
    fireEvent.change(screen.getByLabelText("Confirme a senha:"), {target: { value: "123456" }});

    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));

    await waitFor(() => {expect(toast.error).toHaveBeenCalledWith("Email ja existe na aplicação, prossiga para redefinição de senha")});
  });
});
