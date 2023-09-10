import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import char9 from '../../../assets/character9.png';
import Button from "../../components/common/Button";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.titleCon}>
          <Image source={char9} resizeMode="contain"  style={styles.imgEach} />
          <View style={styles.textCon}>
          <Text style={styles.boldtext}>로그인</Text>
          <Text style={styles.subtext}>아이디와 비밀번호를 입력해주세요.</Text>
          </View>
        </View>
        <View style={styles.inputCon}>
          <TextInput
            style={styles.input}
            placeholder="아이디"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            keyboardType="password"
          />
        </View>
        <View style={styles.btnCon}>
          <Button title="로그인" backgroundColor="#2B70CC" color="white" />
        </View>
        <View></View>
      </View>
      <View style={styles.lower}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderColor: "#DCDCDC",
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
  }
})