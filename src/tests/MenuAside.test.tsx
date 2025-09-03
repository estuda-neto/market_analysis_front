import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MenuAside } from "@/components/Shared/MenuAside";
import { MenuProvider } from "@/contexts/manager_context";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("MenuAside", () => {
  const renderWithProvider = () =>
    render(
      <MenuProvider>
        <MenuAside />
      </MenuProvider>
    );

  it("deve renderizar todos os itens do menu", () => {
    renderWithProvider();
    const items = ["Market Analysis", "Dashboard", "Customers", "Messages", "Help", "Settings", "Password"];
    items.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("deve alternar a classe 'active' quando o botão de toggle for clicado", () => {
    renderWithProvider();

    const toggleButton = screen.getByRole("button");
    const navigation = toggleButton.closest("div")!;

    expect(navigation.className).not.toContain("active");

    fireEvent.click(toggleButton);
    expect(navigation.className).toContain("active");

    fireEvent.click(toggleButton);
    expect(navigation.className).not.toContain("active");
  });

  it("deve converter os links para snake_case corretamente", () => {
    renderWithProvider();

    const link = screen.getByText("Market Analysis").closest("a");
    expect(link).toHaveAttribute("href", "market_analysis");
  });

  it("deve aplicar classe de hover ao passar o mouse sobre um item", () => {
    renderWithProvider();

    const dashboardItem = screen.getByText("Dashboard").closest("li")!;
    expect(dashboardItem.className).not.toContain("hovered");

    fireEvent.mouseOver(dashboardItem);
    expect(dashboardItem.className).toContain("hovered");
  });
});
