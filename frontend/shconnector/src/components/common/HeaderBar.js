import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Fontisto, AntDesign, Entypo } from '@expo/vector-icons';
import { font, statusBarHeight } from '../../config/globalStyles';

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
import { useDispatch } from 'react-redux';

export default function HeaderBar({
  showBackArrow,
  onPressArrow,
  title,
  showLogout,
  showBell,
  showThreeDots,
  onPressRight,
}) {
  const thisIconSize = font(22);
  const dispatch = useDispatch();

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
  };

  const onPressBackArrow = onPressArrow;

  return (
    <View style={styles.titleCon}>
      <View style={styles.titleLeft}>
        {showBackArrow ? (
          <TouchableWithoutFeedback>
            <AntDesign
              name='left'
              size={thisIconSize}
              color='black'
              onPress={onPressBackArrow}
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
    marginHorizontal: font(15),
    // paddingHorizontal: 35,
  },

  titleLeft: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    gap: font(6),
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
    gap: font(7),
  },
});
