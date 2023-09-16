import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Button from '../../components/common/Button';
import { colors } from '../../config/globalStyles';
import API from '../../util/api';
import HeaderBar from '../../components/common/HeaderBar';

export default function SignUp({ navigation }) {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [accountNumber, setAccountNumber] = useState('110222999999');
  const [confirm, setConfirm] = useState('1234');

  const [isCertified, setIsCertified] = useState(false);
  const [isSend1, setIsSend1] = useState(false);
  const [message, setMessage] = useState(null);

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [items, setItems] = useState([
    { label: '여성', value: '여성' },
    { label: '남성', value: '남성' },
  ]);

  const [codeOpen, setCodeOpen] = useState(false);
  const [codeValue, setCodeValue] = useState('088');
  const [bankCode, setBankCode] = useState([
    { label: '경남은행', value: '039' },
    { label: '광주은행', value: '034' },
    { label: '국민은행', value: '004' },
    { label: '기업은행', value: '003' },
    { label: '농협중앙회', value: '011' },
    { label: '지역농협·축협', value: '012' },
    { label: '대구은행', value: '031' },
    { label: '대신저축은행', value: '102' },
    { label: '도이치은행', value: '055' },
    { label: '모건스탠리은행', value: '052' },
    { label: '미쓰비시은행', value: '059' },
    { label: '부산은행', value: '032' },
    { label: '산림조합중앙회', value: '064' },
    { label: '산업은행', value: '002' },
    { label: '상호저축은행', value: '050' },
    { label: '새마을금고', value: '045' },
    { label: '수협', value: '007' },
    { label: '씨티은행', value: '027' },
    { label: '신한은행', value: '088' },
    { label: '신협', value: '048' },
    { label: '아메리카은행', value: '060' },
    { label: '외환은행', value: '005' },
    { label: '우리은행', value: '020' },
    { label: '우체국', value: '071' },
    { label: '웰컴저축은행', value: '105' },
    { label: '전북은행', value: '037' },
    { label: '제이피모던체이스은행', value: '057' },
    { label: '제주은행', value: '035' },
    { label: '카카오뱅크', value: '090' },
    { label: '케이뱅크', value: '089' },
    { label: '하나은행', value: '081' },
    { label: '한국수출입은행', value: '008' },
    { label: '한국은행', value: '001' },
    { label: 'HSBC', value: '054' },
    { label: 'SC제일은행', value: '023' },
  ]);

  const handlePressArrow = () => {
    navigation.goBack();
  };

  const handleChangePhone = (text) => {
    // console.log(text.length);
    if (text.length > 13) {
      text.substr(0, 13);
      return;
    }
    let newText = text.replace(/[^0-9]/g, '');
    if (newText.length < 10)
      newText = newText
        .replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/\-{1,2}$/g, '');
    else
      newText = newText
        .replace(/^(\d{0,3})(\d{0,4})(\d{4})$/g, '$1-$2-$3')
        .replace(/\-{1,2}$/g, '');
    console.log(newText);
    setPhone(newText);
  };

  const handlePressSend1 = async () => {
    const url = 'api/member/1transfer';
    const body = { bankCode: codeValue, accountNumber };
    console.log('바디', body);
    const response = await API.post(url, body).catch((error) => {
      console.log('Axios 에러', error.response);
      if (error.response.status === 400) {
        setMessage(error.response.data.message);
      }
    });
    console.log(response);

    if (response && response.status === 200) {
      setIsSend1(true);
      setMessage(response.data.message);
    } else {
      setMessage('1원 송금에 실패하였습니다');
    }
  };

  const handlePressAuth1 = async () => {
    const url = 'api/member/1transfer/check';
    const body = { bankCode: codeValue, accountNumber, confirm };
    const response = await API.post(url, body).catch((error) => {
      // console.log('Axios 에러', error);
      if (error.response.status === 403) {
        setMessage(error.response.data.message);
      }
    });
    console.log(response);
    if (response && response.status === 200) {
      setIsCertified(true);
      setMessage(response.data.message);
      // 인증되었습니다 띄우기
    } else {
      // 인증에 실패하였습니다  띄우기
    }

    // console.log('finish');
  };

  const handlePressFinish = async () => {
    if (
      !id ||
      !password ||
      !name ||
      !age ||
      !genderValue ||
      !phone ||
      !codeValue ||
      !accountNumber
    ) {
      setMessage('빈 칸을 채워주세요');
      return;
    }
    const urlCheck = 'api/member/check';
    const bodyCheck = { id };
    const response = await API.post(urlCheck, bodyCheck).catch((error) => {
      console.log('Axios 에러', error);
    });

    if (response) {
      if (response.data.result === true) {
        //중복 알림
        setMessage('이미 존재하는 아이디입니다.');
        return;
      } else {
        const urlSignup = 'api/member/sign-up';
        const bodySignup = {
          id,
          password,
          name,
          age,
          gender: genderValue,
          contact: phone,
          bankCode: codeValue,
          accountNumber,
        };
        const response = await API.post(urlSignup, bodySignup).catch(
          (error) => {
            console.error('Axios 에러', error.response);
            // 403이면 계좌 인증 필요
            if (error.response.status === 403) {
              setIsCertified(false);
              setMessage('계좌를 인증해주세요.');
            }
          }
        );
      }
    }

    if (response && response.status === 200) {
      // 토스트?로 회원가입이 완료되었습니다.
      navigation.navigate('Login');
    } else {
      // 모달로 띄우기
    }

    // console.log('finish');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={null}
        showLogout={false}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
      />
      <View style={styles.titleCon}>
        <Text style={styles.title}>회원가입</Text>
        <Text style={styles.grayText}>신한 커넥터에 오신 것을 환영합니다!</Text>
      </View>
      <View>
        <TextInput
          value={id}
          onChangeText={(text) => setId(text)}
          style={styles.input}
          placeholder='아이디'
          keyboardType='default'
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder='비밀번호'
          keyboardType='visible-password'
        />
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder='이름'
          keyboardType='default'
        />
        <TextInput
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
          placeholder='나이'
          keyboardType='number-pad'
        />
        <DropDownPicker
          style={styles.input}
          containerStyle={{ zIndex: 6000 }}
          dropDownContainerStyle={{
            width: 300,
            borderColor: '#DCDCDC',
          }}
          open={genderOpen}
          value={genderValue}
          items={items}
          setOpen={setGenderOpen}
          setValue={setGenderValue}
          setItems={setItems}
          placeholder='— 성별을 선택하세요 —'
          modalProps={{
            animationType: 'fade',
          }}
        />
        <TextInput
          value={phone}
          onChangeText={handleChangePhone}
          style={styles.input}
          placeholder='휴대폰 번호'
          keyboardType='phone-pad'
        />
        <DropDownPicker
          style={styles.input}
          // containerStyle={{ zIndex: 5000 }}
          dropDownContainerStyle={{
            width: 300,
            borderColor: '#DCDCDC',
          }}
          open={codeOpen}
          value={codeValue}
          items={bankCode}
          setOpen={setCodeOpen}
          setValue={setCodeValue}
          setItems={setBankCode}
          placeholder='— 은행을 선택해주세요 —'
          modalProps={{
            animationType: 'fade',
          }}
        />
        <View>
          <TextInput
            value={accountNumber}
            onChangeText={(text) => {
              setIsCertified(false);
              setIsSend1(false);
              setMessage(null);
              setAccountNumber(text);
            }}
            style={styles.input}
            placeholder='계좌번호'
            keyboardType='number-pad'
          />
          {/* <Button
            title='인증'
            backgroundColor={colors.shinhan}
            color='white'
            onPress={handlePressAuth1}
          ></Button> */}
        </View>
        <TextInput
          value={confirm}
          onChangeText={(text) => setConfirm(text)}
          style={styles.input}
          placeholder='송금메세지의 인증번호를 입력해주세요'
          keyboardType='number-pad'
          readOnly={isCertified ? true : false}
        />
        <Text style={styles.tomatoText}>
          {message ? message : '계좌 인증을 완료해주세요.'}
        </Text>
      </View>
      <View style={styles.btnCon}>
        <Button
          title={
            isCertified
              ? '회원 가입하기'
              : isSend1
              ? '인증하기'
              : '1원 송금하기'
          }
          backgroundColor={colors.shinhan}
          color='white'
          onPress={
            isCertified
              ? handlePressFinish
              : isSend1
              ? handlePressAuth1
              : handlePressSend1
          }
        />
      </View>

      {/* <View style={styles.submitButton}>
        <Text style={styles.submitText}>완료</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 15,
    marginHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: '#2B70CC',
    width: 300,
    height: 50,
  },
  btnCon: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 325,
  },
  containerStyle: {
    backgroundColor: 'white',
    borderColor: colors.inputBorder,
    zIndex: 5000,
  },
  submitText: {
    color: 'white',
  },
  grayText: {
    fontSize: 16,
    color: 'gray',
  },
  tomatoText: {
    color: 'tomato',
  },
});
