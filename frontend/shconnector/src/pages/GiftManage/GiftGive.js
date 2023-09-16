import { View, StyleSheet, ScrollView } from 'react-native';
import MyChart from '../../components/giftManage/pieChart';
import HeaderBar from '../../components/common/HeaderBar';
import { Shadow } from 'react-native-shadow-2';
import GiftEach from '../../components/List/GiftEach';

export default function GiftGive({ navigation }) {
  const handlePressArrow = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderBar
          showBackArrow={true}
          onPressArrow={handlePressArrow}
          title={'보낸 내역'}
          showLogout={false}
          showBell={false}
          showThreeDots={false}
          onPressRight={null}
        />
        <View style={styles.chart}>
          <Shadow distance={10} style={styles.shadow}>
            <MyChart ratio={0.7} title='2023년 8월 보낸 내역' />
          </Shadow>
        </View>
        <View style={styles.itemlist}>
          <GiftEach
            date='2023.09.15'
            category='기프티콘'
            title='BBQ황금올리브'
            price='23,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
          <GiftEach
            date='2023.09.14'
            category='축의금'
            title='김신한 결혼식'
            price='100,000원'
          />
        </View>
      </View>
    </ScrollView>
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
  itemlist: {
    alignItems: 'center',
  },
});
