// STYLES
import styles from "./Form.module.css";
import { toast } from "react-toastify";

// FORM
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  formTitleMsg: string;
  btnMsg: string;
}

type FormSchema = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

const zodSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "O nome de usuário precisa ser maior!" })
      .max(15, { message: "O nome de usuário precisa ser menor!" }),
    email: z.string().email({ message: "Endereço de e-mail inválido!" }),
    password: z.string().min(6, { message: "A senha precisa ser maior!" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.confirm_password === data.password, {
    message: "As senhas não conferem!",
    path: ["password"],
  });

const Form = ({ formTitleMsg, btnMsg }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    // RESETANDO INPUTS
    reset();
    toast.success("Usuário criado!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>{formTitleMsg}</h1>
      <hr />
      <div className={styles.form_control}>
        <label htmlFor="username">Nome de usuário</label>
        <input type="text" {...register("username")} />
        {errors?.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
        <label htmlFor="email">E-mail</label>
        <input type="email" {...register("email")} />
        {errors?.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
        <label htmlFor="password">Senha</label>
        <input type="password" {...register("password")} />
        {errors?.password && (
          <p className={styles.error}>{errors.password?.message}</p>
        )}
        <label htmlFor="password">Confirme a senha</label>
        <input type="password" {...register("confirm_password")} />
        {errors?.confirm_password && (
          <p className={styles.error}>{errors.confirm_password.message}</p>
        )}
      </div>
      <button type="submit">{btnMsg}</button>
    </form>
  );
};

export default Form;
