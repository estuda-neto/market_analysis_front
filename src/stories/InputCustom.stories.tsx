import { InputCustom } from "@/components/InputCustom";
import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof InputCustom> = {
  title: "Components/InputCustom",
  component: InputCustom,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Este componente deve ser usado **dentro de um FormProvider** do react-hook-form. Ele usa `useFormContext()` para funcionar corretamente.",
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputCustom>;
const Template: StoryFn<typeof InputCustom> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <InputCustom {...args} />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "email",
    label: "E-mail",
    placeholder: "Digite seu e-mail",
    required: true,
  },
};
