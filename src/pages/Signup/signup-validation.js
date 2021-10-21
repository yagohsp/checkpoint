import * as yup from "yup";

const signupValidation = yup.object({
  email: yup.string()
  .required("Campo necessário"),
  password: yup.string().required("Campo necessário"),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem coincidir')
});


export default signupValidation;