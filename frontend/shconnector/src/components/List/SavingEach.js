import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function SavingEach() {

  // 하트 아이콘 칠하기
  const [isHeartIconFilled, setHeartIconFilled] = useState(false);

  const toggleHeartIcon = () => {
    setHeartIconFilled(!isHeartIconFilled);
  };

  return(
    <View style={styles.card}>
      <View style={styles.titleDiv}>
        <Text style={styles.titleBold}>한 달부터 적금</Text>
        <TouchableOpacity onPress={toggleHeartIcon}>
          {isHeartIconFilled ? (
            <AntDesign name="heart" size={20} color="red" />
          ) : (
            <AntDesign name="hearto" size={20} color="#C5C6D0" />
          )}
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 16,}}>
        상황에 따라 필요한 목돈을 미리 준비해보세요. 일, 주 단위 납입으로
        준비하는 내 계획과 기념일!
      </Text>
      <View style={styles.benefitDiv}>
        <Text style={{fontWeight: '600'}}>(12개월 기준)</Text>
        <View style={styles.percent}>
          <Text style={styles.redText}>연 2.5% ~ </Text>
              <Text style={styles.redBoldText}>4.5%</Text>
            </View>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 30,
    paddingVertical: 25,
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
  },
  titleBold: {
    fontWeight: "800",
    fontSize: 17,
  },
  benefitDiv: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  redText: {
    color: "red",
  },
  redBoldText: {
    color: "red",
    fontWeight: "700",
    fontSize: 22,
  },
  percent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})