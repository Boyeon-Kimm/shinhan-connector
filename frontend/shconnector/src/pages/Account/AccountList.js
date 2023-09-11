import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Symbol from '../../../assets/symbol.png';
import AccountEach from "../../components/List/AccountEach";

export default function AccountList() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>계좌 조회</Text>
      </View>
      <View style={styles.btnDiv}>
        <TouchableOpacity>
          <Text style={styles.clickedBtn}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.borderBtn}>입출금</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.borderBtn}>예적금</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountDiv}>
        <View style={styles.subtitleDiv}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>입출금</Text>
          <Text style={styles.boldBlueText}>1</Text>
        </View>
        <Text style={styles.balance}>12,345,678원</Text>
      </View>
      <ScrollView style={styles.list}>
        <AccountEach />
        <AccountEach />
        <AccountEach />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    paddingBottom: 20,
  },
  clickedBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#2B70CC",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#2B70CC",
    color: "white",
    fontWeight: "600",
    width: 100,
    textAlign: "center",
  },
  borderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2B70CC",
    borderRadius: 20,
    color: "#2B70CC",
    fontWeight: "600",
    width: 100,
    textAlign: "center",
  },
  btnDiv: {
    flexDirection: "row",
    gap: 10,
  },
  subtitleDiv: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 5,
  },
  boldBlueText: {
    fontSize: 16,
    color: "#2B70CC",
    fontWeight: "800",
  },
  accountDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  balance: {
    fontSize: 16,
  },

});
