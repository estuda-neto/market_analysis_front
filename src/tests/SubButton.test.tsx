import { SubButton } from "@/components/Shared/SubButton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SubButton", () => {
  it("renderiza com o label correto", () => {
    render(<SubButton label="Enviar" />);
    expect(screen.getByRole("button")).toHaveTextContent("Enviar");
  });

  it("usa o tipo default submit", () => {
    render(<SubButton label="Enviar" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("aceita outros tipos", () => {
    render(<SubButton label="Resetar" type="reset" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });

  it("chama a função onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(<SubButton label="Clique" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("tem a classe .btn aplicada", () => {
    render(<SubButton label="ClasseTeste" />);
    expect(screen.getByRole("button")).toHaveClass("btn");
  });

  it("concatena classes passadas via props", () => {
    render(<SubButton label="Extra" className="extra" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("extra");
  });
});
