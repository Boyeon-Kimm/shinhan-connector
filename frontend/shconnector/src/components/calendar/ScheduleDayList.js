import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ScheduleCard from './ScheduleCard';
import HorizonButton from '../common/HorizonButton';
import { colors, font } from '../../config/globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ScheduleDayList({ date }) {
  const scheduleList = [
    { scheduleNo: 5, time: '13:00', relation: '친구', title: '김신한 결혼식 축의금', amount: 100000, isCompleted: true },
    { scheduleNo: 7, time: '18:00', relation: '가족', title: '결혼기념일 선물', amount: 1000000, isCompleted: false },
  ];

  const onPressAll = () => {};
  const onPressSend = () => {};
  const onPressReceive = () => {};

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
      <View style={styles.horizonContainer}>
        <HorizonButton
          onPress={onPressAll}
          title="전체 선택"
          backgroundColor={colors.button}
          color={colors.shinhan}
          borderColor={colors.button}
          selected={true}
        />
        <HorizonButton
          onPress={onPressSend}
          title="보낸 선물"
          backgroundColor={colors.button}
          color={colors.shinhan}
          borderColor={colors.button}
          selected={false}
        />
        <HorizonButton
          onPress={onPressReceive}
          title="받은 선물"
          backgroundColor={colors.button}
          color={colors.shinhan}
          borderColor={colors.button}
          selected={false}
        />
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
        placeholder="-- 경조사 종류 선택 --"
      />
      <View style={{ flexGrow: 1, backgroundColor: 'red' }}>
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
  wholeContainer: { flex: 1, paddingHorizontal: 15 },
  horizonContainer: { flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: font(7) },

  style: { borderColor: colors.inputBorder, paddingVertical: font(10), minHeight: 0 },
  containerStyle: { borderColor: colors.inputBorder },
  dropDownContainerStyle: { borderColor: colors.inputBorder },
  textStyle: { color: colors.title, fontSize: font(16) },
  labelStyle: {},
});
