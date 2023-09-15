import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import MyButton from "../../components/common/Button";
import { useNavigation } from '@react-navigation/native';

export default function CheckExpense() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.upper}>
        <Text style={styles.boldtext}>김싸피님께</Text>
        <Text style={styles.boldtext}>얼마를 보내시겠습니까?</Text>
        <TextInput
          style={styles.input}
          placeholder="보낼금액(원)"
          keyboardType="text"
        />
        <Text style={styles.bottomtext}>잔액: 3,474,909원</Text>
      </View>
      <View style={styles.lower}>
      <TouchableOpacity style={styles.buttondiv}>
        <MyButton
          title="송금하기"
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
  boldtext: {
    fontWeight: "600",
    fontSize: 22,
  },
  input: {
    fontSize: 24,
    paddingTop: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#E2EEFF',
    paddingBottom: 10,
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  lower: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomtext: {
    marginTop: 10,
    color: '#3A3A3A'
  }
});
