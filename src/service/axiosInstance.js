import axios from 'axios';
import { GET_COOKIES } from '../untils/js-cookie';

// 創建axios實例並給定預設網址
const axiosInstance = axios.create({
  baseURL: '/service/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { headers, ...configSetting } = config;

    // 跟cookie取得Token
    const accessToken = GET_COOKIES() || 'false';

    // 如果有拿到Token就把Token存進header裡面
    if (accessToken !== 'false') {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    return { ...configSetting, headers };
  },
  (error) => Promise.reject(error),
);

// 接收response
axiosInstance.interceptors.response.use(
  (response) => {
  // data => 使用者資訊跟Token & status => http的status code
    const { status, data: respData = {} } = response;
    const { data, message, success } = respData;
    // 回傳結果
    return {
      data, status, message, success,
    };
  },

  // 如果使用者登入驗證沒有通過就會進到error函式
  (error) => {
    const { response = {} } = error;
    const {
      status, data = {}, success, message,
    } = response;

    // 如果回傳false代表登入失敗跳錯誤彈窗並導向Login頁面

    return Promise.resolve({
      status, data, success, message,
    });
  },
);

export { axiosInstance };
