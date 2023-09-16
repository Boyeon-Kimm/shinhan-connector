import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import HeaderBar from "../../components/common/HeaderBar";
import char7 from "../../../assets/character7.png";

export default function Mature() {
  return (
    <View style={styles.container}>
      <View style={styles.imgdiv}>
        <Image source={char7} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  imgdiv: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: 100,
    height: 100,
  },
});
