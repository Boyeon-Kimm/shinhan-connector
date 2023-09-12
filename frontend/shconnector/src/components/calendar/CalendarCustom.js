import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { useSelector, useDispatch } from 'react-redux';

import {
  initAll,
  updateSelected,
  updateMarked,
} from '../../reducers/CalendarSlice';

import { colors } from '../../config/globalStyles';

export default function CalendarCustom({ othersInfo }) {
  // const [colors,mySchedule, schedule]

  const dispatch = useDispatch();
  // const [selected, setSelected] = useState('test');
  const selected = useSelector((state) => state.calendar.selected);
  // const [marked, setMarked] = useState({});
  const marked = useSelector((state) => state.calendar.marked);
  // 도트 설정
  const family = { key: 'family', color: 'red' };
  const friend = { key: 'friend', color: 'orange' };
  const coworker = { key: 'coworker', color: 'yellow' };
  const client = { key: 'client', color: 'green' };
  const extra = { key: 'extra', color: 'blue' };

  // 문자열 정렬용 함수
  const sortfunc = (a, b) => {
    const order = ['family', 'friend', 'coworker', 'client', 'extra'];
    return order.indexOf(a.key) - order.indexOf(b.key);
  };

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
      const day = ('0' + thisDate.getDate()).slice(-2); // 일
      const month = ('0' + (thisDate.getMonth() + 1)).slice(-2); // 월 (0부터 시작하므로 +1 해야 함)
      const year = thisDate.getFullYear(); // 연도
      const formatted = `${year}-${month}-${day}`;

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

    // for (const marks in newMarked) {
    //   newMarked[marks].dots.sort(sortfunc);
    // }
    dispatch(updateMarked(newMarked));
  };

  // // day 클릭 시 실행 함수
  // const onPressDay = (day) => {
  //   const newMarked = marked;
  //   // 선택되지 않은 날짜 선택했으면
  //   if (day.dateString !== selected) {
  //     // 선택된 게 있으면 지우기
  //     if (selected) {
  //       if (newMarked[selected]) newMarked[selected].selected = false;
  //     }

  //     dispatch(updateSelected(day.dateString));

  //     if (!newMarked[day.dateString]) newMarked[day.dateString] = {};
  //     newMarked[day.dateString].selected = true;
  //     newMarked[day.dateString].selectedColor = colors.shinhan;
  //   }
  //   // 이미 선택한 날짜 재선택했으면
  //   else {
  //     const newMarked = marked;
  //     // 칠해진 부분 있으면 지우기
  //     if (newMarked[selected]) newMarked[selected].selected = false;
  //     dispatch(updateSelected(null));
  //   }
  //   setMarked(newMarked);
  // };

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

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onPressDay}
        markingType='multi-dot'
        markedDates={marked}
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
