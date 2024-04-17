import { axiosInstance } from '../axiosInstance';

export const FETCH_AUTH = {
  Login: (data) => axiosInstance.post('/AllToken/Login', data),
  GetLoginInfo: () => axiosInstance.get('/AllToken/GetLoginInfo'),
  VerificationCodeSend: (data) => axiosInstance.post('/AllToken/VerificationCodeSend', data),
  Register: (data) => axiosInstance.post('/User/Register', data),
  ChangePassword: (data) => axiosInstance.post('/User/ChangePassword', data),
  GetProfile: () => axiosInstance.get('/AllToken/GetProfile'),
  Update: (data) => axiosInstance.put('/User/UserUpdate', data),
  ChangeUserPassword: (data) => axiosInstance.post('/User/ChangeUserPassword', data),
};
