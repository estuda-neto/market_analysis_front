import clsx from "clsx";
import styles from "./formlogin.module.css";
import { useForm } from "react-hook-form";
// import { ButtonDeslogar } from "../../ButtonDeslogar";
import { useId } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

type TypeLoginData = { email: string; password: string };

export const FormLogin: React.FC = () => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  const {register, handleSubmit, formState: { errors }} = useForm<TypeLoginData>();
  const idEmail = useId();
  const idPassword = useId();

  const handleSubmitForm = async (dataForm: TypeLoginData) => {
    // try {
    //   const user = await UserRepository.signIn(dataForm.email, dataForm.password);

    //   if (user) {
    //     navigate("/manager");
    //   } else {
    //     toast.error("Email ou senha inválidos!");
    //   }
    // } catch (error: unknown) {
    //   toast.error(error instanceof Error ? error.message : "Erro ao autenticar");
    // }
  };

  // if (pathname.includes("/manager")) {
  //   return <ButtonDeslogar/>;
  // }

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

      <button type="submit" className={clsx(styles.button)}>
        Entrar
      </button>

      <div className={styles.cadastro}>
        Não tem uma conta?
        <Link href={"/cadastro"}>cadastre-se</Link>
      </div>
    </form>
  );
};
