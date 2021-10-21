import * as yup from "yup";

const profileValidation = yup.object({
  Nome: yup.string(),
  Email: yup.string(),
  Password: yup.string().test('len', 'Deve ter ao menos 6 carácteres', val => val.length >= 6 || val.length === 0),
  RepeatPassword: yup.string().oneOf([yup.ref('Password'), null], 'As senhas devem coincidir'),
  Descricao: yup.string()
});


export default profileValidation;