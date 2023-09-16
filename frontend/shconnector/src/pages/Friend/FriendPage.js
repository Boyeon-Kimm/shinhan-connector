import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';
import HorizonButton from '../../components/common/HorizonButton';
import FriendListCard from '../../components/FriendListCard';
import { colors, font, widthScale } from '../../config/globalStyles';
import FriendDetailPage from './FriendDetailPage';
import API from '../../util/api';
import store from '../../../store';

const category = ['전체보기', '가족', '친구', '직장', '거래처', '기타'];

export default function FriendPage({ navigation }) {
  const [searchCondition, setSearchCondition] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const [allFriendList, setAllFriendList] = useState([]); // 이거 전체 리스트 (페이지 로딩 시 불러옴)
  const familyList = []; // 이거 가족 리스트
  const friendList = []; // 이거 친구 리스트
  const companyList = []; // 이거 직장 리스트

  const handlePressArrow = () => {
    navigation.goBack();
  };

  const handleTextChange = (newText) => {
    setSearchCondition(newText);
  };

  const onPressCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  const getAllFriends = async () => {
    const URL = 'api/friend/list';
    const AccessToken = store.getState().login.accessToken;

    await API.get(URL, {
      headers: {
        Authorization: 'Bearer' + AccessToken,
      },
    })
      .then((response) => {
        setAllFriendList(response.data);
      })
      .then(() => {
        allFriendList.forEach((item) => {
          if (item.relation === '친구') {
            friendList.push(item);
          } else if (item.relation === '직장동료' || item.relation === '거래처') {
            companyList.push(item);
          } else if (item.relation === '가족') {
            familyList.push(item);
          }
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllFriends();
  }, []);

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
