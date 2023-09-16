import { useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';
import MyCalendar from '../../components/calendar/CalendarCustom';
import ScheduleDayList from '../../components/calendar/ScheduleDayList';
import {
  font,
  statusBarHeight,
  widthScale,
  heightScale,
  colors,
} from '../../config/globalStyles';
import HeaderBar from '../../components/common/HeaderBar';
import { updateSchedules } from '../../reducers/CalendarSlice';
import API from '../../util/api';
import { makeTimestamp } from '../../util/globalFunc';

export default function CalendarPage({ navigation }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.calendar.selected);
  const currMonth = useSelector((state) => state.calendar.currMonth);
  const currYear = useSelector((state) => state.calendar.currYear);
  const schedules = useSelector((state) => state.calendar.schedules);

  const getSchedules = async (year, month) => {
    console.log('getSchedules 실행');
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const startDate = makeTimestamp(prevYear, prevMonth) / 1000;
    const endDate = makeTimestamp(nextYear, nextMonth) / 1000;
    // const url = `api/schedule/list`;
    const url = `api/schedule/list?start=${startDate}&end=${endDate}`;
    // const url = `api/schedule/list?start=${startDate}&end=${endDate}`;
    console.log(url);
    const response = await API.get(url).catch((error) =>
      console.error('Axios 에러', error)
    );
    console.log('일정응답 데이터:', response.data);
    //데이터 형식 확인할 것
    if (response && response.status === 200)
      dispatch(updateSchedules(response.data));
  };

  const handlePressArrow = () => {
    navigation.goBack();
  };

  useEffect(() => {
    //현재 월의 데이터 받아오는 api 실행
    // console.log(currYear);
    // console.log(currMonth);
    getSchedules(currYear, currMonth);
    // console.log(schedules);
  }, [currYear, currMonth]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style='auto' />
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={'나의 일정'}
        showLogout={false}
        showBell={true}
        showThreeDots={false}
        onPressRight={null}
      />
      <MyCalendar scheduleInfo={schedules} />
      {selected ? (
        <ScheduleDayList />
        // null
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
        name='pluscircle'
        size={widthScale * 40}
        color='black'
        style={styles.plusButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  scheduleCon: {
    flex: 1,
    backgroundColor: 'white',
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
  plusButton: {
    position: 'absolute',
    bottom: widthScale * 10,
    right: widthScale * 20,
    color: colors.shinhan,
  },
  titleCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    marginHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
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
    fontWeight: '600',
  },
});
