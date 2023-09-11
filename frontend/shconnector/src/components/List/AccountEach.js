import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Symbol from "../../../assets/symbol.png";

export default function AccountEach() {
  return (
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
      <TouchableOpacity>
        <Text style={styles.lower}>이체</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
    flexDirection: "row",
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
  },
});
