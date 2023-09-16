import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import symbol from "../../../assets/symbol.png";
import MyButton from "../../components/common/Button";
import { useNavigation } from "@react-navigation/native";

export default function CheckAccount() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.aboutdiv}>
        <Image source={symbol} style={styles.img} />
        <View style={styles.infodiv}>
          <Text style={styles.boldtext}>김신한님의</Text>
          <Text style={styles.bluetext}>신한 110-123-456789</Text>
          <Text style={styles.boldtext}>계좌로 송금하시겠습니까?</Text>
        </View>
        <View style={styles.graybox}>
          <Text>받는 분 통장 표시: </Text>
          <TextInput style={styles.input} value="김싸피" keyboardType="text" />
        </View>
        {/* 이체 계좌 변경 해... 말아..? */}
        <TouchableOpacity onPress={() => navigation.navigate("FriendUpdatePage")}>
          <Text style={styles.grayboldtext}>계좌정보 수정</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttondiv}>
        <MyButton
          title="송금하기"
          backgroundColor="#2B70CC"
          color="white"
          onPress={() => navigation.navigate("CheckExpense")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  aboutdiv: {
    flex: 2,
    alignItems: "center",
    paddingTop: 70,
    gap: 15,
  },
  infodiv: {
    alignItems: "center",
    gap: 5,
  },
  img: {
    height: 60,
    width: 60,
  },
  graybox: {
    backgroundColor: "#ECECEC",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  bluetext: {
    color: "#2b70cc",
    fontWeight: "600",
    fontSize: 22,
  },
  boldtext: {
    fontWeight: "600",
    fontSize: 22,
  },
  grayboldtext: {
    color: "gray",
    fontWeight: "600",
  },
  buttondiv: {
    marginVertical: 20,
    width: "100%",
  },
});
