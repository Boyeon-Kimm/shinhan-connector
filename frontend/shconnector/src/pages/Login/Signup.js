import { StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function SignUp(){
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "여성", value: "1" },
    { label: "남성", value: "2" },
  ]);

  const [codeOpen, setCodeOpen] = useState(false);
  const [codeValue, setCodeValue] = useState(null);
  const [bankcode, setBankcode] = useState([
    { label: "경남은행", value: "039"},
    { label: "광주은행", value: "034"},
    { label: "국민은행", value: "004"},
    { label: "기업은행", value: "003"},
    { label: "농협중앙회", value: "011"},
    { label: "지역농협·축협", value: "012"},
    { label: "대구은행", value: "031"},
    { label: "대신저축은행", value: "102"},
    { label: "도이치은행", value: "055"},
    { label: "모건스탠리은행", value: "052"},
    { label: "미쓰비시은행", value: "059"},
    { label: "부산은행", value: "032"},
    { label: "산림조합중앙회", value: "064"},
    { label: "산업은행", value: "002"},
    { label: "상호저축은행", value: "050"},
    { label: "새마을금고", value: "045"},
    { label: "수협", value: "007"},
    { label: "씨티은행", value: "027"},
    { label: "신한은행", value: "088"},
    { label: "신협", value: "048"},
    { label: "아메리카은행", value: "060"},
    { label: "외환은행", value: "005"},
    { label: "우리은행", value: "020"},
    { label: "우체국", value: "071"},
    { label: "웰컴저축은행", value: "105"},
    { label: "전북은행", value: "037"},
    { label: "제이피모던체이스은행", value: "057"},
    { label: "제주은행", value: "035"},
    { label: "카카오뱅크", value: "090"},
    { label: "케이뱅크", value: "089"},
    { label: "하나은행", value: "081"},
    { label: "한국수출입은행", value: "008"},
    { label: "한국은행", value: "001"},
    { label: "HSBC", value: "054"},
    { label: "SC제일은행", value: "023"},
  ])

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleCon}>
        <Text style={styles.title}>회원가입</Text>
        <Text style={styles.grayText}>신한 커넥터에 오신 것을 환영합니다!</Text>
      </View>
      <View>
        <TextInput 
          style={styles.input}
          placeholder="아이디"
          keyboardType="text"
        />
        <TextInput 
          style={styles.input}
          placeholder="비밀번호"
          keyboardType="visible-password"
        />
        <TextInput 
          style={styles.input}
          placeholder="이름"
          keyboardType="text"
        />
        <TextInput 
          style={styles.input}
          placeholder="나이"
          keyboardType="number-pad"
        />
        <DropDownPicker
          style={styles.input}
          dropDownContainerStyle={{
            width: 300,
            borderColor: "#DCDCDC",
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="— 성별을 선택하세요 —"
          modalProps={{
            animationType: "fade",
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="전화번호"
          keyboardType="phone-pad"
        />
        <DropDownPicker
          style={styles.input}
          dropDownContainerStyle={{
            width: 300,
            borderColor: "#DCDCDC",
          }}
          open={codeOpen}
          value={codeValue}
          items={bankcode}
          setOpen={setCodeOpen}
          setValue={setCodeValue}
          setItems={setBankcode}
          placeholder="— 은행을 선택해주세요 —"
          modalProps={{
            animationType: "fade",
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="계좌번호"
          keyboardType="number-pad"
        />
        <Text style={styles.tomatoText}>계좌 인증을 완료해주세요.</Text>
      </View>
      <View style={styles.submitButton}>
        <Text style={styles.submitText}>완료</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  titleCon: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    marginBottom: 15,
    marginHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    height: 50,
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "#2B70CC",
    width: 300,
    height: 50,
  },
  submitText: {
    color: "white",
  },
  grayText: {
    fontSize: 16,
    color: "gray",
  },
  tomatoText: {
    color: "tomato",
  }
})