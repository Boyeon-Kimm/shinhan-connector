import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/common/Button';
import HeaderBar from '../../components/common/HeaderBar';
import API from '../../util/api';
import char9 from '../../../assets/character9.png';

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

  const handlePressArrow = () => {
    navigation.goBack();
  };

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

    // console.log(response.data);

    if (response && response.status === 200) {
      dispatch(updateAccountNo(response.data.signInResponse.accountNumber));
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderBar
          showBackArrow={true}
          onPressArrow={handlePressArrow}
          title={null}
          showLogout={false}
          showBell={false}
          showThreeDots={false}
          onPressRight={null}
        />
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
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Text style={styles.alertmessage}>{message}</Text>
          <View style={styles.btnCon}>
            <Button
              title='로그인'
              backgroundColor={colors.shinhan}
              color='white'
              onPress={handlePressLogin}
            />
            <TouchableOpacity
              style={styles.signup}
              onPress={() => navigation.navigate('Signup')}
            >
              <Text>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleCon: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  inputCon: {
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
    textAlign: 'center',
  },
  alertmessage: {
    color: 'tomato',
    paddingBottom: 10,
  },
  signup: {
    alignItems: 'center',
    marginTop: 15,
  },
});
