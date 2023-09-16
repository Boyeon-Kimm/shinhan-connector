import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import HeaderBar from '../../components/common/HeaderBar';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../config/globalStyles';
import API from '../../util/api';

export default function FriendCreatePage({ navigation }) {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);

  const [relationOpen, setRelationOpen] = useState(false);
  const [relationValue, setRelationValue] = useState(null);
  const [relationItems, setRelationItems] = useState([
    { label: '친구', value: '친구' },
    { label: '직장', value: '직장' },
    { label: '가족', value: '가족' },
    { label: '거래처', value: '거래처' },
    { label: '기타', value: '기타' },
  ]);

  const [belong, setBelong] = useState();

  const [codeOpen, setCodeOpen] = useState(false);
  const [codeValue, setCodeValue] = useState(null);
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

  const [accountNumber, setAccountNumber] = useState(null);
  const [image, setImage] = useState();
  const [message, setMessage] = useState(null);

  const handlePressArrow = () => {
    navigation.goBack();
  };

  const handleChangeContact = (text) => {
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
    setContact(newText);
  };

  const handleChangeAccount = (text) => {
    // 신한은행 계좌번호 형식
    if (codeValue === '088') {
      if (text.length > 14) {
        text.substr(0, 14);
        return;
      }
      let newText = text.replace(/[^0-9]/g, '');
      if (newText.length === 11) {
        console.log('test');
        newText = newText
          .replace(/^(\d{0,3})(\d{0,2})(\d{0,6})$/g, '$1-$2-$3')
          .replace(/\-{1,2}$/g, '');
      } else
        newText = newText
          .replace(/^(\d{0,3})(\d{0,3})(\d{0,6})$/g, '$1-$2-$3')
          .replace(/\-{1,2}$/g, '');
      console.log(newText);

      setAccountNumber(newText);
    }
  };

  const handlePressRegist = async () => {
    if (!name || !contact || !relationValue) {
      setMessage('필수 입력 사항을 채워주세요.');
      return;
    }
    const newAccountNumber = accountNumber
      ? accountNumber.replace(/[^0-9]/g, '')
      : null;
    const url = 'api/friend';
    const body = {
      name,
      contact,
      relation: relationValue,
      belong,
      bankCode: codeValue,
      accountNumber,
    };

    if (image) body.image = image;
    console.log('바디', body);
    const response = await API.post(url, body).catch((error) => {
      console.log('Axios 에러', error.response);
      // if (error.response.status === 400) {
      //   setMessage(error.response.data.message);
      // }
    });
    console.log(response);

    if (response && response.status === 201) {
      console.log('지인 등록 완료');
      // navigation.navigate('FriendPage');
    } else {
      setMessage('지인 등록에 실패하였습니다');
    }
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
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
        <Text style={styles.title}>지인 정보 등록</Text>
        <Text style={styles.grayText}>지인의 계좌번호 입력 시</Text>
        <Text style={styles.grayText}>
          편리한 송금 서비스 이용이 가능합니다!
        </Text>
      </View>
      <View>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='이름'
          keyboardType='default'
        />
        <TextInput
          value={contact}
          onChangeText={handleChangeContact}
          style={styles.input}
          placeholder='휴대폰 번호'
          keyboardType='phone-pad'
        />
        <DropDownPicker
          style={styles.input}
          containerStyle={{ zIndex: 6000 }}
          dropDownContainerStyle={{
            width: 300,
            borderColor: '#DCDCDC',
          }}
          open={relationOpen}
          value={relationValue}
          items={relationItems}
          setOpen={setRelationOpen}
          setValue={setRelationValue}
          setItems={setRelationItems}
          placeholder='— 관계를 선택하세요 (필수) —'
          modalProps={{
            animationType: 'fade',
          }}
        />
      </View>
      <View>
        <Text style={styles.optionText}>선택 사항</Text>
        <TextInput
          value={belong}
          onChangeText={setBelong}
          style={styles.input}
          placeholder='소속(선택)'
          keyboardType='default'
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
          placeholder='— 은행을 선택하세요 (선택) —'
          modalProps={{
            animationType: 'fade',
          }}
        />
        <TextInput
          value={accountNumber}
          onChangeText={handleChangeAccount}
          style={styles.input}
          placeholder='계좌번호(선택)'
          keyboardType='number-pad'
        />
      </View>
      <View>
        <Text style={styles.optionText}>명함 사진</Text>
        <View style={styles.picture}>
          <Feather name='upload' size={24} color='black' />
        </View>
      </View>
      <Text>{message}</Text>
      {/* <View style={styles.submitButton}>
        <Text style={styles.submitText}>등록</Text>
      </View> */}
      <View style={styles.btnCon}>
        <Button
          title={'등록'}
          backgroundColor={colors.shinhan}
          color='white'
          onPress={handlePressRegist}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  btnCon: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 325,
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
  grayText: {
    fontSize: 16,
    color: 'gray',
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  optionText: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 5,
    color: 'grey',
  },
  picture: {
    width: 300,
    height: 50,
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
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
  submitText: {
    color: 'white',
  },
});
