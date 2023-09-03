import { Text, View } from 'react-native';
import MyCalendar from '../../components/calendar/CalendarCustom';

export default function CalendarPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>일정 페이지입니다.</Text>
      <MyCalendar />
    </View>
  );
}
