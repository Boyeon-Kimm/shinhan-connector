import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, font, screenWidth } from '../../config/globalStyles';

export default function FriendGiftCard({onPressHorizon}) {
  return (
    <View>
      <View style={styles.timeCon}>
        <Text>2023-08-17 13:00</Text>
        <Feather
          name='more-horizontal'
          size={24}
          color='black'
          onPress={onPressHorizon}
        />
      </View>
      <Text>[보낸 내역] 김신한 결혼식 축의금</Text>
    <Text>200,000원</Text>
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
  timeCon: {
    // width: '100%',
    
    flexDirection: 'row',
    justifyContent:'space-between'
    // flexWrap: 'nowrap',
  },
});
