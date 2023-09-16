import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import symbol from '../../../assets/symbol.png';
import MyButton from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CheckAccount({ route }) {
  const myName = useSelector((state) => state.login.name);
  const navigation = useNavigation();
  const { friend } = route.params;
  
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

  let newAccount = friend.accountNumber;
  if (newAccount.length === 11) {
    console.log('test');
    newAccount = newAccount
      .replace(/^(\d{0,3})(\d{0,2})(\d{0,6})$/g, '$1-$2-$3')
      .replace(/\-{1,2}$/g, '');
  } else
    newAccount = newAccount
      .replace(/^(\d{0,3})(\d{0,3})(\d{0,6})$/g, '$1-$2-$3')
      .replace(/\-{1,2}$/g, '');

  useEffect(() => {
    console.log(route.params);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.aboutdiv}>
        <Image source={symbol} style={styles.img} />

        <View style={styles.infodiv}>
          {friend ? (
            <View>
              <Text style={styles.boldtext}>{friend.name}님의</Text>
              <Text style={styles.bluetext}>
                {bankMapping[friend.bankCode]} {newAccount}
              </Text>
              <Text style={styles.boldtext}>계좌로 송금하시겠습니까?</Text>
            </View>
          ) : (
            <Text>로딩 중입니다.</Text>
          )}
        </View>
        <View style={styles.graybox}>
          <Text>받는 분 통장 표시: </Text>
          <TextInput style={styles.input} value={myName} keyboardType='text' />
        </View>
        {/* 이체 계좌 변경 해... 말아..? */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('FriendUpdatePage', { friend: friend })
          }
        >
          <Text style={styles.grayboldtext}>계좌정보 수정</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttondiv}>
        <MyButton
          title='송금하기'
          backgroundColor='#2B70CC'
          color='white'
          onPress={() => navigation.navigate('CheckExpense',{friend})}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  aboutdiv: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 70,
    gap: 15,
  },
  infodiv: {
    alignItems: 'center',
    gap: 5,
  },
  img: {
    height: 60,
    width: 60,
  },
  graybox: {
    backgroundColor: '#ECECEC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bluetext: {
    color: '#2b70cc',
    fontWeight: '600',
    fontSize: 22,
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 22,
  },
  grayboldtext: {
    color: 'gray',
    fontWeight: '600',
  },
  buttondiv: {
    marginVertical: 20,
    width: '100%',
  },
});
