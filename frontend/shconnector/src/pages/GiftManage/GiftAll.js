import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MyChart from '../../components/giftManage/pieChart';
import HeaderBar from '../../components/common/HeaderBar';
import { Shadow } from 'react-native-shadow-2';
import { colors, font } from '../../config/globalStyles';
import { makeTimestamp } from '../../util/globalFunc';
import API from '../../util/api';
import store from '../../../store';
import GiftEach from '../../components/List/GiftEach';
import HorizonButton from '../../components/common/HorizonButton';

export default function GiftAll({ navigation }) {
  const category = ['전체보기', '선물', '경조사비'];

  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const [giftAndTributeList, setGiftAndTributeList] = useState([]); // 전체 선물 리스트
  const [giftList, setGiftList] = useState([]);
  const [tributeList, setTributeList] = useState([]);

  const onPressHorizon = (newCategory) => {
    setCurrentCategory(newCategory);
  };
  
  const handlePressArrow = () => {
    navigation.goBack();
  };

  const getGiftList = async (GiftURL, AccessToken) => {
    await API.get(GiftURL, {
      headers: {
        Authorization: 'Bearer ' + AccessToken,
      },
    }).then((response) => {
      setGiftList(response.data);
    }).then((response) => {
      console.log(giftList)
    });
  };

  const getTributeList = async (TributeURL, AccessToken) => {
    await API.get(TributeURL, {
      headers: {
        Authorization: 'Bearer ' + AccessToken,
      },
    }).then((response) => {
      setTributeList(response.data);
    });
  }

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth =
      makeTimestamp(currentDate.getFullYear(), currentDate.getMonth() + 1) / 1000;
    const nextMonth = makeTimestamp(currentDate.getFullYear(), currentDate.getMonth() + 2) / 1000;

    const GiftURL = `/api/gift/list?option=give&amount=false`;
    // const GiftURL = `/api/gift/list?option=give&amount=false&start=${currentMonth}&end=${nextMonth}`;
    const TributeURL = `/api/tribute/list?option=give&amount=false&start=${currentMonth}&end=${nextMonth}`;
    const AccessToken = store.getState().login.accessToken;

    getGiftList(GiftURL, AccessToken);
    getTributeList(TributeURL, AccessToken);
  }, []);
  
  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={"전체 내역"}
        showLogout={false}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
      />
      {/* <ScrollView horizontal={true} style={styles.categorydiv}>
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
      </ScrollView> */}
      <ScrollView>
        <View style={styles.itemlist}>
          {giftList
            .filter((gift, i) => (
              gift.category === (currentCategory === category[0] ? gift.category : currentCategory)
            )).map((gift, i) => (
              <GiftEach
                key={gift.giftNo}
                date={gift.date}
                category={gift.category}
                title={gift.name}
                price={gift.price.toLocaleString('ko-KR') + '원'}
              />
            ))}

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
