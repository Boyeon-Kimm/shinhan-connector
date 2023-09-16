import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import MyButton from '../../components/common/Button';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function MoneyCreate() {
  return (
    <View>
      <StatusBar style='auto' />
      <View style={styles.titleCon}>
        <Text style={styles.title}>선물 수정</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='금액'
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  },
});
