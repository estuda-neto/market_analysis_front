import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { MenuAside } from "@/components/Shared";
import { MenuProvider } from "@/contexts/manager_context";

const meta: Meta<typeof MenuAside> = {
  title: "Components/Shared/MenuAside",
  component: MenuAside,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Este componente deve ser usado **dentro de um MenuProvider**. Ele usa `useMenu()  um hook que da acesso ao contexto que ele necessita`, afim de funcionar corretamente.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuAside>;
export const Default: Story = {
  render: () => (
    <MenuProvider>
      <div
        style={{
          width: 350,
          height: 500,
          border: "1px solid #ccc",
          padding: 10,
        }}
      >
        <MenuAside />
      </div>
    </MenuProvider>
  ),
};

const MenuAsideWithToggle: React.FC<{ initialActive?: boolean }> = ({
  initialActive = false,
}) => {
  const [menuActive, setMenuActive] = useState(initialActive);

  return (
    <MenuProvider>
      <div
        style={{
          width: 350,
          height: 500,
          border: "1px solid #ccc",
          padding: 10,
        }}
      >
        <button
          onClick={() => setMenuActive(!menuActive)}
          style={{ marginBottom: 10, padding: "5px 10px" }}
        >
          Toggle Menu
        </button>
        <MenuAside />
      </div>
    </MenuProvider>
  );
};