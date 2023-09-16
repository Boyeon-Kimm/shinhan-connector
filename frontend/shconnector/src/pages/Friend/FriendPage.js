import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';
import HorizonButton from '../../components/common/HorizonButton';
import FriendListCard from '../../components/FriendListCard';
import { colors, font, widthScale } from '../../config/globalStyles';
import FriendDetailPage from './FriendDetailPage';

const category = ['전체보기', '가족', '친구', '직장', '거래처', '기타'];

export default function FriendPage({navigation}) {
  const [searchCondition, setSearchCondition] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(category[0]);
  
  const handlePressArrow = () => {
    navigation.goBack();
  };

  const handleTextChange = (newText) => {
    setSearchCondition(newText);
  };

  const onPressCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    // <FriendDetailPage friendNo={1}></FriendDetailPage>
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title='지인 목록'
        showLogout={false}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
      />
      <ScrollView style={styles.horizonCon} horizontal={true}>
        {category.map((item) => (
          <HorizonButton
            key={item}
            onPress={() => {
              onPressCategory(item);
            }}
            title={item}
            backgroundColor={colors.button}
            color={colors.shinhan}
            borderColor={colors.button}
            selected={currentCategory === item ? true : false}
          />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleTextChange}
          placeholder='검색어를 입력해주세요'
          keyboardType='default'
        />
      </View>
      <FriendListCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  horizonCon: {
    // width: '100%',
    // flexDirection: 'row',
    // flexWrap: 'nowrap',
  },
  input: {
    fontSize: font(15),
    borderWidth: 1,
    borderRadius: 5,
    // borderColor: '#DCDCDC',
    height: 50,
    width: widthScale * 300,
    padding: 10,
    marginBottom: 10,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBackground,
  },
});
