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
import { AntDesign } from '@expo/vector-icons';
import {
  font,
  statusBarHeight,
  widthScale,
  heightScale,
  colors,
} from '../../config/globalStyles';

export default function GiftManagePage({ navigation }) {
  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={'선물 관리'}
        showLogout={false}
        showBell={true}
        showThreeDots={false}
        onPressRight={null}
      />
      <View style={styles.chart}>
        <Shadow distance={10} style={styles.shadow}>
          <MyChart ratio={0.7} />
        </Shadow>
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.select}>
          <Text style={styles.selectText}>전체 선물 내역</Text>
          <AntDesign name='right' size={18} color='black' />
        </View>
        <View style={styles.select}>
          <Text style={styles.selectText}>선물 보낸 내역</Text>
          <AntDesign name='right' size={18} color='black' />
        </View>
        <View style={styles.select}>
          <Text style={styles.selectText}>선물 받은 내역</Text>
          <AntDesign name='right' size={18} color='black' />
        </View>
      </View>
      <AntDesign
        name='pluscircle'
        size={widthScale * 40}
        style={styles.plusButton}
      />
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
  selectContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
    width: '80%',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  selectText: {
    fontSize: 15,
    fontWeight: '600',
  },
  plusButton: {
    position: 'absolute',
    bottom: widthScale * 10,
    right: widthScale * 20,
    color: colors.shinhan,
  },
});
