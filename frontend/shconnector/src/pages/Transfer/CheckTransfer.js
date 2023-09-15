import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import symbol from "../../../assets/symbol.png";
import MyButton from "../../components/common/Button";

export default function CheckTransfer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.aboutdiv}>
        <Image source={symbol} style={styles.img} />
        <View style={styles.textdiv}>
          <Text style={styles.boldtext}>150,000원</Text>
          <Text style={styles.boldtext}>송금 완료</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.detaildiv}>
          <Text style={styles.title}>받는 분</Text>
          <Text style={styles.content}>김신한</Text>
        </View>
        <View style={styles.detaildiv}>
          <Text style={styles.title}>날짜</Text>
          <Text style={styles.content}>2023년 9월 16일 1시 54분</Text>
        </View>
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.buttondiv}>
        <MyButton
          title="확인"
          backgroundColor="#2B70CC"
          color="white"
          onPress={() => navigation.navigate("CheckTransfer")}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
  },
  img: {
    height: 60,
    width: 60,
  },
  aboutdiv: {
    flex: 4,
    alignItems: "center",
    paddingTop: 70,
    gap: 15,
  },
  textdiv: {
    alignItems: 'center',
    gap: 4,
  },
  boldtext: {
    fontWeight: "600",
    fontSize: 22,
  },
  middle: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
  detaildiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  content: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttondiv: {
    marginTop: 30,
  }
});
