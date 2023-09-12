import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { useSelector, useDispatch } from 'react-redux';

import {
  initAll,
  updateSelected,
  updateMarked,
  updateCurrMonth,
  updateCurrYear,
} from '../../reducers/CalendarSlice';

import { colors } from '../../config/globalStyles';
import { dayFormat } from '../../util/globalFunc';

export default function CalendarCustom({ othersInfo }) {
  // const [colors,mySchedule, schedule]

  const dispatch = useDispatch();
  // const [selected, setSelected] = useState('test');
  const selected = useSelector((state) => state.calendar.selected);
  const currYear = useSelector((state) => state.calendar.currYear);
  const currMonth = useSelector((state) => state.calendar.currMonth);
  // const [marked, setMarked] = useState({});
  const marked = useSelector((state) => state.calendar.marked);
  // 도트 설정
  const family = { key: 'family', color: colors.family };
  const friend = { key: 'friend', color: colors.friend };
  const coworker = { key: 'coworker', color: colors.coworker };
  const client = { key: 'client', color: colors.client };
  const extra = { key: 'extra', color: colors.extra };

  // 최초 실행 시 실행됨
  useEffect(() => {
    dispatch(initAll());
    makeDots(othersInfo);
  }, []);

  const makeDots = (info) => {
    const newMarked = {};
    for (const schedule of info) {
      // 날짜 포맷팅
      const thisDate = new Date(schedule.date * 1000);
      const formatted = dayFormat(thisDate);

      const category = schedule.Friend.relation;

      // 카테고리 별 추가할 도트 지정
      let target = null;
      if (category === '가족') target = family;
      if (category === '친구') target = friend;
      if (category === '직장') target = coworker;
      if (category === '거래처') target = client;
      if (category === '기타') target = extra;

      if (!newMarked[formatted]) {
        newMarked[formatted] = {
          dots: [],
          selected: false,
          selectedColor: colors.shinhan,
        };
      }
      newMarked[formatted].dots.push(target);
    }
    dispatch(updateMarked(newMarked));
  };

  // day 클릭 시 실행 함수
  const onPressDay = (day) => {
    const newMarked = { ...marked };
    // 선택된 게 있으면 지우기
    if (selected) {
      if (newMarked[selected])
        newMarked[selected] = { ...newMarked[selected], selected: false };
    }

    // 다른날짜면 새 선택에 대해 칠하고 리덕스 selected 업데이트 하기
    if (selected === null || day.dateString !== selected) {
      if (!newMarked[day.dateString])
        newMarked[day.dateString] = {
          dots: [],
          selected: true,
          selectedColor: colors.shinhan,
        };
      else {
        newMarked[day.dateString] = {
          ...newMarked[day.dateString],
          selected: true,
          selectedColor: colors.shinhan,
        };
      }

      dispatch(updateSelected(day.dateString));
    }
    // 이미 선택한 날짜 재선택했으면 리덕스 selected 비우기
    else dispatch(updateSelected(null));

    dispatch(updateMarked(newMarked));
  };

  // const onPressArrowLeft = () => {
  //   console.log('left');
  //   console.log(currMonth + ' ' + currYear + 'before');

  //   if (currMonth === 0) {
  //     dispatch(updateCurrMonth(11));
  //     dispatch(updateCurrYear(currYear - 1));
  //   } else dispatch(updateCurrMonth(currMonth - 1));
  //   console.log(currMonth + ' ' + currYear);
  // };

  // const onPressArrowRight = () => {
  //   console.log('right');

  //   console.log(currMonth + ' ' + currYear + 'before');

  //   if (currMonth === 11) {
  //     dispatch(updateCurrMonth(0));
  //     dispatch(updateCurrYear(currYear + 1));
  //   } else dispatch(updateCurrMonth(currMonth + 1));
  //   console.log(currMonth + ' ' + currYear);
  // };

  return (
    <View style={styles.container}>
      <Text>{currMonth} {currYear}</Text>
      <Calendar
        initialDate={dayFormat(new Date())}
        onDayPress={onPressDay}
        markingType='multi-dot'
        markedDates={marked}
        onMonthChange={(date) => {

          dispatch(updateCurrMonth(date.month));
          dispatch(updateCurrYear(date.year));
          console.log('month changed', date.year, date.month);
          console.log('current      ', currMonth, currYear);

        }}
        // onPressArrowLeft={(substractMonth) => {
        //   substractMonth();
        //   onPressArrowLeft();
        // }}
        // onPressArrowRight={(addMonth) => {
        //   addMonth();
        //   onPressArrowRight();
        // }}
        // markedDates={{
        //   [selected]: { dots: [friend, family], selected: true, disableTouchEvent: true, selectedColor: 'orange' },
        //   // '2023-09-21': { dots: [friend, family], selectedColor: 'orange' },
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
