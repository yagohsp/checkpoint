import * as yup from "yup";

const profileValidation = yup.object({
  nome: yup.string().required("Campo necessário")
});


export default profileValidation;