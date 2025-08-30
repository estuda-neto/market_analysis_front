"use client";
import clsx from "clsx";
import Link from "next/link";
import {useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useId } from "react";
import styles from "./formlogin.module.css";
import { SubButton } from "@/components/Shared/SubButton";

type TypeLoginData = { email: string; password: string };

export const FormLogin: React.FC = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<TypeLoginData>();
  const idEmail = useId();
  const idPassword = useId();

  const handleSubmitForm = async (data: TypeLoginData) => {
    try {
      signIn("credentials", { ...data, callbackUrl: "/manager" });
    }catch (error: unknown) {
      toast.error("Email ou senha inválidos!");
      toast.error(error instanceof Error ? error.message : "Erro ao autenticar");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={clsx(styles.container)}>
      <label htmlFor={idEmail} className={clsx(styles.label)}>e-mail:</label>
      <div className={styles.inputgroup}>
        <input id={idEmail} type="text" {...register("email", { required: "Este campo é obrigatório" })} className={clsx(styles.input)}/>
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <label htmlFor={idPassword} className={clsx(styles.label)}>password:</label>
      <div className={styles.inputgroup}>
        <input id={idPassword} {...register("password", { required: "Este campo é obrigatório" })} type="password" className={clsx(styles.input)}/>
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <SubButton label={"Entrar"} />
      

      <div className={styles.cadastro}>
        Não tem uma conta?
        <Link href={"/cadastro"}>cadastre-se</Link>
      </div>
    </form>
  );
};
