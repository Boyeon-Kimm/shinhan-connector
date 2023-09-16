import dayjs from 'dayjs';

// new Date() 처럼 Date 형식 인풋 필요
export const dayFormat = (thisDate) => {
  //   const day = ('0' + thisDate.getDate()).slice(-2); // 일
  //   const month = ('0' + (thisDate.getMonth() + 1)).slice(-2); // 월 (0부터 시작하므로 +1 해야 함)
  //   const year = thisDate.getFullYear(); // 연도
  //   const formatted = `${year}-${month}-${day}`;
  console.log('thisDate', thisDate);
  const formatted = dayjs(thisDate).format('YYYY-MM-DD');
  console.log('formatted', formatted);

  return formatted;
};

export const makeTimestamp = (year, month) => {
  const newMonth = ('0' + month).slice(-2);
  const newDate = new Date(`${year}-${newMonth}-01`);
  const newTimestamp = newDate.getTime();
  return newTimestamp;
};
export const makeTimestampWithDay = (year, month, day) => {
  const newMonth = ('0' + month).slice(-2);
  const newDay = ('0' + day).slice(-2);
  const newDate = new Date(`${year}-${newMonth}-${newDay}`);
  const newTimestamp = newDate.getTime();
  return newTimestamp;
};
