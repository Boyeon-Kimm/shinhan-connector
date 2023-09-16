import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import MyButton from '../../components/common/Button';

export default function GiftUpdate() {
  // 선물 카테고리
  const [giftOpen, setGiftOpen] = useState(false);
  const [giftValue, setGiftValue] = useState(null);
  const [giftItems, setGiftItems] = useState([
    { label: '교환권/상품권', value: '교환권/상품권' },
    { label: '화장품', value: '화장품' },
    { label: '옷', value: '옷' },
    { label: '향수', value: '향수' },
    { label: '주얼리', value: '주얼리' },
    { label: '식품', value: '식품' },
    { label: '리빙', value: '리빙' },
    { label: '레저/스포츠', value: '레저/스포츠' },
    { label: '유아동', value: '유아동' },
    { label: '반려동물 용품', value: '반려동물 용품' },
    { label: '도서/음잔/문고', value: '도서/음잔/문고' },
    { label: '디지털/가전', value: '디지털/가전' },
    { label: '식물', value: '식물' },
    { label: '기타', value: '기타' },
  ]);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.titleCon}>
          <Text style={styles.title}>선물 등록</Text>
          <Text style={styles.grayText}>지인에게 받은 선물을 등록하세요!</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='제품명'
            keyboardType='default'
          />
          <View>
            <DropDownPicker
              style={styles.dropDown}
              dropDownContainerStyle={{
                width: 300,
                borderColor: '#DCDCDC',
              }}
              open={giftOpen}
              defaultValue={giftValue}
              value={giftValue}
              items={giftItems}
              setOpen={setGiftOpen}
              setValue={setGiftValue}
              setItems={setGiftItems}
              modalProps={{
                animationType: 'fade',
              }}
              zIndex={99}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder='가격'
            keyboardType='number-pad'
          />
          <TextInput
            style={styles.textarea}
            placeholder='설명'
            keyboardType='default'
          />
        </View>
        <View style={styles.btndiv}>
          <MyButton title='등록' backgroundColor='#2B70CC' color='white' />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 15,
    marginHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  grayText: {
    fontSize: 16,
    color: 'gray',
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  dropDown: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  textarea: {
    height: 100,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  btndiv: {
    width: 300,
    marginTop: 10,
  }
});
