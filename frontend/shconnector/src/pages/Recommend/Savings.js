import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import char5 from '../../../assets/character5.png';

import SearchInput from '../../components/input/SearchInput';
import SavingEach from '../../components/List/SavingEach';

import HeaderBar from '../../components/common/HeaderBar';


export default function Savings({ navigation }) {
  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={null}
        showLogout={false}
        showBell={true}
        showThreeDots={false}
        onPressRight={null}
      />
      <View>
        <Text style={styles.title}>당신을 위한 맞춤 추천</Text>
      </View>
      <View style={styles.blueDiv}>
        <View style={styles.textDiv}>
          <Text style={styles.boldText}>고객님에게 딱 맞는</Text>
          <Text style={styles.boldText}>적금편지 상품을 찾아드릴까요?</Text>
          <View style={styles.lowerTextDiv}>
            <Text>아래 카테고리를 눌러 찾아보세요!</Text>
            <Text>상품을 누르시면 상세하게 확인 가능합니다.</Text>
          </View>
          <View style={styles.btnDiv}>
            <TouchableOpacity>
              <Text style={styles.clickedBtn}>최고금리 순</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.borderBtn}>저축한도 순</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imgDiv}>
          <Image source={char5} resizeMode='contain' style={styles.img} />
        </View>
      </View>
      <View style={styles.searchDiv}>
        <SearchInput />
      </View>
      <View style={styles.subtitleDiv}>
        <Text style={{ fontSize: 16 }}>적금</Text>
        <Text style={styles.boldBlueText}>17</Text>
      </View>
      <ScrollView style={styles.list}>
        <SavingEach />
        <SavingEach />
        <SavingEach />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  blueDiv: {
    backgroundColor: '#E2EEFF',
    flexDirection: 'row',
    padding: 30,
  },
  btnDiv: {
    flexDirection: 'row',
    gap: 10,
  },
  img: {
    width: 130,
    height: 160,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700',
  },
  textDiv: {
    gap: 2,
  },
  lowerTextDiv: {
    marginVertical: 10,
    gap: 2,
  },
  clickedBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#2B70CC',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#2B70CC',
    color: 'white',
    fontWeight: '600',
  },
  borderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2B70CC',
    borderRadius: 20,
    color: '#2B70CC',
    fontWeight: '600',
  },
  searchDiv: {
    paddingTop: 15,
    paddingHorizontal: 30,
  },
  subtitleDiv: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    gap: 5,
  },
  boldBlueText: {
    fontSize: 16,
    color: '#2B70CC',
    fontWeight: '800',
  },
  list: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
