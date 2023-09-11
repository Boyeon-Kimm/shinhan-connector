import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Symbol from '../../../assets/symbol.png';

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
      <View style={styles.list}>
        <View style={styles.card}>
          <View style={styles.upper}>
            <Image source={Symbol} style={styles.img} />
            <View>
              <Text style={styles.boldTitle}>신한 주거래 우대통장(저축예금)</Text>
              <Text style={styles.grayText}>신한 110-987-654321</Text>
            </View>
          </View>
          <View style={styles.middle}>
            <Text style={styles.boldBalanceText}>12,345,678원</Text>
          </View>
          <Text style={styles.lower}>이체</Text>
        </View>
      </View>
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
    // paddingHorizontal: 30,
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
  card: {
    paddingTop: 20,
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    marginBottom: 10,
  },
  upper: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    flexDirection: 'row',
    gap: 5,
  },
  middle: {
    paddingHorizontal: 30,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  lower: {
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
  },
  boldBalanceText: {
    fontWeight: "700",
    fontSize: 21,
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
    width: 25,
    height: 25,
  }
});
