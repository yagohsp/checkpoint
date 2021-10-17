import * as yup from "yup";

const postValidation = yup.object({
  description: yup.string().required("Campo necessário").test('len', 'Deve ter ao menos 1 caracter', val => val.length > 1)
});


export default postValidation;