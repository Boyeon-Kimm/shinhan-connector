import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Fontisto } from "@expo/vector-icons";

export default function Transfer(){
  return(
    <View style={styles.container}>
      <View style={styles.textCon}>
        <Text style={styles.blackText}>김싸피 님께</Text>
        <Text style={styles.grayText}>신한 110987654321</Text>
        <Text style={styles.boldText}>얼마를 보낼까요?</Text>
      </View>
        <TextInput 
          style={styles.input}
          placeholder="금액을 입력하세요"
          keyboardType="number-pad"
        />
      <View style={styles.blueDiv}>
        <View style={styles.accountDiv}>
          <Text style={styles.account}>신한 110-123-456789</Text>
          <Text style={styles.price}>3,528,924원</Text>
        </View>
        <Fontisto name="angle-right" size={13} color="gray" />
      </View>
      <View style={styles.plusDiv}>
        <TouchableOpacity><Text style={styles.plus}>+1만</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.plus}>+5만</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.plus}>+10만</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.plus}>+100만</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.plus}>전액</Text></TouchableOpacity>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 45,
  },
  textCon: {
    paddingVertical: 30,
    gap: 4,
  },
  grayText: {
    color: 'gray',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 22,
    marginTop: 12,
  },
  blackText: {
    fontSize: 17,
  },
  input: {
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: 60,
  },
  blueDiv: {
    backgroundColor: '#F1F6FD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40,
  },
  accountDiv: {
    flexDirection: 'row',
    gap: 10,
  },
  price: {
    fontWeight: '600',
  },
  plus: {
    backgroundColor: '#E2EEFF',
    color: "#2B70CC",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: '600',
    borderRadius: 10,
    fontSize: 12,
  },
  plusDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  }
})