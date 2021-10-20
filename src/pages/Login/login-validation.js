import * as yup from "yup";

const loginValidation = yup.object({
  email: yup.string()
  .required("Campo necessário"),
  password: yup.string().required("Campo necessário")
});


export default loginValidation;