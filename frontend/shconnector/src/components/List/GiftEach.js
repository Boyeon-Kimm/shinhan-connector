import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function GiftEach({date, category, title, price}) {
  return (
    <View style={styles.gifteach}>
      <View style={styles.left}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.category}>
          <Text style={styles.categorytext}>{category}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.boldtext}>{title}</Text>
        <Text style={styles.graytext}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gifteach: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  date: {
    fontSize: 18,
  },
  category: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#E2EEFF',
  },
  categorytext: {
    textAlign: 'center',
    color: '#2B70CC',
    fontWeight: '600',
  },
  left: {
    gap: 8,
  },
  right: {
    alignItems: 'flex-end',
    gap: 8,
  },
  boldtext: {
    fontWeight: '700',
    fontSize: 18,
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
  graytext: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 18,
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
});
