import { Dimensions, useWindowDimensions } from 'react-native';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

export const colors = {
  shinhan: '#2b70cc', // 신한 대표 색상 코드
  headerBlack: '#333333', // 헤더 블랙 색상
  inputBackground: '#F9F9F9', // 인풋 백그라운드
  inputBorder: '#dcdcdc', // 인풋 외곽선
  tableTop: '#3579d4', // 테이블 top 색상
  tableBottom: '#b7bbd1', // 테이블 bottom 색상
  pwBackground: '#F3F4F8', // 계좌 비밀번호 백그라운드 색상
  title: '#454545', // 타이틀 색상
  subtitle: '#343434', // 서브타이틀 색상
  infoBackground: '#F9F9F9', // 안내문구 백그라운드
  subcontent: '#666666', // 서브콘텐트
  button: '#D2E4FC', // 평행버튼 색상

  mine: 'black',
  family: 'red',
  friend: 'orange',
  coworker: 'yellow',
  client: 'green',
  extra: 'blue',
};
export const fonts = {};

export const basicDimensions = {
  // 디자인 작업 스크린의 세로,가로
  width: 390,
  height: 844,
};

export const getWindowDimensions = () => {
  const { width, height } = useWindowDimensions();
  return { windowWidth: width, windowHeight: height };
};

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const widthScale = // 가로 변환 작업
  (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2);

export const heightScale = // 높이 변환 작업
  (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2);

export const font = (pixel) => {
  return (
    (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(
      2
    ) * pixel
  );
};
