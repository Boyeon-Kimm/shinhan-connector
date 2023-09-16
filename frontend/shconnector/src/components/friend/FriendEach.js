import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';
import { StatusBar } from 'expo-status-bar';
import two from '../../../assets/two.png';
import Button from '../../components/common/Button';
import { colors } from '../../config/globalStyles';

export default function FriendEach({relationship, name, group}) {
  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imgdiv}>
          <Image source={two} style={styles.img} />
        </View>
        <View style={styles.info}>
          <Text>[{relationship}]</Text>
          <Text style={styles.boldtext}>{name}</Text>
          <Text>{group}</Text>
        </View>
      </View>
      <View style={styles.btnCon}>
        <Button title='송금' backgroundColor={colors.shinhan} color='white' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 25,
  },
  imgdiv: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  img: {
    height: 90,
    width: 90,
  },
  info: {
    gap: 3,
  },
  btnCon: {
    textAlign: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 18,
  }
});
