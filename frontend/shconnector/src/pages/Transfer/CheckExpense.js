import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import API from '../../util/api';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function CheckExpense({ route }) {
  const navigation = useNavigation();
  const accountNumber = useSelector((state) => state.login.accountNo);
  const [remainMoney, setRemainMoney] = useState(null);
  const { friend } = route.params;

  const getAccountData = async () => {
    const url = `/api/account/${accountNumber}`;
    const response = await API.get(url).catch((error) => {
      console.log('Axios 에러', error.response);
      if (error.response.status === 400) {
        console.log('잘못된 계좌 정보');
      }
      if (error.response.status === 403) {
        console.log('타인의 계좌');
      }
    });
    console.log(response);

    if (response && response.status === 200) {
      setRemainMoney(response.data.remainMoney);
    } else {
      console.log('계좌 조회에 실패하였습니다');
    }
  };
  useEffect(() => {
    getAccountData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.upper}>
        <Text style={styles.boldtext}>{friend.name}님께</Text>
        <Text style={styles.boldtext}>얼마를 보내시겠습니까?</Text>
        <TextInput
          style={styles.input}
          placeholder='보낼금액(원)'
          keyboardType='text'
        />
        <Text style={styles.bottomtext}>잔액: {remainMoney}원</Text>
      </View>
      <View style={styles.lower}>
        <TouchableOpacity style={styles.buttondiv}>
          <MyButton
            title='송금하기'
            backgroundColor='#2B70CC'
            color='white'
            onPress={() => navigation.navigate('CheckTransfer', { friend })}
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
    paddingBottom: 20,
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 24,
  },
  input: {
    fontSize: 24,
    paddingTop: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#E2EEFF',
    paddingBottom: 10,
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  lower: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomtext: {
    marginTop: 10,
    color: '#3A3A3A',
  },
});
