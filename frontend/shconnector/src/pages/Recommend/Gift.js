import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import char6 from "../../../assets/character6.png";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function Gift() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "여성", value: "1" },
    { label: "남성", value: "2" },
  ]);

  const [kindOpen, setKindOpen] = useState(false);
  const [kindValue, setKindValue] = useState(null);
  const [kindItems, setKindItems] = useState([
    { label: "결혼식", value: "1"},
    { label: "장례식", value: "2"},
    { label: "잔치", value: "3"},
    { label: "생일", value: "4"},
    { label: "집들이", value: "5"},
    { label: "기타", value: "6"},
  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>당신을 위한 맞춤 추천</Text>
      </View>
      <View style={styles.blueDiv}>
        <View style={styles.textDiv}>
          <Text style={styles.boldText}>다른 사람들은</Text>
          <Text style={styles.boldText}>얼마를 지출할지 궁금하신가요?</Text>
          <View style={styles.lowerTextDiv}>
            <Text>아래 검색 조건을 입력하여 찾아보세요!</Text>
            <Text>입력한 조건 별로 확인 가능합니다.</Text>
          </View>
        </View>
        <View style={styles.imgDiv}>
          <Image source={char6} resizeMode="contain" style={styles.img} />
        </View>
      </View>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="연봉"
          keyboardType="number"
        />
        <TextInput
          style={styles.input}
          placeholder="연령"
          keyboardType="number"
        />
        <DropDownPicker
          style={styles.input}
          dropDownContainerStyle={{
            width: 80,
            // borderColor: "#F4F5F7",
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="성별"
          modalProps={{
            animationType: "fade",
          }}
        />
        <DropDownPicker
          style={styles.input}
          dropDownContainerStyle={{
            width: 80,
            borderColor: "#F4F5F7",
          }}
          open={kindOpen}
          value={kindValue}
          items={kindItems}
          setOpen={setKindOpen}
          setValue={setKindValue}
          setItems={setKindItems}
          placeholder="경조사"
          modalProps={{
            animationType: "fade",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  blueDiv: {
    backgroundColor: "#E2EEFF",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textDiv: {
    gap: 2,
    justifyContent: "center",
  },
  boldText: {
    fontSize: 18,
    fontWeight: "700",
  },
  lowerTextDiv: {
    marginVertical: 10,
    gap: 2,
  },
  btnDiv: {
    flexDirection: "row",
    gap: 10,
  },
  img: {
    width: 130,
    height: 150,
  },
  input: {
    fontSize: 15,
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#F4F5F7",
    height: 50,
    width: 80,
    padding: 10,
    marginBottom: 10,
  },
  inputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
