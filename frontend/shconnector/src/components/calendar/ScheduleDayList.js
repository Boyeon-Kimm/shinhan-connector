import { View, Text } from "react-native";
import ScheduleCard from "./ScheduleCard";
import HorizonButton from "../common/HorizonButton";
import { colors } from "../../config/globalStyles";

export default function ScheduleDayList({date}){
    const scheduleList=[];

    const onPressAll=()=>{}
    const onPressSend=()=>{}
    const onPressReceive=()=>{}


    return (
        <View>
        <View>
            <HorizonButton onPress={onPressAll} title="전체 선택" backgroundColor={} color={} borderColor={} selected={true}/>
            <HorizonButton onPress={onPressSend} title="보낸 선물" backgroundColor={} color={} borderColor={}selected={true}/>
            <HorizonButton onPress={onPressReceive} title="받은 선물" backgroundColor={} color={} borderColor={}selected={true}/>
        </View>
        <View>{
            scheduleList.map((schedule,i)=>(<ScheduleCard></ScheduleCard>))
   
            }
            
        </View>
        </View>
    );
}
