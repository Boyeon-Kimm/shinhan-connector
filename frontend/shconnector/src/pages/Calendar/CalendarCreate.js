import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
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
import { useDispatch, useSelector } from 'react-redux';
import { updateFriendItems } from '../../reducers/FriendSlice';
import API from '../../util/api';
import { colors } from '../../config/globalStyles';
import Button from '../../components/common/Button';

Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  let weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  let d = this;

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

export default function CalendarCreate({ navigation }) {
  const dispatch = useDispatch();
  const friendList = useSelector((state) => state.friend.friendItems);

  //일정 분류 관련
  const [isFriendSchedule, setIsMySchedule] = useState(true);
  const toggleFriendSwitch = () => {
    setIsMySchedule((previousState) => !previousState);
  };

  // 지인 선택 관련
  const [friendOpen, setFriendOpen] = useState(false);
  const [friendValue, setFriendValue] = useState(null);
  const [friendItems, setFriendItems] = useState([
    // { label: '매주', value: '1' },
    // { label: '매달', value: '2' },
    // { label: '매년', value: '3' },
  ]);

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

  // 반복 주기 관련
  const [repeatOpen, setRepeatOpen] = useState(false);
  const [repeatValue, setRepeatValue] = useState(null);
  const [repeatItems, setRepeatItems] = useState([
    { label: '매주', value: '1' },
    { label: '매달', value: '2' },
    { label: '매년', value: '3' },
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
    console.warn('dateFormat: ', date.format('yyyy/MM/dd a/p hh:mm'));
    hideDatePicker();
    setText(date.format('yyyy/MM/dd a/p hh:mm'));
  };

  // 알림토글 스위치 관련
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

  const handlePressRegist = async () => {
    const url = 'api/schedule';
    const body = {};
    const response = await API.post(url, body).catch((error) => {
      console.error('Axios 에러', error);
      if (error.response.status === 400) {
        dispatch(updateMessage('아이디 혹은 비밀번호를 확인해주세요'));
        console.log('아이디 혹은 비밀번호를 확인해주세요');
      }
    });

    // console.log(response.data.token.accessToken);

    if (response && response.status === 200) {
      dispatch(updateAccountNo(response.data.signInResponse.accountNo));
      dispatch(updateMemberNo(response.data.signInResponse.memberNo));
      dispatch(updateId(response.data.signInResponse.id));
      dispatch(updateName(response.data.signInResponse.name));
      dispatch(updateAge(response.data.signInResponse.age));
      dispatch(updateGender(response.data.signInResponse.gender));
      dispatch(updateContact(response.data.signInResponse.contact));
      dispatch(updateAccessToken(response.data.token.accessToken));
      dispatch(updateRefreshToken(response.data.token.refreshToken));
      //메인 이동
      navigation.navigate('Home');
    } else {
      // 모달로 띄울 것
      console.log('로그인 실패');
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

        // { label: '매주', value: '1' },
        // { label: '매달', value: '2' },
        // { label: '매년', value: '3' },
      }
      // console.log(newList);
      dispatch(updateFriendItems(newList));
    }
  };

  useEffect(() => {
    saveFriendItems();
  }, []);

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
      <View style={styles.alarmContainer}>
        <View style={styles.alarmContainerHeader}>
          <Text>{isFriendSchedule ? '지인의 일정' : '나의 일정'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleFriendSwitch}
            value={isFriendSchedule}
          />
          {isFriendSchedule ? (
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
          ) : null}
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
        keyboardType='default'
      />
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          pointerEvents='none'
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor='#BABABA'
          underlineColorAndroid='transparent'
          editable={false}
          value={dateText}
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
      <View style={styles.btnCon}>
        <Button
          title='완료'
          backgroundColor={colors.shinhan}
          color='white'
          onPress={handlePressRegist}
        />
      </View>
      {/* <View style={styles.submitButton}>
        <Text style={styles.submitText}>완료</Text>
      </View> */}
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
  btnCon: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});
