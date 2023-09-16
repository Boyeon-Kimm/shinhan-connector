import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { getWindowDimensions, font } from "../../config/globalStyles";

export default function BottomSheetGift({ visible, setVisible }) {
  const closeModal = () => {
    setVisible(false);
  };

  const { windowWidth, windowHeight } = getWindowDimensions();

  // 기존 데이터 들어가는 부분(추후 백엔드에서 받아와야 함)
  const previousData = {
    title: "집들이 선물(커피포트) / 김싸피",
    content: "백화점에서 35만원 정도에 구매했다고 함",
    dateTime: "2023/08/17 18:00",
    price: 350000,
    relationship: "",
    sort: "",
  };
  const [formedPrice, setFormedPrice] = useState("");
  const [tempPrice, setTempPrice] = useState("");

  const formPrice = () => {
    const formedNumber = previousData.price.toLocaleString("ko-KR");
    const wantedForm = formedNumber + " 원";
    setFormedPrice(wantedForm);
  };

  const tempSave = (n) => {
    setTempPrice(n);
  };

  const formPriceAfterChange = (n) => {
    const formedNumber = Number(tempPrice).toLocaleString("ko-KR");
    const wantedForm = formedNumber + " 원";
    setFormedPrice(wantedForm);
  };

  const reset = () => {
    setFormedPrice("");
  };

  // 날짜 및 시간 선택 관련
  const placeholder = "날짜 및 시간 선택";
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, setText] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("dateFormat: ", date.format("yyyy/MM/dd a/p hh:mm"));
    hideDatePicker();
    setText(date.format("yyyy/MM/dd a/p hh:mm"));
  };

  // 지인 관련
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "가족", value: "1" },
    { label: "친구", value: "2" },
    { label: "직장", value: "3" },
    { label: "거래처", value: "4" },
    { label: "기타", value: "5" },
  ]);

  // 선물 카테고리
  const [giftOpen, setGiftOpen] = useState(false);
  const [giftValue, setGiftValue] = useState(null);
  const [giftItems, setGiftItems] = useState([
    { label: "교환권/상품권", value: "교환권/상품권" },
    { label: "화장품", value: "화장품" },
    { label: "옷", value: "옷" },
    { label: "향수", value: "향수" },
    { label: "주얼리", value: "주얼리" },
    { label: "식품", value: "식품" },
    { label: "리빙", value: "리빙" },
    { label: "레저/스포츠", value: "레저/스포츠" },
    { label: "유아동", value: "유아동" },
    { label: "반려동물 용품", value: "반려동물 용품" },
    { label: "도서/음잔/문고", value: "도서/음잔/문고" },
    { label: "디지털/가전", value: "디지털/가전" },
    { label: "식물", value: "식물" },
    { label: "기타", value: "기타" },
  ]);

  useEffect(() => {
    setText(previousData.dateTime);
    formPrice();
    let defaultRel = null;
    items.forEach((e) => {
      if (e.label === previousData.relationship) {
        defaultRel = e;
      }
    });
    setValue(defaultRel);
  }, []);

  return (
    <Modal
      visible={visible}
      // animationType={"fade"}
      animationType={"slide"}
      transparent
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={() => closeModal}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.title}>선물 내용 수정</Text>
          <TextInput
            style={styles.input}
            keyboardType="text"
            defaultValue={previousData.title}
          />
          <TextInput
            style={styles.bigInput}
            keyboardType="text"
            defaultValue={previousData.content}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              pointerEvents="none"
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor="#BABABA"
              underlineColorAndroid="transparent"
              editable={false}
              value={text}
            />
            <DateTimePickerModal
              headerTextIOS={placeholder}
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
          <View style={styles.middleInputView}>
            <TextInput
              style={styles.middleInput}
              keyboardType="number-pad"
              defaultValue={formedPrice}
              // value={formedPrice}
              onFocus={reset}
              onChange={(e) => tempSave(e.nativeEvent.text)}
              onEndEditing={(e) => formPriceAfterChange(e.nativeEvent.text)}
            />
            <DropDownPicker
              style={styles.middleDropDown}
              dropDownContainerStyle={{
                width: "48%",
                borderColor: "#DCDCDC",
              }}
              open={open}
              defaultValue={value}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              modalProps={{
                animationType: "fade",
              }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <DropDownPicker
              style={styles.dropDown}
              dropDownContainerStyle={{
                width: 300,
                borderColor: "#DCDCDC",
              }}
              open={giftOpen}
              defaultValue={giftValue}
              value={giftValue}
              items={giftItems}
              setOpen={setGiftOpen}
              setValue={setGiftValue}
              setItems={setGiftItems}
              modalProps={{
                animationType: "fade",
              }}
              zIndex={99}
            />
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>완료</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    // flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    borderColor: "green",
    width: 5,
    height: "100%",
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
    paddingVertical: font(16),
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  bottomSheetContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: font(16),
    // paddingVertical: font(10),
    paddingHorizontal: font(20),
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
  },
  middleInputView: {
    // borderWidth: 1,
    flexDirection: "row",
    width: 300,
    gap: 12,
    height: 50,
    zIndex: 999,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    color: "black",
    borderColor: "#DCDCDC",
    height: 50,
    width: 300,
    padding: 10,
    marginBottom: 15,
  },
  middleInput: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    color: "black",
    borderColor: "#DCDCDC",
    height: 50,
    width: "48%",
    padding: 10,
    marginBottom: 15,
  },
  middleDropDown: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    height: 50,
    width: "48%",
    padding: 10,
  },
  bigInput: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    color: "black",
    borderColor: "#DCDCDC",
    height: 100,
    width: 300,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: "top",
  },
  dropDown: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    height: 50,
    width: 300,
    padding: 10,
  },
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#2B70CC",
    width: 300,
    height: 50,
    marginTop: 15,
  },
  submitText: {
    color: "white",
  },
});
