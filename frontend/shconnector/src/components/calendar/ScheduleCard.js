import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import ButtonShort from '../common/ButtonShort';
import { colors, font } from '../../config/globalStyles';
import BottomSheet from '../common/BottomSheet';

export default function ScheduleCard({ scheduleNumber, time, relation, scheduleName, amount, completed }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleTransfer = () => {
    // 송금 실행 함수 구현 필요
  };

  const onPressHorizon = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="music-note-whole"
            size={24}
            color="black"
          />
          <Text>{time}</Text>
        </View>
        <Feather
          name="more-horizontal"
          size={24}
          color="black"
          onPress={onPressHorizon}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text>
            [{relation}] {scheduleName}
          </Text>
          <View style={{ flexDirection: 'row' }}>
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
            {completed ? <Text>송금완료</Text> : <Text>{amount}원</Text>}
          </View>
        </View>
        <View>
          <ButtonShort
            onPress={handleTransfer}
            title="송금하기"
            backgroundColor={colors.shinhan}
            color="white"
          ></ButtonShort>
          {/* 송금하기 수정 필요 */}
        </View>
      </View>
      <BottomSheet
        visible={modalVisible}
        setVisible={setModalVisible}
        scheduleNumber={scheduleNumber}
      />
    </View>
  );
}
