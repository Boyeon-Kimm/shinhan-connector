import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux';
import { updateAccessToken, updateRefreshToken } from '../reducers/LoginSlice';
import store from '../../store';
export const URL = 'http://52.79.227.171:8080';

const api = axios.create({
  baseURL: URL,
  responseType: 'json',
});

// const mamStatetoProps = (state) => {
//   return {
//     accessToken: state.login.accessToken,
//     refreshToken: state.login.refreshToken,
//   };
// };

const tokenRefresh = async () => {
  const dispatch = useDispatch();
  try {
    const refreshToken = store.getState().login.refreshToken;

    if (refreshToken) {
      const response = await axios.post(
        `토큰 갱신 url`,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      const newAccessToken = response.data.accessToken;
      dispatch(updateAccessToken(newAccessToken));
      return newAccessToken;
    }
  } catch (error) {
    console.error('토큰 교체 실패:', error);
    throw error; // 에러 다시 던지기
  }
};

// 요청 시 인터셉트. access 토큰 있으면 넣을 예정
api.interceptors.request.use(
  async (config) => {
    // 액세스 토큰 넣기 코드 작성 예정
    const accessToken = store.getState().login.accessToken;
    // const refreshToken = store.getState().login.refreshToken; // 테스트용
    console.log('요청 인터셉트 엑세스토큰: ', accessToken);
    // console.log('요청 인터셉트 리프레토큰: ', refreshToken); // 테스트용
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error('axios 요청 실패 - api.js에서 보냄', error);
    return Promise.reject(error);
  }
);

// 응답 시 인터셉트. 만료시 갱신 시도 예정
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 갱신 시도 코드 작성 예정
    if (error.response && error.response.data.만료시_갱신된_코드_리턴됐으면) {
      try {
        // accessToken 교체
        const newAccessToken = await tokenRefresh();

        // 교체된 accessToken으로 재시도
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        const response = await axios.request(error.config);
        return response;
      } catch (error) {
        console.error('토큰 만료 및 교체 실패', refreshError);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
