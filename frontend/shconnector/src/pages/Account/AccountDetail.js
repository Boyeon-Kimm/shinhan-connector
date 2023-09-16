import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Symbol from '../../../assets/symbol.png';
import MyButton from '../../components/common/Button';
import SearchInput from '../../components/input/SearchInput';
import DepositEach from '../../components/List/DepositEach';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../util/api';
import { updateAcountList } from '../../reducers/AccountSlice';
import {dayFormat} from '../../util/globalFunc';

export default function AccountDetail({ title, bank, accountNo }) {
  const dispatch = useDispatch();

  const accountNumber = useSelector((state) => state.login.accountNo);
  const [remainMoney, setRemainMoney] = useState(null);
  const accountHistory = useSelector((state) => state.account.accountList);

  const bankMapping = {
    '039': '경남은행',
    '034': '광주은행',
    '004': '국민은행',
    '003': '기업은행',
    '011': '농협중앙회',
    '012': '지역농협·축협',
    '031': '대구은행',
    102: '대신저축은행',
    '055': '도이치은행',
    '052': '모건스탠리은행',
    '059': '미쓰비시은행',
    '032': '부산은행',
    '064': '산림조합중앙회',
    '002': '산업은행',
    '050': '상호저축은행',
    '045': '새마을금고',
    '007': '수협',
    '027': '씨티은행',
    '088': '신한은행',
    '048': '신협',
    '060': '아메리카은행',
    '005': '외환은행',
    '020': '우리은행',
    '071': '우체국',
    105: '웰컴저축은행',
    '037': '전북은행',
    '057': '제이피모던체이스은행',
    '035': '제주은행',
    '090': '카카오뱅크',
    '089': '케이뱅크',
    '081': '하나은행',
    '008': '한국수출입은행',
    '001': '한국은행',
    '054': 'HSBC',
    '023': 'SC제일은행',
  };

  const getAccountHistory = async () => {
    const url = `/api/account/${accountNumber}/history`;
    const response = await API.get(url).catch((error) => {
      console.log('Axios 에러', error.response);
    });
    console.log(response.data);

    if (response && response.status === 200) {
      dispatch(updateAcountList(response.data));
    } else {
      console.log('계좌 내역 조회에 실패하였습니다');
    }
  };

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
      getAccountHistory();
    } else {
      console.log('계좌 조회에 실패하였습니다');
    }
  };

  useEffect(() => {
    getAccountData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text style={styles.title}>거래내역 조회</Text>
      </View>
      <View style={styles.aboutdiv}>
        <View style={styles.upper}>
          <View style={styles.titlediv}>
            <Image source={Symbol} style={styles.img} />
            <Text style={styles.boldTitle}>신한 주거래 우대통장(저축예금)</Text>
          </View>
          <Text style={styles.grayText}>신한 110-987-654321</Text>
        </View>
        <Text style={styles.boldtext}>{remainMoney}원</Text>
        <MyButton
          title='이체'
          backgroundColor='#2B70CC'
          color='white'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.searchdiv}>
        <SearchInput />
      </View>
      <View>
        {/* <Text style={styles.date}>2023.09.16</Text> */}
        {/* <View style={styles.detaildiv}>
          <DepositEach
            time='02:58:45'
            description='이자'
            name='06.17~09.15'
            kind='입금'
            amount='193'
          />
        </View> */}
        {/* <Text style={styles.date}>2023.09.15</Text> */}
        <View style={styles.detaildiv}>
          {accountHistory.map((item) => {
            return (
              <DepositEach
                time={dayFormat(item.date*1000)}
                description={item.note}
                name={item.depositorName}
                kind={item.modifiedAmount>0?"입금":"출금"}
                amount={Math.abs(item.modifiedAmount)}
              />
            );
          }).reverse()}
          <DepositEach
            time='15:03:22'
            description='타행IB'
            name='삼성SSAFY'
            kind='입금'
            amount='1,000,000'
          />
          <DepositEach
            time='11:19:51'
            description='축의금'
            name='김신한'
            kind='출금'
            amount='150,000'
          />
          <DepositEach
            time='11:19:51'
            description='생일'
            name='이싸피'
            kind='출금'
            amount='53,000'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  boldTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  grayText: {
    fontWeight: '500',
    fontSize: 15,
    color: 'gray',
  },
  img: {
    width: 22,
    height: 22,
  },
  upper: {
    gap: 5,
  },
  aboutdiv: {
    backgroundColor: '#c3def9',
    padding: 30,
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 24,
    marginVertical: 20,
  },
  titlediv: {
    flexDirection: 'row',
    gap: 5,
  },
  buttondiv: {
    flexDirection: 'row',
  },
  searchdiv: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  detaildiv: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
