import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import HeaderBar from '../../components/common/HeaderBar';

Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.toString(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

export default function CalendarCreate({navigation}) {
  // 반복 주기 관련
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '매주', value: '1' },
    { label: '매달', value: '2' },
    { label: '매년', value: '3' },
  ]);

  // 날짜 및 시간 선택 관련
  const placeholder = '날짜 및 시간 선택';
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, setText] = useState('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn('dateFormat: ', date.format('yyyy/MM/dd a/p hh:mm'));
    hideDatePicker();
    setText(date.format('yyyy/MM/dd a/p hh:mm'));
  };

  // 토글 스위치 관련
  const [isEnabled, setIsEnabled] = useState(false);
  const [isAlarmVisible, setAlarmVisible] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setAlarmVisible((previousState) => !previousState);
  };

  // 알림 시간 관련
  const timePlaceholder = '— 알림 받을 시간을 선택해주세요 —';
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [timeText, setTimeText] = useState('');
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleTimeConfirm = (date) => {
    console.warn('dateFormat: ', date.format('a/p hh:mm'));
    hideTimePicker();
    setTimeText(date.format('a/p hh:mm'));
  };

  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={null}
        showLogout={false}
        showBell={true}
        showThreeDots={false}
        onPressRight={null}
      />
      <View style={styles.titleCon}>
        <Text style={styles.title}>새로운 일정 추가</Text>
      </View>
      <TextInput style={styles.input} placeholder='제목' keyboardType='text' />
      <TextInput
        style={styles.longInput}
        placeholder='상세 설명'
        keyboardType='text'
      />
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          pointerEvents='none'
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor='#BABABA'
          underlineColorAndroid='transparent'
          editable={false}
          value={text}
        />
        <DateTimePickerModal
          headerTextIOS={placeholder}
          isVisible={isDatePickerVisible}
          mode='datetime'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
      <View>
        <DropDownPicker
          style={styles.dropDown}
          dropDownContainerStyle={{
            width: 300,
            borderColor: '#DCDCDC',
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder='— 반복 주기를 선택해주세요 —'
          modalProps={{
            animationType: 'fade',
          }}
        />
        <View style={styles.alarmContainer}>
          <View style={styles.alarmContainerHeader}>
            <Text>알림 설정</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          {isAlarmVisible && (
            <TouchableOpacity onPress={showTimePicker}>
              <TextInput
                pointerEvents='none'
                style={styles.input}
                placeholder={timePlaceholder}
                placeholderTextColor='#BABABA'
                underlineColorAndroid='transparent'
                editable={false}
                value={timeText}
              />
              <DateTimePickerModal
                headerTextIOS={timePlaceholder}
                isVisible={isTimePickerVisible}
                mode='time'
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.submitButton}>
        <Text style={styles.submitText}>완료</Text>
      </View>
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
  titleCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: 'black',
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
    marginBottom: 15,
  },
  dropDown: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
  },
  longInput: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 80,
    width: 300,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  optionText: {
    fontSize: 13,
    fontweight: '500',
    marginBottom: 5,
    color: 'grey',
  },
  alarmContainer: {
    flexDirection: 'column',
  },
  alarmContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#2B70CC',
    width: 300,
    height: 50,
  },
  submitText: {
    color: 'white',
  },
});
