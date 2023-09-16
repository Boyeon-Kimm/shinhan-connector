import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import ButtonShort from '../common/ButtonShort';
import { colors, font } from '../../config/globalStyles';
import BottomSheet from '../common/BottomSheet';
import API from '../../util/api';
import { dayFormat } from '../../util/globalFunc';

export default function ScheduleCard({
  scheduleNumber,
  scheduleNo,
  friendName,
  time,
  relation,
  scheduleName,
  scheduleCategory,
  amount,
  completed,
}) {
  const currMonth = useSelector((state) => state.calendar.currMonth);
  const currYear = useSelector((state) => state.calendar.currYear);

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const thisTime = dayFormat(time * 1000);

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
    deleteSchedule();
  };

  const deleteSchedule = async () => {
    console.log('카테고리', scheduleCategory);
    console.log('스케줄넘버', scheduleNo);
    const url = scheduleCategory
      ? `api/schedule/${scheduleNo}?option=${scheduleCategory}`
      : `api/schedule/${scheduleNo}?option=notMine`;

    const response = await API.delete(url).catch((error) => {
      console.error('Axios 에러', error.response);
      // if (error.response.status === 400) {

      // }
    });

    console.log(response.data);

    if (response && response.status === 200) {
      //메인 이동
      // navigation.navigate('Home');
      setModalVisible(false);
      getSchedules(currYear, currMonth);
    } else {
      // 모달로 띄울 것
      console.log('삭제 실패');
    }
  };

  const getSchedules = async (year, month) => {
    console.log('getSchedules 실행');
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const startDate = makeTimestamp(prevYear, prevMonth) / 1000;
    const endDate = makeTimestamp(nextYear, nextMonth) / 1000;
    // const url = `api/schedule/list`;
    const url = `api/schedule/list?start=${startDate}&end=${endDate}`;
    // const url = `api/schedule/list?start=${startDate}&end=${endDate}`;
    console.log(url);
    const response = await API.get(url).catch((error) =>
      console.error('Axios 에러', error)
    );
    console.log('일정응답 데이터:', response.data);
    //데이터 형식 확인할 것
    if (response && response.status === 200)
      dispatch(updateSchedules(response.data));
  };

  const scheduleCardModalData = [
    { title: '경조사비 추가', func: handleAddExpense },
    { title: '선물 추가', func: handleAddGift },
    { title: '일정 수정', func: handleUpdateSchedule },
    { title: '일정 삭제', func: handleDeleteSchedule },
  ];

  const handleTransfer = () => {
    navigation.navigate('CheckAccount');
  };

  const onPressHorizon = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name='music-note-whole'
            size={24}
            color='black'
          />
          <Text>{thisTime}</Text>
        </View>
        <Feather
          name='more-horizontal'
          size={24}
          color='black'
          onPress={onPressHorizon}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>{relation ? `[${relation}] ${friendName}` : friendName}</Text>
          <Text>{scheduleName}</Text>
          {/* <View style={{ flexDirection: 'row' }}>
            {completed ? (
              <Feather
                name="check"
                size={font(24)}
                color="black"
              />
            ) : (
              <FontAwesome
                name="square-o"
                size={font(24)}
                color="black"
              />
            )}
          </View> */}
        </View>
        {/* <View>
          <ButtonShort
            onPress={handleTransfer}
            title="송금하기"
            backgroundColor={colors.shinhan}
            color="white"
          ></ButtonShort>
        </View> */}
      </View>
      <BottomSheet
        visible={modalVisible}
        setVisible={setModalVisible}
        sheetData={scheduleCardModalData}
      />
    </View>
  );
}
