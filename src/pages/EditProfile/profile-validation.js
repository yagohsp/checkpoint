import * as yup from "yup";

const profileValidation = yup.object({
  username: yup.string().required("Campo necessário"),
  email: yup.string().required("Campo necessário"),
  password: yup.string(),
  repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem coincidir'),
  description: yup.string()
});


export default profileValidation;