import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import { InputCustom } from '@/components/InputCustom';

describe('InputCustom', () => {

  // Wrapper funcional que cria o useForm dentro de um componente
  const FormWrapper: React.FC<{ defaultValues?: any; children: React.ReactNode }> = ({
    children,
    defaultValues = { email: '' },
  }) => {
    const methods = useForm({ defaultValues });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  it('renderiza input com label e placeholder', () => {
    render(
      <FormWrapper>
        <InputCustom name="email" label="E-mail" placeholder="Digite seu e-mail" />
      </FormWrapper>
    );

    const label = screen.getByText(/E-mail/i);
    const input = screen.getByLabelText(/E-mail/i) as HTMLInputElement;

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Digite seu e-mail');
  });

  it('permite digitar no input', async () => {
    render(
      <FormWrapper>
        <InputCustom name="email" label="E-mail" placeholder="Digite seu e-mail" />
      </FormWrapper>
    );

    const input = screen.getByLabelText(/E-mail/i) as HTMLInputElement;
    await userEvent.type(input, 'teste@teste.com');

    expect(input.value).toBe('teste@teste.com');
  });

  it('mostra erro campo obrigatório', async () => {
    let methodsRef: any;

    const Wrapper: React.FC = () => {
      const methods = useForm({ defaultValues: { email: '' } });
      methodsRef = methods;
      return (
        <FormProvider {...methods}>
          <InputCustom name="email" label="E-mail" required />
        </FormProvider>
      );
    };

    render(<Wrapper />);

    const input = screen.getByLabelText(/E-mail/i);

    await userEvent.clear(input);

    // dispara validação dentro do act para evitar aviso
    await act(async () => {
      await methodsRef.trigger('email');
    });

    const errorMessage = await screen.findByText(/Campo obrigatório/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('mostra erro pattern inválido', async () => {
    let methodsRef: any;

    const Wrapper: React.FC = () => {
      const methods = useForm({ defaultValues: { email: '' } });
      methodsRef = methods;
      return (
        <FormProvider {...methods}>
          <InputCustom
            name="email"
            label="E-mail"
            pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
          />
        </FormProvider>
      );
    };

    render(<Wrapper />);

    const input = screen.getByLabelText(/E-mail/i);
    await userEvent.type(input, 'email-invalido');

    // dispara validação dentro do act para evitar aviso
    await act(async () => {
      await methodsRef.trigger('email');
    });

    const errorMessage = await screen.findByText(/Formato inválido/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
