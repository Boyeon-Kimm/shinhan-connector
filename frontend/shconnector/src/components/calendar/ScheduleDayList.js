import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ScheduleCard from './ScheduleCard';
import HorizonButton from '../common/HorizonButton';
import { colors, font } from '../../config/globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';

const category = ['전체 선택', '보낸 내역', '받은 내역'];

export default function ScheduleDayList({ date }) {
  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const scheduleList = [
    {
      scheduleNo: 5,
      time: '13:00',
      relation: '친구',
      title: '김신한 결혼식 축의금',
      amount: 100000,
      isCompleted: true,
    },
    {
      scheduleNo: 7,
      time: '18:00',
      relation: '가족',
      title: '결혼기념일 선물',
      amount: 1000000,
      isCompleted: false,
    },
  ];

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
          {scheduleList.map((schedule, i) => (
            <ScheduleCard
              key={schedule.scheduleNo}
              time={schedule.time}
              relation={schedule.relation}
              scheduleName={schedule.title}
              amount={schedule.amount}
              completed={schedule.isCompleted}
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
