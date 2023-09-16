import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import Button from "../../components/common/Button";

export default function WriteLetter() {
  // input 갯수
  const [numInputs, setNumInputs] = useState(12);

  // 회차별 input 생성
  const renderTextInputs = () => {
    const textInputs = [];
    for (let i = 1; i <= numInputs; i++) {
      textInputs.push(
        <TextInput
          key={i}
          style={styles.input}
          placeholder={`${i}회차`}
          keyboardType="text"
        />
      );
    }
    return textInputs;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>적금 일기 작성하기</Text>
        <View style={styles.aboutDiv}>
          <Fontisto
            name="volume-down"
            size={20}
            color="orange"
            style={{ marginBottom: 5 }}
          />
          <Text style={styles.blueText}>12회차 납입 상품입니다.</Text>
          <Text style={styles.blueText}>
            회차 당 7글자 이내로 작성해주세요.
          </Text>
        </View>
        <View style={styles.inputDiv}>{renderTextInputs()}</View>
        <TouchableOpacity>
          <View style={styles.btnDiv}>
            <Button title="저장" backgroundColor="#2B70CC" color="white" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
  },
  aboutDiv: {
    backgroundColor: "#E2EEFF",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    color: "#2B70CC",
  },
  blueText: {
    color: "#2B70CC",
    fontWeight: "700",
  },
  inputDiv: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    height: 50,
    width: "100%",
    padding: 10,
    marginBottom: 4,
  },
  btnDiv: {
    paddingHorizontal: 17,
  },
});
