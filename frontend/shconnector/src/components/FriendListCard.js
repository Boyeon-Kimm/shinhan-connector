import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import ButtonShort from './common/ButtonShort';
import testImg from '../../assets/character8.png';
import { colors, font } from '../config/globalStyles';

export default function FriendListCard(imgURL, relation, name, group, ) {
  const handleTransfer = () => {
    // 송금 화면 이동 구현 필요
  };

  return (
    <Pressable style={styles.card}>
      {/* <Image source={{uri:"URL"}}></Image> */}
      <Image source={testImg} style={styles.img}></Image>
      <View>
        <Text>[직장]</Text>
        <Text>이름</Text>
        <Text>소속</Text>
      </View>
      <ButtonShort
        onPress={handleTransfer}
        title='송금하기'
        backgroundColor={colors.shinhan}
        color='white'
      ></ButtonShort>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  img: {
    width:font(70),
    height:font(70),
  },
});
