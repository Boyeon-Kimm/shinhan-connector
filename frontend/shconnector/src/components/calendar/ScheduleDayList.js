import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ScheduleCard from './ScheduleCard';
import HorizonButton from '../common/HorizonButton';
import { colors, font } from '../../config/globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../util/api';
import { updateDaySchedules } from '../../reducers/CalendarSlice';
const category = ['전체 선택', '보낸 내역', '받은 내역'];

export default function ScheduleDayList() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selected);
  const daySchedules = useSelector((state) => state.calendar.daySchedules);

  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const onPressHorizon = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '가족', value: '가족' },
    { label: '친구', value: '친구' },
    { label: '직장', value: '직장' },
    { label: '거래처', value: '거래처' },
    { label: '기타', value: '기타' },
  ]);

  const getDaySchedules = async () => {
    const newDate = new Date(selectedDate);
    const newTimestamp = newDate.getTime() / 1000;
    // console.log(newTimestamp);
    const url = `api/schedule/list?start=${newTimestamp}&end=${
      newTimestamp + 86400
    }`;

    const response = await API.get(url).catch((error) => {
      console.log('Axios 에러', error.response);
      // if (error.response.status === 400) {
      //   setMessage(error.response.data.message);
      // }
    });
    // console.log(response.data);

    if (response && response.status === 200) {
      dispatch(updateDaySchedules(response.data));
    } else {
      console.log('하루 일정 목록 조회 실패');
    }
  };

  useEffect(() => {
    getDaySchedules();
  }, [selectedDate]);

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.horizonCon}>
        <ScrollView horizontal={true}>
          {category.map((item) => (
            <HorizonButton
              key={item}
              onPress={() => {
                onPressHorizon(item);
              }}
              title={item}
              backgroundColor={colors.button}
              color={colors.shinhan}
              borderColor={colors.button}
              selected={currentCategory === item ? true : false}
            />
          ))}
        </ScrollView>
      </View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.style}
        containerStyle={styles.containerStyle}
        textStyle={styles.textStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        placeholder='-- 경조사 종류 선택 --'
      />
      <View style={{ flexGrow: 1 }}>
        <ScrollView>
          {daySchedules.map((schedule, i) => (
            <ScheduleCard
              key={schedule.scheduleNo}
              time={schedule.date}
              friendName={schedule.friend ? schedule.friend.name : '나의 일정'}
              relation={schedule.friend ? schedule.friend.relation : ''}
              scheduleNo={schedule.scheduleNo}
              scheduleName={schedule.name}
              scheduleCategory={schedule.friend ? null : 'mine'}
              // amount={schedule.amount}
              // completed={schedule.isCompleted}
            ></ScheduleCard>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    paddingHorizontal: 15,
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  horizonCon: { height: '20%', alignItems: 'center' },
  style: {
    borderColor: colors.inputBorder,
    paddingVertical: font(10),
    minHeight: 0,
  },
  containerStyle: {
    backgroundColor: 'white',
    borderColor: colors.inputBorder,
    zIndex: 5000,
  },
  dropDownContainerStyle: { borderColor: colors.inputBorder },
  textStyle: { color: colors.title, fontSize: font(16) },
  labelStyle: {},
});
