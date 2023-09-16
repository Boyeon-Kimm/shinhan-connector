import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function DepositEach({ time, description, name, kind, amount }) {
  const textColor = kind === "입금" ? "red" : "#2B70CC";

  return (
    <>
      <View style={styles.aboutdetail}>
        <View style={styles.side}>
          <Text style={styles.lighttext}>
            {time} | {description}
          </Text>
          <Text style={styles.darktext}>{name}</Text>
        </View>
        <View style={styles.right}>
          <Text style={{ color: textColor }}>{kind}</Text>
          <Text style={[styles.redtext, {color: textColor}]}>{amount}원</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  aboutdetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  side: {
    gap: 5,
    paddingVertical: 20,
  },
  right: {
    gap: 5,
    paddingVertical: 20,
    alignItems: 'flex-end',
  },
  lighttext: {
    color: "darkgray",
  },
  darktext: {
    fontSize: 18,
    fontWeight: "600",
  },
  redtext: {
    fontSize: 18,
    fontWeight: "600",
  },
});
