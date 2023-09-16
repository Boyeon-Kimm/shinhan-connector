import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import symbol from '../../../assets/symbol.png';
import MyButton from '../../components/common/Button';
import { useState } from 'react';

export default function CheckTransfer({ route }) {
  const navigation = useNavigation();
  const { friend, sendMoney } = route.params;
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();

  //   const day = ('0' + thisDate.getDate()).slice(-2); // 일
  //   const month = ('0' + (thisDate.getMonth() + 1)).slice(-2); // 월 (0부터 시작하므로 +1 해야 함)
  //   const year = thisDate.getFullYear(); // 연도
  //   const formatted = `${year}-${month}-${day}`;

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.aboutdiv}>
        <Image source={symbol} style={styles.img} />
        <View style={styles.textdiv}>
          <Text style={styles.boldtext}>{sendMoney}원</Text>
          <Text style={styles.boldtext}>송금 완료</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.detaildiv}>
          <Text style={styles.title}>받는 분</Text>
          <Text style={styles.content}>{friend.name}</Text>
        </View>
        <View style={styles.detaildiv}>
          <Text style={styles.title}>날짜</Text>
          <Text style={styles.content}>
            {year}년 {month}월 {day}일 {hour}시 {minute}분
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttondiv}>
          <MyButton
            title='확인'
            backgroundColor='#2B70CC'
            color='white'
            onPress={() => navigation.navigate('AccountDetail')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  img: {
    height: 60,
    width: 60,
  },
  aboutdiv: {
    flex: 4,
    alignItems: 'center',
    paddingTop: 70,
    gap: 15,
  },
  textdiv: {
    alignItems: 'center',
    gap: 4,
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 24,
  },
  middle: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
  detaildiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  content: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttondiv: {
    marginTop: 50,
  },
});
