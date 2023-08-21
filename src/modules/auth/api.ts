import http from 'services/http';

import { IApi } from './types';

export const Register = ({ email, username, password, confirmPassword }: IApi.Register.Request) => {
  const formData = new FormData();

  formData.set('email', email);
  formData.set('username', username);
  formData.set('password', password);
  formData.set('re_password', confirmPassword);

  return http.post<IApi.Register.Response>('/users/', formData);
};
export const Login = ({ username, password }: IApi.Login.Request) => {
  const formData = new FormData();

  formData.set('username', username);
  formData.set('password', password);

  return http.post('/users/token/', formData);
};

export const Verification = ({ activationCode, email }: IApi.Verification.Request) => {
  const formData = new FormData();

  formData.set('email', email);
  formData.set('activation_code', `${activationCode}`);

  return http.post('/users/activate/', formData);
};

export const SendResetPasswordCode = () => http.post('/users/');
export const ConfirmResetPassword = () => http.post('/users/');
export const Profile = () => http.get<IApi.Profile.Response>('/users/getme/');
