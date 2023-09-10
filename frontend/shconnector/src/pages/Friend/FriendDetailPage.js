import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';
import HorizonButton from '../../components/common/HorizonButton';

import { colors, font, screenWidth } from '../../config/globalStyles';

import testImg from '../../../assets/character8.png';
import FriendGiftCard from '../../components/friend/FriendGiftCard';

const category = ['전체보기', '받은 내역', '보낸 내역'];

export default function FriendDetailPage() {
  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const data = [
    { id: 1, name: '아이템1' },
    { id: 2, name: '아이템2' },
    { id: 3, name: '아이템3' },
    { id: 4, name: '아이템4' },
    { id: 5, name: '아이템5' },
    { id: 6, name: '아이템6' },
    { id: 7, name: '아이템7' },
    { id: 8, name: '아이템8' },
    { id: 9, name: '아이템9' },
    { id: 10, name: '아이템10' },
    { id: 11, name: '아이템11' },
    { id: 12, name: '아이템12' },
    { id: 13, name: '아이템13' },
    { id: 14, name: '아이템14' },
    { id: 15, name: '아이템15' },
  ];

  const onPressHorizon = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        showThreeDots={true}
        onPressRight={null}
      />
      <Image source={testImg} style={styles.img}></Image>
      <Text>[직장]</Text>
      <Text>김보연</Text>
      <View style={styles.infoCard}>
        <Text>전화번호</Text>
        <Text>010-1234-5678</Text>
      </View>
      <View style={styles.infoCard}>
        <Text>소속</Text>
        <Text>신한은행</Text>
      </View>
      <View style={styles.infoCard}>
        <Text>계좌번호</Text>
        <Text>[신한] 110-987-654321</Text>
      </View>
      <ScrollView style={styles.horizonCon} horizontal={true}>
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
      <FlatList
        data={data}
        renderItem={FriendGiftCard}
        keyExtractor={(item) => item.id}
      ></FlatList>
      {/* <FriendGiftCard /> */}
    </View>
  );
}

const imgSize = screenWidth / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  horizonCon: {

  },
  img: {
    width: imgSize,
    height: imgSize,
    borderRadius: font(imgSize) / 2,
    borderColor: colors.shinhan,
    borderWidth: font(3),
  },
  // infoCard: {},
});
