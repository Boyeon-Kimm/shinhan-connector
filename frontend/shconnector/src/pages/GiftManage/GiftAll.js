import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import MyChart from '../../components/giftManage/pieChart';
import HeaderBar from '../../components/common/HeaderBar';
import { Shadow } from 'react-native-shadow-2';
import { colors, font } from '../../config/globalStyles';
import GiftEach from '../../components/List/GiftEach';
import HorizonButton from '../../components/common/HorizonButton';

export default function GiftAll({ navigation }) {
  const category = ['전체보기', '선물', '경조사비'];

  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const onPressHorizon = (newCategory) => {
    setCurrentCategory(newCategory);
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={() => navigation.goBack()}
        title={'전체 내역'}
        showLogout={false}
        showBell={true}
        showThreeDots={false}
        onPressRight={null}
      />
      <ScrollView horizontal={true} style={styles.categorydiv}>
        {category.map((item) => (
          <HorizonButton
            key={item}
            onPress={() => {
              onPressHorizon(item);
            }}
            title={item}
            backgroundColor={colors.button}
            color={colors.shinhan}
            borderColor={colors.button}
            selected={currentCategory === item ? true : false}
          />
        ))}
      </ScrollView>
      <ScrollView>
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
          {/* <GiftEach
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
          /> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 15,
  },
  itemlist: {
    alignItems: 'center',
  },
  categorydiv: {
  },
});
