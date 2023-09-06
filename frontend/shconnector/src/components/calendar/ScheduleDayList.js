import { View, Text, ScrollView } from 'react-native';
import ScheduleCard from './ScheduleCard';
import HorizonButton from '../common/HorizonButton';
import { colors } from '../../config/globalStyles';

export default function ScheduleDayList({ date }) {
  const scheduleList = [
    { scheduleNo: 5, time: '13:00', relation: '친구', title: '김신한 결혼식 축의금', amount: 100000, isCompleted: true },
    { scheduleNo: 7, time: '18:00', relation: '가족', title: '결혼기념일 선물', amount: 1000000, isCompleted: false },
  ];

  const onPressAll = () => {};
  const onPressSend = () => {};
  const onPressReceive = () => {};

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
        <HorizonButton
          onPress={onPressAll}
          title="전체 선택"
          backgroundColor={colors.button}
          color={colors.shinhan}
          borderColor={colors.button}
          selected={true}
        />
        <HorizonButton
          onPress={onPressSend}
          title="보낸 선물"
          backgroundColor={colors.button}
          color={colors.shinhan}
          borderColor={colors.button}
          selected={false}
        />
        <HorizonButton
          onPress={onPressReceive}
          title="받은 선물"
          backgroundColor={colors.button}
          color={colors.shinhan}
          borderColor={colors.button}
          selected={true}
        />
      </View>
      <View style={{ flexGrow: 1, backgroundColor: 'red' }}>
        <ScrollView>
          {scheduleList.map((schedule, i) => (
            <ScheduleCard
              key={schedule.scheduleNo}
              time={schedule.time}
              relation={schedule.relation}
              scheduleName={schedule.title}
              amount={schedule.amount}
              completed={schedule.isCompleted}
            ></ScheduleCard>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
