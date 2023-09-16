import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyChart from '../../components/giftManage/pieChart';
import HeaderBar from '../../components/common/HeaderBar';
import { Shadow } from 'react-native-shadow-2';

export default function GiftReceived({ navigation }) {
  const handlePressArrow = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={'받은 내역'}
        showLogout={false}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
      />
      <View style={styles.chart}>
        <Shadow distance={10} style={styles.shadow}>
          <MyChart ratio={0.7} title='2023년 8월 받은 내역' />
        </Shadow>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  shadow: {
    borderRadius: 10,
  },
});
