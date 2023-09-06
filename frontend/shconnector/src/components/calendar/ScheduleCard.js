import { View, Text } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Button from "../common/Button";
import { colors } from "../../config/globalStyles";

export default function ScheduleCard({
  relation,
  scheduleName,
  amount,
  completed,
}) {
  const handleTransfer = () => {
    // 송금 실행 함수 구현 필요
  };

  return (
    <View>
      <View>
        <View>
          <MaterialCommunityIcons
            name="music-note-whole"
            size={24}
            color="black"
          />
          <Text>13:00</Text>
        </View>
        <Feather name="more-horizontal" size={24} color="black" />
      </View>
      <View>
        <Text>
          [{relation}] {scheduleName}
        </Text>
        {completed ? (
          <View>
            <Feather name="check" size={24} color="black" />
            <Text>송금완료</Text>
          </View>
        ) : (
          <View>
            <FontAwesome name="square-o" size={24} color="black" />
            <Text>{amount}원</Text>
          </View>
        )}
      </View>
      <View>
        <Button
          onPress={handleTransfer}
          title="송금하기"
          backgroundColor={colors.shinhan}
          color="white"
        ></Button>
        {/* 송금하기 수정 필요 */}
      </View>
    </View>
  );
}
