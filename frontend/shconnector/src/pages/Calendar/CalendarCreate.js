import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import HeaderBar from '../../components/common/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { updateFriendItems } from '../../reducers/FriendSlice';
import API from '../../util/api';
import { colors } from '../../config/globalStyles';
import dayjs from 'dayjs';
import MyButton from '../../components/common/Button';

export default function CalendarCreate({ navigation }) {
  const dispatch = useDispatch();
  const friendList = useSelector((state) => state.friend.friendItems);
  const [message, setMessage] = useState(null);

  //일정 분류 관련
  const [isFriendSchedule, setIsMySchedule] = useState(true);
  const toggleFriendSwitch = () => {
    setIsMySchedule((previousState) => !previousState);
  };

  // 지인 선택 관련
  const [friendOpen, setFriendOpen] = useState(false);
  const [friendValue, setFriendValue] = useState(null);
  const [friendItems, setFriendItems] = useState([]);

  // 카테고리 선택 관련
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [categoryItems, setCategoryItems] = useState([
    { label: '결혼식', value: '결혼식' },
    { label: '장례식', value: '장례식' },
    { label: '잔치', value: '잔치' },
    { label: '생일', value: '생일' },
    { label: '집들이', value: '집들이' },
    { label: '기타', value: '기타' },
  ]);

  const [name, setName] = useState(null);
  const [content, setContent] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  // 반복 주기 관련
  const [repeatOpen, setRepeatOpen] = useState(false);
  const [repeatValue, setRepeatValue] = useState(null);
  const [repeatItems, setRepeatItems] = useState([
    { label: '반복 없음', value: '0' },
    { label: '매 주', value: '1' },
    { label: '매 달', value: '2' },
    { label: '매 년', value: '3' },
  ]);

  // 날짜 및 시간 선택 관련
  const placeholder = '날짜 및 시간 선택';
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateText, setText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log(date);
    console.log('테스트', dayjs(date).unix());
    hideDatePicker();
    setText(dayjs(date).format('YYYY/MM/DD A hh:mm'));
    setTimestamp(dayjs(date).unix());
  };

  // 알림토글 스위치 관련
  const [isEnabled, setIsEnabled] = useState(false);
  const [isAlarmVisible, setAlarmVisible] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setAlarmVisible((previousState) => !previousState);
    setAlarmValue(0);
  };

  // 알림 시간 관련
  const [alarmOpen, setAlarmOpen] = useState(false);
  const [alarmValue, setAlarmValue] = useState(0);
  const [alarmItems, setAlarmItems] = useState([
    // { label: '알람 없음', value: '0' },
    { label: '3일 전', value: '1' },
    { label: '7일 전', value: '2' },
    { label: '한 달 전', value: '3' },
  ]);

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

  const handlePressRegist = async () => {
    if (!name || !content || !timestamp || !repeatValue) {
      setMessage('필수 입력 사항을 입력해주세요');
      return;
    }
    if (isFriendSchedule && !categoryValue) {
      setMessage('일정 카테고리를 선택해주세요');
      return;
    }
    console.log(alarmValue);

    const url = 'api/schedule';
    const body = {
      name,
      category: isFriendSchedule ? categoryValue : '내일정',
      date: timestamp,
      repeatCycle: repeatValue,
      content,
      alarm: alarmValue,
    };

    if (isFriendSchedule) body.friendNo = friendValue;
    console.log(body);
    const response = await API.post(url, body).catch((error) => {
      console.error('Axios 에러', error.response);
      if (error.response.status === 400) {
        dispatch(updateMessage('아이디 혹은 비밀번호를 확인해주세요'));
        console.log('아이디 혹은 비밀번호를 확인해주세요');
      }
    });

    if (response && response.status === 201) {
      //메인 이동
      navigation.navigate('Home');
    } else {
      // 모달로 띄울 것
      console.log('일정 등록 실패');
    }
  };

  const saveFriendItems = async () => {
    const url = 'api/friend/list';
    const response = await API.get(url).catch((error) => {
      console.error('Axios 에러', error);
    });
    console.log(response.data);
    if (response && response.status === 200) {
      const newList = [];
      for (item of response.data) {
        newList.push({
          label: `[${item.relation}] ${item.name}`,
          value: item.friendNo,
        });
      }
      dispatch(updateFriendItems(newList));
    }
  };

  useEffect(() => {
    saveFriendItems();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='제목'
          keyboardType='text'
        />
        <TextInput
          value={content}
          onChangeText={setContent}
          style={styles.longInput}
          placeholder='상세 설명'
          keyboardType='text'
        />
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            value={dateText}
            pointerEvents='none'
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor='#BABABA'
            underlineColorAndroid='transparent'
            editable={false}
            // value={text}
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
            open={repeatOpen}
            value={repeatValue}
            items={repeatItems}
            setOpen={setRepeatOpen}
            setValue={setRepeatValue}
            setItems={setRepeatItems}
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
                <DropDownPicker
                  style={styles.dropDown}
                  dropDownContainerStyle={{
                    width: 300,
                    borderColor: '#DCDCDC',
                  }}
                  open={alarmOpen}
                  value={alarmValue}
                  items={alarmItems}
                  setOpen={setAlarmOpen}
                  setValue={setAlarmValue}
                  setItems={setAlarmItems}
                  placeholder='— 알람 시간을 선택해주세요 —'
                  modalProps={{
                    animationType: 'fade',
                  }}
                />
                {/* <TextInput
                  pointerEvents='none'
                  style={styles.input}
                  placeholder={timePlaceholder}
                  placeholderTextColor='#BABABA'
                  underlineColorAndroid='transparent'
                  editable={false}
                  value={timeText}
                /> */}
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
          <View style={styles.alarmContainer}>
            <View style={styles.alarmContainerHeader}>
              <Text>{isFriendSchedule ? '지인의 일정' : '나의 일정'}</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isFriendSchedule ? '#ffffff' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleFriendSwitch}
                value={isFriendSchedule}
              />
            </View>
            {isFriendSchedule && (
              <TouchableOpacity onPress={showTimePicker}>
                <DropDownPicker
                  style={styles.dropDown}
                  dropDownContainerStyle={{
                    width: 300,
                    borderColor: '#DCDCDC',
                  }}
                  open={friendOpen}
                  value={friendValue}
                  items={friendList}
                  setOpen={setFriendOpen}
                  setValue={setFriendValue}
                  // setItems={setRepeatItems}
                  placeholder='— 지인을 선택해주세요 —'
                  modalProps={{
                    animationType: 'fade',
                  }}
                />
                <DropDownPicker
                  style={styles.dropDown}
                  dropDownContainerStyle={{
                    width: 300,
                    borderColor: '#DCDCDC',
                  }}
                  open={categoryOpen}
                  value={categoryValue}
                  items={categoryItems}
                  setOpen={setCategoryOpen}
                  setValue={setCategoryValue}
                  setItems={setCategoryItems}
                  placeholder='— 일정 카테고리를 선택해주세요 —'
                  modalProps={{
                    animationType: 'fade',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text>{message}</Text>
        <View style={styles.btnCon}>
          <MyButton
            title='등록'
            backgroundColor={colors.shinhan}
            color='white'
            onPress={handlePressRegist}
          />
        </View>
        {/* <View style={styles.submitButton}>
          <Text style={styles.submitText}>완료</Text>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
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
  btnCon: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 300,
    marginTop: 10,
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
    marginTop: 15,
  },
  submitText: {
    color: 'white',
  },
});
