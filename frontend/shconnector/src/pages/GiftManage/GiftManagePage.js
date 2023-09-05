import { Text, View } from 'react-native';
import MyChart from '../../components/giftManage/pieChart';

export default function GiftManagePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>선물관리 페이지입니다.</Text>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text>선물관리 페이지입니다.</Text>
      </View> */}

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'green' }}>
        <MyChart ratio={0.8} />
      </View>
    </View>
  );
}
