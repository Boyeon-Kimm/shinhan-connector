import React, { useEffect, useRef } from 'react';
import { View, Text, Modal, StyleSheet, Animated, PanResponder, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { getWindowDimensions, font } from '../../config/globalStyles';

export default function BottomSheet({ visible, setVisible, sheetData }) {
  const closeModal = () => {
    setVisible(false);
  };

  const handleAddExpense = () => {
    console.log('경조사비 추가');
  };
  const handleAddGift = () => {
    console.log('선물 추가');
  };
  const handleUpdateSchedule = () => {
    console.log('일정 수정');
  };
  const handleDeleteSchedule = () => {
    console.log('일정 삭제');
  };

  // const thisSheetData = sheetData;
  const thisSheetData = [
    { title: '경조사비 추가', func: handleAddExpense },
    { title: '선물 추가', func: handleAddGift },
    { title: '일정 수정', func: handleUpdateSchedule },
    { title: '일정 삭제', func: handleDeleteSchedule },
  ];

  const { windowWidth, windowHeight } = getWindowDimensions();

  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      // animationType={'slide'}
      transparent
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomSheetContainer}>
          {thisSheetData.map((item) => {
            return (
              <View
                key={item.title}
                style={styles.bottomSheetCard}
                onPress={item.func}
              >
                <View style={styles.bottomSheetContent}>
                  <Text style={{ flexGrow: 1 }}>{item.title}</Text>
                  <AntDesign
                    name="right"
                    size={font(20)}
                    color="black"
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: 'fit-content',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: font(32),
    borderTopRightRadius: font(32),
    backgroundColor: 'orange',
    paddingHorizontal: font(16),
    paddingTop: font(16),
  },
  bottomSheetCard: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: font(16),
    backgroundColor: 'red',
    paddingVertical: font(16),
  },
  bottomSheetContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: font(16),
    backgroundColor: 'red',
    paddingVertical: font(16),
  },
});
