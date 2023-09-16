import React, { useState, useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Image,TouchableWithoutFeedback } from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';
import HorizonButton from '../../components/common/HorizonButton';
import BottomSheet from '../../components/common/BottomSheet';
import { useScrollToTop } from '@react-navigation/native';
import { useCollapsibleHeader } from 'react-navigation-collapsible';
import { Shadow } from 'react-native-shadow-2';

import { colors, font, screenWidth } from '../../config/globalStyles';

import testImg from '../../../assets/character8.png';
import API from '../../util/api';


const category = ['전체보기', '받은 내역', '보낸 내역'];

export default function FriendDetailPage({ route, navigation }) {
  const { friendNo } = route.params;

  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [relation, setRelation] = useState(null);
  const [belong, setBelong] = useState(null);
  const [bankCode, setBankCode] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(category[0]);
  const handleModify = () => {
    console.log(friendNo + '수정');
  };
  const handleDelete = () => {
    console.log(friendNo + '삭제');
  };

  const FriendDetailModalData = [
    { title: '수정', func: handleModify },
    { title: '삭제', func: handleDelete },
  ];

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
    { id: 16, name: '아이템15' },
    { id: 17, name: '아이템15' },
    { id: 18, name: '아이템15' },
    { id: 19, name: '아이템15' },
    { id: 20, name: '아이템15' },
    { id: 21, name: '아이템15' },
    { id: 22, name: '아이템15' },
    { id: 23, name: '아이템15' },
    { id: 24, name: '아이템15' },
    { id: 25, name: '아이템15' },
    { id: 26, name: '아이템15' },
    { id: 27, name: '아이템15' },
    { id: 28, name: '아이템15' },
    { id: 29, name: '아이템15' },
    { id: 30, name: '아이템15' },
    { id: 31, name: '아이템15' },
    { id: 32, name: '아이템15' },
    { id: 33, name: '아이템15' },
    { id: 34, name: '아이템15' },
  ];

  const onPressHorizon = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  const handlePressArrow = () => {
    navigation.navigate('FriendPage');
  };

  const onPressThreeDots = () => {
    setModalVisible(true);
    console.log('three');
  };

  const ref = useRef(null);
  useScrollToTop(ref);

  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY } =
    useCollapsibleHeader({
      navigationOptions: {
        headerStyle: {
          height: 530,
        },
      },
    });

  const stickyHeaderHeight = 180;

  const bankMapping = {
    '039': '경남은행',
    '034': '광주은행',
    '004': '국민은행',
    '003': '기업은행',
    '011': '농협중앙회',
    '012': '지역농협·축협',
    '031': '대구은행',
    102: '대신저축은행',
    '055': '도이치은행',
    '052': '모건스탠리은행',
    '059': '미쓰비시은행',
    '032': '부산은행',
    '064': '산림조합중앙회',
    '002': '산업은행',
    '050': '상호저축은행',
    '045': '새마을금고',
    '007': '수협',
    '027': '씨티은행',
    '088': '신한은행',
    '048': '신협',
    '060': '아메리카은행',
    '005': '외환은행',
    '020': '우리은행',
    '071': '우체국',
    105: '웰컴저축은행',
    '037': '전북은행',
    '057': '제이피모던체이스은행',
    '035': '제주은행',
    '090': '카카오뱅크',
    '089': '케이뱅크',
    '081': '하나은행',
    '008': '한국수출입은행',
    '001': '한국은행',
    '054': 'HSBC',
    '023': 'SC제일은행',
  };

  const getFriendDetail = async () => {
    const url = `api/friend/${friendNo}`;

    const response = await API.get(url).catch((error) => {
      console.error('Axios 에러', error);
    });

    if (response && response.status === 200) {
      setName(response.data.name);
      setContact(response.data.contact);
      setRelation(response.data.relation);
      setBelong(response.data.belong);
      setBankCode(response.data.bankCode);
      setAccountNumber(response.data.accountNumber);
    } else {
      // 모달로 띄울 것
      console.log('조회 실패');
    }
  };

  const handleChangePhone = (text) => {
    // console.log(text.length);
    if (text.length > 13) {
      text.substr(0, 13);
      return;
    }
    let newText = text.replace(/[^0-9]/g, "");
    if (newText.length < 10)
      newText = newText
        .replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/\-{1,2}$/g, "");
    else
      newText = newText
        .replace(/^(\d{0,3})(\d{0,4})(\d{4})$/g, "$1-$2-$3")
        .replace(/\-{1,2}$/g, "");
    console.log(newText);
    setContact(newText);
  };

  useEffect(() => {
    getFriendDetail();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY }],
          position: 'absolute',
          backgroundColor: 'white',
          height: stickyHeaderHeight,
          width: '100%',
          zIndex: 9999,
        }}
      >
        <Shadow style={{ width: '100%' }}>
          <HeaderBar
            showBackArrow={true}
            onPressArrow={handlePressArrow}
            title={null}
            showLogout={false}
            showBell={false}
            showThreeDots={true}
            onPressRight={onPressThreeDots}
          />
          <View style={styles.headerContent}>
            <Image source={testImg} style={styles.img}></Image>
            <Text
              style={{
                fontSize: 17,
                color: 'grey',
                fontWeight: '600',
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              [직장]
            </Text>
            <Text style={{ fontSize: 25, fontWeight: '900' }}>{name}</Text>
            <View style={styles.userInfo}>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>전화번호</Text>
                <Text>{contact}</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>소속</Text>
                <Text>{belong}</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>계좌번호</Text>
                <Text>[{bankMapping[bankCode]}] {accountNumber}</Text>
              </View>
            </View>
            <View style={styles.horizonCon} horizontal={true}>
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
            </View>
          </View>
        </Shadow>
      </Animated.View>
      {/* //////////////////////////// */}

      <Animated.FlatList
        style={{
          position: 'relative',
          width: '100%',
        }}
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop + stickyHeaderHeight,
        }}
        scrollIndicatorInsets={{
          top: scrollIndicatorInsetTop + stickyHeaderHeight,
        }}
        ref={ref}
        data={data}
        // renderItem={(item) => <FriendGiftCard onPressHorizon={null} />}
        keyExtractor={(item) => item.id}
      />

      <BottomSheet
        visible={modalVisible}
        setVisible={setModalVisible}
        sheetData={FriendDetailModalData}
      />
    </View>
  );
}

const imgSize = screenWidth / 3;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    zIndex: 999,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  img: {
    width: imgSize,
    height: imgSize,
    borderRadius: font(imgSize) / 2,
    borderColor: colors.shinhan,
    borderWidth: font(3),
  },
  horizonCon: {
    flexDirection: 'row',
  },
  userInfo: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  infoCard: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    gap: 5,
  },
  infoText: {
    color: 'grey',
  },
});
