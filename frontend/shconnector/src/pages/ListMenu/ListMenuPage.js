import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import HeaderBar from '../../components/common/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAccountNo,
  updateMemberNo,
  updateId,
  updateName,
  updateAge,
  updateGender,
  updateContact,
  updateAccessToken,
  updateRefreshToken,
} from '../../reducers/LoginSlice';

export default function ListMenuPage({
  navigation,
}) {
  const dispatch = useDispatch();
  const name = useSelector(
    (state) => state.login.name
  );

  const onPressLogout = () => {
    dispatch(updateAccountNo(null));
    dispatch(updateMemberNo(null));
    dispatch(updateId(null));
    dispatch(updateName(null));
    dispatch(updateAge(null));
    dispatch(updateGender(null));
    dispatch(updateContact(null));
    dispatch(updateAccessToken(null));
    dispatch(updateRefreshToken(null));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        showBackArrow={false}
        onPressArrow={null}
        title={name ? name + '님' : '로그인이 필요합니다'}
        showLogout={name ? true : false}
        onPressLogout={onPressLogout}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
        navigation={navigation}
      />
      {/* <View>
        <View style={styles.titleDiv}>
          <Text style={styles.title}>김싸피님</Text>
          <View style={styles.titleRight}>
            <Text>로그아웃</Text>
            <Fontisto name='bell' size={24} color='black' />
          </View>
        </View>
        <View style={styles.inputDiv}>
          <TextInput
            style={styles.input}
            placeholder='검색어를 입력해주세요..'
            keyboardType='text'
          />
        </View>
      </View> */}
      <ScrollView>
        <View style={styles.menu}>
          <Text>지인 관리</Text>
          <TouchableOpacity onPress={() => navigation.navigate('FriendPage')}>
            <Text style={styles.boldText}>지인 목록</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FriendCreate')}>
            <Text style={styles.boldText}>지인 등록</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Text>일정 관리</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CalendarPage')}>
            <Text style={styles.boldText}>일정 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CalendarCreate')}
          >
            <Text style={styles.boldText}>
              일정 추가
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Text>선물 · 경조사비 관리</Text>
          <TouchableOpacity onPress={() => navigation.navigate('GiftAll')}>
            <Text style={styles.boldText}>전체 내역</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GiftGive')}>
            <Text style={styles.boldText}>보낸 내역</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GiftReceived')}>
            <Text style={styles.boldText}>받은 내역</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Text>계좌 관리</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AccountList')}>
            <Text style={styles.boldText}>전체 계좌 조회</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Text>상품 / 서비스</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Savings')}>
            <Text style={styles.boldText}>나에게 맞는 적금편지 상품 찾기</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
            <Text style={styles.boldText}>나에게 맞는 선물 · 금액 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LikeSavings')}>
            <Text style={styles.boldText}>찜한 적금상품 내역</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Mature')}>
            <Text style={styles.boldText}>만기 적금 축하~~test!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  titleDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E8E8E8',
    backgroundColor: '#E8E8E8',
    height: 50,
    width: '100%',
    padding: 10,
    paddingLeft: 15,
  },
  titleRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  inputDiv: {
    alignItems: 'center',
  },
  menu: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    gap: 10,
    paddingVertical: 20,
  },
  boldText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
