import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';
import HorizonButton from '../../components/common/HorizonButton';
import FriendListCard from '../../components/FriendListCard';
import { colors, font, widthScale } from '../../config/globalStyles';
import FriendDetailPage from './FriendDetailPage';
import API from '../../util/api';
import store from '../../../store';
import FriendEach from '../../components/friend/FriendEach';

const category = ['전체보기', '가족', '친구', '직장', '거래처', '기타'];

export default function FriendPage({ navigation }) {
  const [searchCondition, setSearchCondition] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const [allFriendList, setAllFriendList] = useState([]); // 이거 전체 리스트 (페이지 로딩 시 불러옴)

  const handlePressArrow = () => {
    navigation.navigate('Home', { screen: 'Main' });
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
      <ScrollView horizontal={true}>
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
      <ScrollView>
        <View style={styles.list}>
          {allFriendList
            .filter(
              (friend, i) =>
                friend.relation ===
                (currentCategory === category[0]
                  ? friend.relation
                  : currentCategory)
            )
            .map((friend, i) => (
              <FriendEach
                key={friend.friendNo}
                friendNo={friend.friendNo}
                relationship={friend.relation}
                name={friend.name}
                group={friend.belong}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  horizonCon: {
    // width: '100%',
    // flexDirection: 'row',
    // flexWrap: 'nowrap',
    paddingVertical: 10,
    width: 350,
    heigth: 300,
    marginBottom: 10,
    // alignItems: 'center',
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
  list: {
    paddingHorizontal: 30,
    marginTop: 10,
    justifyContent: 'flex-start',
    height: 680,
  },
});
