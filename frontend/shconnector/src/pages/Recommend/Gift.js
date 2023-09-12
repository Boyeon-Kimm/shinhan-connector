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
import Button from "../../components/common/Button";

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
    { label: "결혼식", value: "1" },
    { label: "장례식", value: "2" },
    { label: "잔치", value: "3" },
    { label: "생일", value: "4" },
    { label: "집들이", value: "5" },
    { label: "기타", value: "6" },
  ]);

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
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="연령"
          keyboardType="number-pad"
        />
        <View>
          <DropDownPicker
            style={styles.input}
            dropDownContainerStyle={{
              width: 95,
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
        </View>
        <View>
          <DropDownPicker
            style={styles.input}
            dropDownContainerStyle={{
              width: 95,
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
      <View style={styles.btnCon}>
        <Button
          title="해당 조건으로 검색하기"
          backgroundColor="#2B70CC"
          color="white"
        />
      </View>
      <View style={styles.lower}>
        <View style={styles.boxShadow}>
          <Text style={styles.boldText}>연봉 4,000 ~ 5,000만원</Text>
          <Text style={styles.boldText}>20대 여성들은</Text>
          <View style={styles.rowText}>
            <Text style={styles.blueText}>[결혼식]</Text>
            <Text style={styles.boldText}>축의금으로</Text>
          </View>
          <Text style={styles.blueBig}>200,000원</Text>
          <Text style={styles.boldText}>을 지출합니다!</Text>
        </View>
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
    borderRadius: 5,
    backgroundColor: "#F4F5F7",
    height: 50,
    width: 95,
    padding: 10,
  },
  inputDiv: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 5,
    overflow: "scroll",
    paddingVertical: 10,
  },
  lower: {
    alignItems: "center",
  },
  boxShadow: {
    elevation: 10, // 그림자의 강도를 조절할 수 있습니다.
    backgroundColor: "white", // 그림자를 더 확실하게 보이게 하려면 뷰의 배경색을 설정할 수 있습니다.
    borderRadius: 10, // 뷰의 모서리를 둥글게 만들 수 있습니다.
    padding: 20, // 뷰의 내용과 패딩을 설정합니다.
    width: 300,
    height: 260,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  rowText: {
    flexDirection: 'row',
    gap: 5,
  },
  blueText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B70CC',
  },
  blueBig: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2B70CC',
    marginVertical: 5,
  },
});
