import * as yup from 'yup';

export const formSchema = yup.object().shape({
  username: yup.string().required('O nome de usuário é obrigatório').min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: yup.string().required('O email é obrigatório').email('Digite um email válido'),
  password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 caracteres'),
  repeat_password: yup.string().required('A confirmação de senha é obrigatória').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;
