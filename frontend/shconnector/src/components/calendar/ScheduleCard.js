import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Button from "../common/Button";

export default function ScheduleCard({ relation, scheduleName, completed }) {
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
        <Text>[{relation}] {scheduleName}</Text>
      </View>
      <View>
        <Button>송금하기</Button> 
        {/* 송금하기 수정 필요 */}
      </View>
    </View>
  );
}
