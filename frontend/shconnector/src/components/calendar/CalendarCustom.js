import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { useSelector, useDispatch } from 'react-redux';

import { updateSelected } from '../../reducers/CalendarSlice';

export default function CalendarCustom(props) {
  // const [colors,mySchedule, schedule]

  const dispatch = useDispatch();
  // const [selected, setSelected] = useState('test');
  const selected = useSelector((state) => state.calendar.selected);
  const [marked, setMarked] = useState({});

  // 도트 설정
  const family = { key: 'family', color: 'red', selected: true, selectedColor: 'yellow' };
  const friend = { key: 'friend', color: 'orange', selectedColor: 'blue' };
  const coworker = { key: 'coworker', color: 'yellow', selected: true, selectedColor: 'yellow' };
  const client = { key: 'client', color: 'green', selected: true, selectedColor: 'yellow' };
  const extra = { key: 'extra', color: 'blue', selected: true, selectedColor: 'yellow' };

  // 문자열 정렬용 함수
  const sortfunc = (a, b) => {
    const order = ['family', 'friend', 'coworker', 'client', 'extra'];
    return order.indexOf(a.key) - order.indexOf(b.key);
  };

  // 표시할 정보
  const info = [
    {
      scheduleNo: 5,
      name: '일정이름',
      content: '일정 상세설명',
      date: '1693699200',
      repeatCycle: '2',
      favorite: 'true',
      alarm: '0',
      Friend: {
        friendNo: '14',
        name: '지인1',
        contact: '010-1234-4567',
        relation: '친구',
        belong: 'ㅇㅇ산악회',
        bankCode: '088',
        account_number: '12342445789',
        image: '지인1.png',
      },
    },
    {
      scheduleNo: 7,
      name: '일정이름2',
      content: '일정 상세설명2',
      date: '1693699200',
      repeatCycle: '0',
      favorite: 'true',
      alarm: '3',
      Friend: {
        friendNo: '14',
        name: '지인2',
        contact: '010-1234-4567',
        relation: '가족',
        belong: '가족',
        bankCode: '088',
        account_number: '12342445789',
        image: '지인2.png',
      },
    },
    {
      scheduleNo: 9,
      name: '일정이름3',
      content: '일정 상세설명3',
      date: '1693785600',
      repeatCycle: '0',
      favorite: 'true',
      alarm: '3',
      Friend: {
        friendNo: '14',
        name: '지인1',
        contact: '010-1234-4567',
        relation: '친구',
        belong: 'ㅇㅇ산악회',
        bankCode: '088',
        account_number: '12342445789',
        image: '지인1.png',
      },
    },
  ];

  // 최초 실행 시 실행됨
  useEffect(() => {
    makeDots(info);
  }, []);

  const makeDots = (info) => {
    const newMarked = {};
    for (const schedule of info) {
      // 날짜 포맷팅
      const thisDate = new Date(schedule.date * 1000);
      const day = String(thisDate.getDate()).padStart(2, '0'); // 일
      const month = String(thisDate.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 +1 해야 함)
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
        newMarked[formatted] = { dots: [] };
      }
      newMarked[formatted].dots.push(target);
      // newMarked[formatted].dots.sort(sortfunc);
      // 정렬순서 = [family, friend, coworker, client, extra];

      // console.log(newMarked[formatted]);
      // newMarked[formatted] = { dots: [friend, family] };
      // console.log(newMarked);
    }

    for (const marks in newMarked) {
      console.log(newMarked[marks].dots);
      newMarked[marks].dots.sort(sortfunc);
      console.log(newMarked[marks].dots);
    }
    setMarked(newMarked);
  };

  // day 클릭 시 실행 함수
  const onDayPress = (day) => {
    const newMarked = marked;
    // 선택되지 않은 날짜 선택했으면
    if (day.dateString !== selected) {
      // 선택된 게 있으면 지우기
      if (selected) {
        if (newMarked[selected]) newMarked[selected].selected = false;
      }

      dispatch(updateSelected(day.dateString));

      if (!newMarked[day.dateString]) newMarked[day.dateString] = {};
      newMarked[day.dateString].selected = true;
      newMarked[day.dateString].selectedColor = 'orange';
    }
    // 이미 선택한 날짜 재선택했으면
    else {
      const newMarked = marked;
      // 칠해진 부분 있으면 지우기
      if (newMarked[selected]) newMarked[selected].selected = false;
      dispatch(updateSelected(null));
    }
    setMarked(newMarked);
  };

  return (
    <View>
      <Calendar
        onDayPress={onDayPress}
        markingType="multi-dot"
        markedDates={marked}
        // markedDates={{
        //   [selected]: { dots: [friend, family], selected: true, disableTouchEvent: true, selectedColor: 'orange' },
        //   // '2023-09-21': { dots: [friend, family], selectedColor: 'orange' },
        // }}
      />
      <Text>{selected}</Text>
      <Text>{marked[0]}</Text>
      <Text>test</Text>
    </View>
  );
}
