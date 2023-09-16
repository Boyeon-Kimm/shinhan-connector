import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { getWindowDimensions, font } from "../../config/globalStyles";

export default function BottomSheet({ visible, setVisible, sheetData }) {
  const closeModal = () => {
    setVisible(false);
  };
  const thisSheetData = sheetData;
  // const handleAddExpense = () => {
  //   console.log("경조사비 추가");
  // };
  // const handleAddGift = () => {
  //   console.log("선물 추가");
  // };
  // const handleUpdateSchedule = () => {
  //   console.log("일정 수정");
  // };
  // const handleDeleteSchedule = () => {
  //   console.log("일정 삭제");
  // };

  // const thisSheetData = [
  //   { title: "경조사비 추가", func: handleAddExpense },
  //   { title: "선물 추가", func: handleAddGift },
  //   { title: "일정 수정", func: handleUpdateSchedule },
  //   { title: "일정 삭제", func: handleDeleteSchedule },
  // ];

  const { windowWidth, windowHeight } = getWindowDimensions();

  return (
    <Modal
      visible={visible}
      animationType={"fade"}
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
              <TouchableOpacity
                key={item.title}
                style={styles.bottomSheetCard}
                onPress={() => {
                  item.func();
                }}
              >
                <View style={styles.bottomSheetContent}>
                  <Text style={{ flexGrow: 1, fontSize: font(15) }}>{item.title}</Text>
                  <AntDesign name="right" size={font(16)} color="black" />
                </View>
              </TouchableOpacity>
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
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: "fit-content",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: font(32),
    borderTopRightRadius: font(32),
    // backgroundColor: "orange",
    paddingHorizontal: font(24),
    // paddingTop: font(16),
    paddingVertical: font(30),
  },
  bottomSheetCard: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: "center",
    fontSize: font(16),
    // backgroundColor: "red",
    paddingVertical: font(16),
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  bottomSheetContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: font(16),
    // backgroundColor: "red",
    // paddingVertical: font(10),
    paddingHorizontal: font(20),
  },
});
