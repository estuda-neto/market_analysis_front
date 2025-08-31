import React from "react";
import { render, screen } from "@testing-library/react";
import { TikerLeft } from "@/components/Shared";

jest.mock("lucide-react", () => ({
  TrendingUpIcon: (props: any) => <svg data-testid="up-icon" {...props} />,
  TrendingDownIcon: (props: any) => <svg data-testid="down-icon" {...props} />,
}));

describe("TikerLeft component", () => {
  const defaultMessages = [
    "45 empresas em caindo",
    "500 novos produtos #2",
    "5000 vendas em 2025 #3",
  ];

  it("renderiza as mensagens default quando não passa TikerList", () => {
    render(<TikerLeft />);
    defaultMessages.forEach((msg) => {
      expect(screen.getByText(msg)).toBeInTheDocument();
    });
  });

  it("renderiza as mensagens passadas via TikerList", () => {
    const customList = [
      { kpiIsNegative: false, message: "Mensagem 1" },
      { kpiIsNegative: true, message: "Mensagem 2" },
    ];
    render(<TikerLeft TikerList={customList} />);
    customList.forEach((item) => {
      expect(screen.getByText(item.message)).toBeInTheDocument();
    });
  });

  it("renderiza o ícone TrendingUpIcon quando kpiIsNegative=false", () => {
    const list = [{ kpiIsNegative: false, message: "Up" }];
    render(<TikerLeft TikerList={list} />);
    expect(screen.getByTestId("up-icon")).toBeInTheDocument();
  });

  it("renderiza o ícone TrendingDownIcon quando kpiIsNegative=true", () => {
    const list = [{ kpiIsNegative: true, message: "Down" }];
    render(<TikerLeft TikerList={list} />);
    expect(screen.getByTestId("down-icon")).toBeInTheDocument();
  });

  it("renderiza a quantidade correta de itens", () => {
    const list = [
      { kpiIsNegative: false, message: "1" },
      { kpiIsNegative: true, message: "2" },
      { kpiIsNegative: false, message: "3" },
    ];
    render(<TikerLeft TikerList={list} />);
    const items = screen.getAllByTestId("ticker-item");
    expect(items).toHaveLength(list.length);
  });

  it("cada item renderiza ícone e texto juntos", () => {
    render(<TikerLeft />);
    const items = screen.getAllByTestId("ticker-item");
    items.forEach((span) => {
      const parent = span.parentElement;
      expect(parent?.querySelector("svg")).toBeInTheDocument();
    });
  });

  it("renderiza o container principal", () => {
    render(<TikerLeft />);
    const wrapper = screen.getByTestId("ticker-wrapper");
    expect(wrapper).toBeInTheDocument();
  });
});
