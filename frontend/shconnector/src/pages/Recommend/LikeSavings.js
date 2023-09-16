import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SavingEach from '../../components/List/SavingEach';
import HeaderBar from '../../components/common/HeaderBar';

export default function LikeSavings({
  navigation,
}) {
  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={null}
        showLogout={false}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
      />
      <View>
        <Text style={styles.title}>
          찜한 적금상품 목록
        </Text>
      </View>
      <ScrollView>
        <SavingEach />
        <SavingEach />
        <SavingEach />
        <SavingEach />
        <SavingEach />
        <SavingEach />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
});
