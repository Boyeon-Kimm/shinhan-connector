import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Symbol from "../../../assets/symbol.png";
import MyButton from "../../components/common/Button";
import SearchInput from "../../components/input/SearchInput";
import DepositEach from "../../components/List/DepositEach";

export default function AccountDetail({ title, bank, accountNo }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>거래내역 조회</Text>
      </View>
      <View style={styles.aboutdiv}>
        <View style={styles.upper}>
          <View style={styles.titlediv}>
            <Image source={Symbol} style={styles.img} />
            <Text style={styles.boldTitle}>신한 주거래 우대통장(저축예금)</Text>
          </View>
          <Text style={styles.grayText}>신한 110-987-654321</Text>
        </View>
        <Text style={styles.boldtext}>3,474,909원</Text>
        <MyButton
          title="이체"
          backgroundColor="#2B70CC"
          color="white"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.searchdiv}>
        <SearchInput />
      </View>
      <View>
        <Text style={styles.date}>2023.09.16</Text>
        <View style={styles.detaildiv}>
          <DepositEach
            time="02:58:45"
            description="이자"
            name="06.17~09.15"
            kind="입금"
            amount="193"
          />
        </View>
        <Text style={styles.date}>2023.09.15</Text>
        <View style={styles.detaildiv}>
          <DepositEach
            time="15:03:22"
            description="타행IB"
            name="삼성SSAFY"
            kind="입금"
            amount="1,000,000"
          />
          <DepositEach
            time="11:19:51"
            description="축의금"
            name="김신한"
            kind="출금"
            amount="150,000"
          />
          <DepositEach
            time="11:19:51"
            description="생일"
            name="이싸피"
            kind="출금"
            amount="53,000"
          />
        </View>
      </View>
    </ScrollView>
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
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  boldTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  grayText: {
    fontWeight: "500",
    fontSize: 15,
    color: "gray",
  },
  img: {
    width: 22,
    height: 22,
  },
  upper: {
    gap: 5,
  },
  aboutdiv: {
    backgroundColor: "#c3def9",
    padding: 30,
  },
  boldtext: {
    fontWeight: "600",
    fontSize: 24,
    marginVertical: 20,
  },
  titlediv: {
    flexDirection: "row",
    gap: 5,
  },
  buttondiv: {
    flexDirection: "row",
  },
  searchdiv: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  detaildiv: {
    borderTopColor: "gray",
    borderTopWidth: 1,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    color: "gray",
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
