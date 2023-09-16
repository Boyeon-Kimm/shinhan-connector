import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import char9 from '../../../assets/character9.png';
import Button from '../../components/common/Button';
import API from '../../util/api';

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
  updateMessage,
} from '../../reducers/LoginSlice';
import { colors } from '../../config/globalStyles';

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  const message = useSelector((state) => state.login.message);

  const handlePressLogin = async () => {
    if (!id) {
      dispatch(updateMessage('아이디를 입력해주세요'));
      return;
    }
    if (!password) {
      dispatch(updateMessage('비밀번호를 입력해주세요'));
      return;
    }
    dispatch(updateMessage(null));

    const url = 'api/member/sign-in';
    const body = {
      id,
      password,
    };
    const response = await API.post(url, body).catch((error) => {
      console.error('Axios 에러', error);
      if (error.response.status === 400) {
        dispatch(updateMessage('아이디 혹은 비밀번호를 확인해주세요'));
        console.log('아이디 혹은 비밀번호를 확인해주세요');
      }
    });

    // console.log(response.data.token.accessToken);

    if (response && response.status === 200) {
      dispatch(updateAccountNo(response.data.signInResponse.accountNo));
      dispatch(updateMemberNo(response.data.signInResponse.memberNo));
      dispatch(updateId(response.data.signInResponse.id));
      dispatch(updateName(response.data.signInResponse.name));
      dispatch(updateAge(response.data.signInResponse.age));
      dispatch(updateGender(response.data.signInResponse.gender));
      dispatch(updateContact(response.data.signInResponse.contact));
      dispatch(updateAccessToken(response.data.token.accessToken));
      dispatch(updateRefreshToken(response.data.token.refreshToken));
      //메인 이동
      navigation.navigate('Home');
    } else {
      // 모달로 띄울 것
      console.log('로그인 실패');
    }
  };

  return (
    <TouchableWithoutFeedback onPresss={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.upper}>
          <View style={styles.titleCon}>
            <Image source={char9} resizeMode='contain' style={styles.imgEach} />
            <View style={styles.textCon}>
              <Text style={styles.boldtext}>로그인</Text>
              <Text style={styles.subtext}>
                아이디와 비밀번호를 입력해주세요.
              </Text>
            </View>
          </View>
          <View style={styles.inputCon}>
            <TextInput
              style={styles.input}
              placeholder='아이디'
              keyboardType='default'
              onChangeText={(text) => setId(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='비밀번호'
              keyboardType='default'
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Text>{message}</Text>
          <View style={styles.btnCon}>
            <Button
              title='로그인'
              backgroundColor={colors.shinhan}
              color='white'
              onPress={handlePressLogin}
            />
          </View>
          <View></View>
        </View>
        <View style={styles.lower}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upper: {
    flex: 3,
  },
  lower: {
    flex: 2,
  },
  titleCon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  inputCon: {
    flex: 1,
    alignItems: 'center',
  },
  imgEach: {
    height: '35%',
    width: '35%',
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 24,
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
  },
  textCon: {
    alignItems: 'center',
    gap: 10,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
    paddingLeft: 15,
    marginBottom: 10,
  },
  btnCon: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 325,
  },
});
