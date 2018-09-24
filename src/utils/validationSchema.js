import * as Yup from 'yup';
import { MIN_PASSWORD_LENGTH } from './contants';

const getValidationSchemaLogin = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(
        MIN_PASSWORD_LENGTH,
        `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
      )
  });
};
const getValidationSchemaRegister = () => {
  return Yup.object().shape({
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    email: Yup.string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(
        MIN_PASSWORD_LENGTH,
        `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
      )
  });
};

export default { getValidationSchemaLogin, getValidationSchemaRegister };
export { getValidationSchemaLogin, getValidationSchemaRegister };
