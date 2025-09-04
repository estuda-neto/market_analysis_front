"use client";

import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formregister-scheme';
import { toast } from 'react-toastify';
import { InputCustom } from '@/components/InputCustom';
import styles from "./formregister.module.css";
import { SubButton } from '@/components/Shared/SubButton';

type FormRegister = {username: string;email: string;password: string;repeat_password: string;};

export const FormRegister = () => {
  const router = useRouter();
  const methods = useForm<FormRegister>({resolver: yupResolver(formSchema),mode: 'onChange',defaultValues: { username: '', email: '', password: '', repeat_password: '' }});

  const handlesubmitRegister = async (data: FormRegister) => {
     try {
        const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (response && response.status === 201) {
          toast.success("Usuario criado com sucesso, 1 seg e sera redirecionado !");
          router.push("/");
        }
        else {
          toast.error(response.status === 400 ? "Email ja existe na aplicação, prossiga para redefinição de senha" : "");
        }
     } catch (error) {
       throw new Error("Ocorreu um erro de comunicação no next...");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handlesubmitRegister)} className={styles.form}>
        <div className={styles.row}>
          <InputCustom name="username" label="Username" required={true} />
          <InputCustom name="email" label="Email" type="email" required={true} pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}/>
        </div>

        <div className={styles.row}>
          <InputCustom name="password" label="Senha" type="password" required={true} />
          <InputCustom name="repeat_password" label="Confirme a senha" type="password" required={true} />
        </div>

        <div className={styles.buttonContainer}>
          <SubButton label={'Registrar'} />
        </div>
      </form>
    </FormProvider>
  );
};
