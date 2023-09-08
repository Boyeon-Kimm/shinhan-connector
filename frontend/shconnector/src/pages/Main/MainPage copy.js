import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { font } from '../../config/globalStyles';

import MyButton from '../../components/common/Button';
import char1 from '../../../assets/character1.png';
import char2 from '../../../assets/character2.png';
import char3 from '../../../assets/character3.png';
import char7 from '../../../assets/character7.png';
import char8 from '../../../assets/character8.png';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleCon}>
        <Text style={styles.title}>홈</Text>
        <Fontisto
          name="bell"
          size={font(24)}
          color="black"
        />
      </View>
      <View style={styles.loginCon}>
        <View style={styles.loginUpper}>
          <View style={styles.loginLeft}>
            <View style={styles.sub}>
              <Text style={styles.grayText}>안녕하세요.</Text>
              <Text style={styles.grayText}>신한 쏠(SOL) 입니다.</Text>
            </View>
            <Text style={styles.boldText}>다양한 서비스 이용을</Text>
            <Text style={styles.boldText}>위해 로그인 해주세요.</Text>
          </View>
          <View style={styles.loginRight}>
            <Image
              source={char1}
              resizeMode="contain"
              style={styles.loginImg}
            />
          </View>
        </View>
        <MyButton
          title="로그인"
          backgroundColor="#2B70CC"
          color="white"
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.titleCon}>
          <Text style={styles.title}>지인 관리 서비스</Text>
        </View>
        <View style={styles.serviceCon}>
          <View style={styles.serviceLine}>
            <TouchableOpacity
              style={styles.serviceEach}
              onPress={() => navigation.navigate('FriendCreate')}
            >
              <Text style={styles.serviceTitle}>지인 등록</Text>
              <Image
                source={char2}
                resizeMode="contain"
                style={styles.serviceImg}
              />
            </TouchableOpacity>
            <View style={styles.serviceEach}>
              <Text style={styles.serviceTitle}>일정 등록</Text>
              <Image
                source={char8}
                resizeMode="contain"
                style={styles.serviceImg}
              />
            </View>
          </View>
          <View style={styles.serviceLine}>
            <View style={styles.serviceEach}>
              {/* <Text style={styles.serviceTitle}>나에게 맞는</Text> */}
              <Text style={styles.serviceTitle}>적금편지 상품찾기</Text>
              <Image
                source={char2}
                resizeMode="contain"
                style={styles.serviceImg}
              />
            </View>
            <View style={styles.serviceEach}>
              <Text style={styles.serviceTitle}>선물 · 금액 추천</Text>
              <Image
                source={char3}
                resizeMode="contain"
                style={styles.serviceImg}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6FD',
    justifyContent: 'center',
  },
  titleCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: font(45),
    marginHorizontal: font(35),
  },
  title: {
    fontSize: font(24),
    fontWeight: '600',
  },
  loginCon: {
    flex: 1.3,
    marginTop: font(30),
    marginHorizontal: font(30),
    paddingHorizontal: font(20),
    borderRadius: font(15),
    backgroundColor: 'white',
  },
  loginUpper: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: font(12),
  },
  loginImg: {
    width: '80%',
    height: '80%',
  },
  loginLeft: {
    flex: 1.5,
    justifyContent: 'center',
  },
  loginRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2.5,
  },
  grayText: {
    fontSize: font(16),
    color: 'gray',
  },
  boldText: {
    fontSize: font(18),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  sub: {
    marginBottom: font(12),
  },
  serviceCon: {
    flex: 1,
    marginHorizontal: font(20),
    paddingTop: font(20),
  },
  serviceEach: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: font(15),
    justifyContent: 'center',
    marginHorizontal: font(10),
    marginBottom: font(23),
    paddingHorizontal: font(15),
  },
  serviceTitle: {
    fontSize: font(18),
    fontWeight: '600',
  },
  serviceImg: {
    width: '60%',
    height: '60%',
    marginLeft: font(50),
  },
  serviceLine: {
    flex: 1,
    flexDirection: 'row',
  },
  serviceTitle: {
    fontSize: font(16),
    fontWeight: '600',
    paddingLeft: font(5),
    paddingVertical: font(10),
  },
});
