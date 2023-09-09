import { Text, View, Dimensions, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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

export default function CalendarPage() {
  const selected = useSelector((state) => state.calendar.selected);

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

  return (
    <View style={styles.scheduleCon}>
      <HeaderBar showBackArrow={true} title={"나의 일정"} showLogout={false} showBell={false} showThreeDots={true} onPressRightIcon={null}/>

      <MyCalendar myInfo={myInfo} othersInfo={othersInfo} />
      {selected ? (
        <ScheduleDayList />
      ) : (
        <View style={{ backgroundColor: "red" }}>
          <View style={styles.infoCard}>
            <Text>이번 달 총 경조사 비용은</Text>
            <Text>450,000원 입니다</Text>
          </View>
          <View style={styles.infoCard}>
            <Text>올해 총 경조사 비용은</Text>
            <Text>1,240,000원 입니다</Text>
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
    backgroundColor: "orange",
    width: widthScale * 327,
    height: heightScale * 120,
    borderRadius: 20,
  },
  plusButton: {
    position: "absolute",
    bottom: widthScale * 10,
    right: widthScale * 20,
    color: colors.shinhan,
  },
});
