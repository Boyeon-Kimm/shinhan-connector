import dayjs from 'dayjs';

// new Date() 처럼 Date 형식 인풋 필요
export const dayFormat = (thisDate) => {
  //   const day = ('0' + thisDate.getDate()).slice(-2); // 일
  //   const month = ('0' + (thisDate.getMonth() + 1)).slice(-2); // 월 (0부터 시작하므로 +1 해야 함)
  //   const year = thisDate.getFullYear(); // 연도
  //   const formatted = `${year}-${month}-${day}`;
  const formatted = dayjs(thisDate).format('YYYY-MM-DD');
  return formatted;
};
