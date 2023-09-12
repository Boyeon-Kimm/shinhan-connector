import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, font, screenWidth } from "../../config/globalStyles";

export default function FriendGiftCard({ onPressHorizon }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.timeCon}>
          <Text style={styles.timeText}>2023-08-17 13:00</Text>
          <Feather
            name="more-horizontal"
            size={24}
            color="grey"
            onPress={onPressHorizon}
          />
        </View>
        <Text style={styles.content}>[보낸 내역] 김신한 결혼식 축의금</Text>
        <Text style={styles.timeText}>200,000원</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
  },
  innerContainer: {
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "90%",
    padding: 10,
  },
  timeCon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    color: "grey",
  },
  content: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 5,
  },
});