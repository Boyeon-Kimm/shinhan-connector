import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import HeaderBar from "../../components/common/HeaderBar";

export default function FriendCreatePage({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "친구", value: "친구" },
    { label: "직장", value: "직장" },
    { label: "가족", value: "가족" },
    { label: "거래처", value: "거래처" },
    { label: "기타", value: "기타" },
  ]);

  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="auto" />
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
            style={styles.input}
            placeholder="이름"
            keyboardType="text"
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
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="— 관계를 선택하세요 —"
            modalProps={{
              animationType: "fade",
            }}
          />
        </View>
        <View>
          <Text style={styles.optionText}>선택 사항</Text>
          <TextInput
            style={styles.input}
            placeholder="소속(선택)"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            placeholder="계좌번호(선택)"
            keyboardType="number-pad"
          />
        </View>
        <View>
          <Text style={styles.optionText}>명함 사진</Text>
          <View style={styles.picture}></View>
        </View>
        <View style={styles.submitButton}>
          <Text style={styles.submitText}>등록</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
  grayText: {
    fontSize: 16,
    color: "gray",
  },
  boldText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  optionText: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 5,
    color: "grey",
  },
  picture: {
    width: 300,
    height: 50,
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
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
});
