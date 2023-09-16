import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';
import { makeTimestampWithDay } from '../../util/globalFunc';
import API from '../../util/api';

import HeaderBar from '../../components/common/HeaderBar';
import {
  updateAccountNo,
  updateMemberNo,
  updateId,
  updateName,
  updateAge,
  updateGender,
  updateContact,
  updateAccessToken,
  updateRefreshToken,
} from '../../reducers/LoginSlice';

import MyButton from '../../components/common/Button';
import char1 from '../../../assets/character1.png';
import char2 from '../../../assets/character2.png';
import char3 from '../../../assets/character3.png';
import char7 from '../../../assets/character7.png';
import char8 from '../../../assets/character8.png';
import { useEffect, useState } from 'react';

export default function MainPage({ navigation }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.login.name);
  const [recentSchedule, setRecentSchedule] = useState(null);

  const onPressLogout = () => {
    dispatch(updateAccountNo(null));
    dispatch(updateMemberNo(null));
    dispatch(updateId(null));
    dispatch(updateName(null));
    dispatch(updateAge(null));
    dispatch(updateGender(null));
    dispatch(updateContact(null));
    dispatch(updateAccessToken(null));
    dispatch(updateRefreshToken(null));
  };

  const handlePressSend = () => {
    // 송금하기 눌렀을 때 구현할 예정
  };

  const getRecentSchedule = async () => {
    // console.log('getRecentSchedule 실행');
    const thisMonth = new Date().getMonth() + 1;
    const thisYear = new Date().getFullYear();
    const thisDay = new Date().getDate();

    const nextMonth = thisMonth === 12 ? 1 : thisMonth + 1;
    const nextYear = thisMonth === 12 ? thisYear + 1 : thisYear;
    const nextDay = 28;
    const startDate = makeTimestampWithDay(thisYear, thisMonth, thisDay) / 1000;
    const endDate = makeTimestampWithDay(nextYear, nextMonth, nextDay) / 1000;
    // const url = `api/schedule/list`;
    const url = `api/schedule/list?start=${startDate}&end=${endDate}`;
    // const url = `api/schedule/list?start=${startDate}&end=${endDate}`;
    // console.log(url);
    const response = await API.get(url).catch((error) =>
      console.error('Axios 에러', error)
    );
    // console.log('일정응답 데이터:', response.data);
    //데이터 형식 확인할 것
    if (response && response.status === 200 && response.data[0]) {
      setRecentSchedule(response.data[0]);
      console.log(response.data[0]);
    }
  };

  useEffect(() => {
    if (name) {
      getRecentSchedule();
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <HeaderBar
        showBackArrow={false}
        onPressArrow={null}
        title={'홈'}
        showLogout={name ? true : false}
        onPressLogout={onPressLogout}
        showBell={true}
        showThreeDots={false}
        onPressRight={null}
      />
      {/* <View style={styles.titleCon}>
        <Text style={styles.title}>홈</Text>
        <Fontisto name='bell' size={24} color='black' />
      </View> */}

      <View style={styles.loginCon}>
        {name ? (
          <View style={styles.schedule}>
            <View style={styles.ddaydiv}>
              <Text style={styles.dday}>D-10</Text>
            </View>
            <Text style={styles.date}>2023-09-17 13:00</Text>
            <View style={styles.aboutdiv}>
              {recentSchedule ? (
                <View style={styles.schedulename}>
                  {recentSchedule.friend ? (
                    <Text style={styles.scboldText}>
                      [{recentSchedule.friend.relation}]{' '}
                      {recentSchedule.friend.name} 님의
                    </Text>
                  ) : (
                    <Text style={styles.scboldText}>나의</Text>
                  )}
                  <View style={styles.maindiv}>
                    <Text style={styles.bluetext}>{recentSchedule.name}</Text>
                    <Text style={styles.scboldText}>일정이 있습니다.{recentSchedule.scheduleNo}</Text>
                  </View>
                </View>
              ) : (
                <Text>로딩 중 입니다.</Text>
              )}

              {/* <Text style={styles.dday}>200,000원</Text> */}
            </View>
          </View>
        ) : (
          <View style={styles.loginUpper}>
            <View style={styles.loginLeft}>
              <View style={styles.sub}>
                <Text style={styles.grayText}>안녕하세요.</Text>
                <Text style={styles.grayText}>신한 쏠(SOL) 입니다.</Text>
              </View>
              <Text style={styles.boldText}>다양한 서비스 이용을</Text>
              <Text style={styles.boldText}>위해 로그인 해주세요.</Text>
            </View>
            <View style={styles.loginRight}>
              <Image
                source={char1}
                resizeMode='contain'
                style={styles.loginImg}
              />
            </View>
          </View>
        )}
        <MyButton
          title={!name ? '로그인' : '송금하기'}
          backgroundColor='#2B70CC'
          color='white'
          onPress={
            !name
              ? () => navigation.navigate('Login')
              : () => navigation.navigate('CheckAccount')
          }
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.titleCon}>
          <Text style={styles.title}>지인 관리 서비스</Text>
        </View>
        <View style={styles.serviceCon}>
          <View style={styles.serviceLine}>
            <TouchableOpacity
              style={styles.serviceEach}
              onPress={() => navigation.navigate('FriendCreate')}
            >
              <Text style={styles.serviceTitle}>지인 등록</Text>
              <Image
                source={char7}
                resizeMode='contain'
                style={styles.serviceImg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceEach}
              onPress={() => navigation.navigate('CalendarCreate')}
            >
              <Text style={styles.serviceTitle}>일정 등록</Text>
              <Image
                source={char8}
                resizeMode='contain'
                style={styles.serviceImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.serviceLine}>
            <TouchableOpacity
              style={styles.serviceEach}
              onPress={() => navigation.navigate('Savings')}
            >
              <Text style={styles.serviceTitle}>적금편지 상품찾기</Text>
              <Image
                source={char2}
                resizeMode='contain'
                style={styles.serviceImg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceEach}
              onPress={() => navigation.navigate('Gift')}
            >
              <Text style={styles.serviceTitle}>선물 · 금액 추천</Text>
              <Image
                source={char3}
                resizeMode='contain'
                style={styles.serviceImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6FD',
    justifyContent: 'center',
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
  loginCon: {
    flex: 1.3,
    marginTop: 30,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  loginUpper: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  loginImg: {
    width: '80%',
    height: '80%',
  },
  loginLeft: {
    flex: 1.5,
    justifyContent: 'center',
  },
  loginRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2.5,
  },
  grayText: {
    fontSize: 16,
    color: 'gray',
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  scboldText: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  sub: {
    marginBottom: 12,
  },
  serviceCon: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 20,
  },
  serviceEach: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 23,
    paddingHorizontal: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  serviceImg: {
    width: '60%',
    height: '60%',
    marginLeft: 50,
  },
  serviceLine: {
    flex: 1,
    flexDirection: 'row',
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 5,
    paddingVertical: 10,
  },
  schedule: {
    flex: 2,
  },
  dday: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  ddaydiv: {
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 17,
  },
  maindiv: {
    flexDirection: 'row',
    gap: 5,
  },
  bluetext: {
    color: '#2B70CC',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  aboutdiv: {
    gap: 10,
  },
  schedulename: {
    marginTop: 10,
  },
});
