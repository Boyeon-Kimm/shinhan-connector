
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { StatusBar } from "expo-status-bar";

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from "@expo/vector-icons";

import MyCalendar from "../../components/calendar/CalendarCustom";
import ScheduleDayList from "../../components/calendar/ScheduleDayList";
import {
  font,
  statusBarHeight,
  widthScale,
  heightScale,
  colors,
} from "../../config/globalStyles";

import HeaderBar from "../../components/common/HeaderBar";
import { useEffect } from 'react';

export default function CalendarPage() {
  const selected = useSelector((state) => state.calendar.selected);
  const currMonth = useSelector((state) => state.calendar.currMonth);

  const headerSize = 24;

  const myInfo = [
    {
      scheduleNo: 5,
      name: "일정이름",
      content: "일정 상세설명",
      date: "1693699200",
      repeatCycle: "2",
      favorite: "true",
      alarm: "0",
      Friend: null,
    },
  ];

  const othersInfo = [
    {
      scheduleNo: 5,
      name: "일정이름",
      content: "일정 상세설명",
      date: "1693699200",
      repeatCycle: "2",
      favorite: "true",
      alarm: "0",
      Friend: {
        friendNo: "14",
        name: "지인1",
        contact: "010-1234-4567",
        relation: "친구",
        belong: "ㅇㅇ산악회",
        bankCode: "088",
        account_number: "12342445789",
        image: "지인1.png",
      },
    },
    {
      scheduleNo: 7,
      name: "일정이름2",
      content: "일정 상세설명2",
      date: "1693699200",
      repeatCycle: "0",
      favorite: "true",
      alarm: "3",
      Friend: {
        friendNo: "14",
        name: "지인2",
        contact: "010-1234-4567",
        relation: "가족",
        belong: "가족",
        bankCode: "088",
        account_number: "12342445789",
        image: "지인2.png",
      },
    },
    {
      scheduleNo: 9,
      name: "일정이름3",
      content: "일정 상세설명3",
      date: "1693785600",
      repeatCycle: "0",
      favorite: "true",
      alarm: "3",
      Friend: {
        friendNo: "14",
        name: "지인1",
        contact: "010-1234-4567",
        relation: "친구",
        belong: "ㅇㅇ산악회",
        bankCode: "088",
        account_number: "12342445789",
        image: "지인1.png",
      },
    },
  ];

  useEffect(()=>{
    //현재 월의 데이터 받아오는 api 실행
    console.log(currMonth);
  },[])

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="auto" />
      <View style={styles.titleCon}>
        <View style={styles.titleLeft}>
          <AntDesign
            name="left"
            size={headerSize}
            color="black"
          />
          <Text style={styles.title}>나의 일정</Text>
        </View>
        <Fontisto name="bell" size={24} color="black" />
      </View>
      <MyCalendar
        myInfo={myInfo}
        othersInfo={othersInfo}
      />
      {selected ? (
        <ScheduleDayList />
      ) : (
        <View style={styles.infoDiv}>
          <View style={styles.infoCard}>
            <Text style={styles.boldText}>이번 달 지출한 경조사 비용</Text>
            <Text style={styles.blueText}>450,000원</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.boldText}>올해 지출한 경조사 비용</Text>
            <Text style={styles.blueText}>1,240,000원</Text>
          </View>
        </View>
      )}

      <AntDesign
        name="pluscircle"
        size={widthScale * 40}
        color="black"
        style={styles.plusButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  scheduleCon: {
    flex: 1,
    backgroundColor: "white",
    // paddingHorizontal: font(30),
  },
  infoCard: {

    backgroundColor: '#F1F6FD',
    width: widthScale * 327,
    height: heightScale * 130,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  plusButton: { position: 'absolute', bottom: widthScale * 10, right: widthScale * 20, color: colors.shinhan },
  titleCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
    marginHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  infoDiv: {
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
  },
  blueText: {
    fontWeight: '700',
    color: '#2B70CC',
    fontSize: 26,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "600",
  }
});
