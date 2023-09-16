import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Fontisto, AntDesign, Entypo } from '@expo/vector-icons';
import { font, statusBarHeight } from '../../config/globalStyles';

export default function HeaderBar({
  showBackArrow,
  onPressArrow,
  title,
  showLogout,
  onPressLogout,
  showBell,
  showThreeDots,
  onPressRight,
}) {
  const thisIconSize = font(22);

  return (
    <View style={styles.titleCon}>
      <View style={styles.titleLeft}>
        {showBackArrow ? (
          <TouchableWithoutFeedback>
            <AntDesign
              name='left'
              size={thisIconSize}
              color='black'
              onPress={onPressArrow}
            />
          </TouchableWithoutFeedback>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.titleRight}>
        {showLogout ? (
          <TouchableWithoutFeedback onPress={onPressLogout}>
            <Text style={styles.logout}>로그아웃</Text>
          </TouchableWithoutFeedback>
        ) : null}
        {/* {showBell ? (
          <TouchableWithoutFeedback onPress={onPressRight}>
            <Fontisto name='bell' size={thisIconSize} color='black' />
          </TouchableWithoutFeedback>
        ) : null} */}
        {showThreeDots ? (
          <TouchableWithoutFeedback onPress={onPressRight}>
            <Entypo
              name='dots-three-vertical'
              size={thisIconSize}
              color='black'
            />
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: statusBarHeight + font(20),
    // marginHorizontal: font(15),
    paddingHorizontal: 35,
  },

  titleLeft: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    gap: font(10),
  },
  titleRight: {
    flexDirection: 'row',
    // flexGrow: 1,
    alignItems: 'center',
    gap: font(14),
  },

  title: {
    fontSize: font(22),
    fontWeight: '600',
  },
});
