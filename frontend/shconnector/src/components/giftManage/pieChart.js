import React, { useEffect, useState } from 'react';
import { useWindowDimensions, View, StyleSheet, Text } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryContainer } from 'victory-native';
import API from '../../util/api';
import store from '../../../store';
import { makeTimestamp } from '../../util/globalFunc';
// import { useDimension } from 'react-native-responsive-dimensions';

export default function pieChart({ ratio, title }) {
  const { height, width } = useWindowDimensions();
  const pieWidth = width * ratio;
  const pieHeight = height * ratio * 0.5;
  const [giftAmount, setGiftAmount] = useState(0);
  const [tributeAmount, setTributeAmount] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth =
      makeTimestamp(currentDate.getFullYear(), currentDate.getMonth() + 1) / 1000;
    const nextMonth = makeTimestamp(currentDate.getFullYear(), currentDate.getMonth() + 2) / 1000;

    const GiftURL = `/api/gift/list?option=give&amount=true&start=${currentMonth}&end=${nextMonth}`;
    const TributeURL = `/api/tribute/list?option=give&amount=true&start=${currentMonth}&end=${nextMonth}`;
    const AccessToken = store.getState().login.accessToken;

    API.get(GiftURL, {
      headers: {
        Authorization: 'Bearer ' + AccessToken,
      },
    }).then((response) => {
      setGiftAmount(response.data.amount ? response.data.amount : 0);
    });

    API.get(TributeURL, {
      headers: {
        Authorization: 'Bearer ' + AccessToken,
      },
    }).then((response) => {
      setTributeAmount(response.data.amount ? response.data.amount : 0);
    });
  }, []);

  return (
    <View style={styles.chart}>
      <Text style={styles.chartTitle}>{title}</Text>
      <Text style={styles.chartAmount}>{giftAmount + tributeAmount}원</Text>
      <View style={styles.chartConatiner}>
        <VictoryPie
          data={[
            { x: 'Gift', y: giftAmount },
            { x: 'Tribute', y: tributeAmount },
          ]}
          animate={{
            duration: 2000,
            easing: 'exp',
            onLoad: { duration: 2000 },
          }}
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          width={pieWidth}
          height={pieHeight}
          innerRadius={70}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    // borderWidth: 3,
    // bordercolor: "black",
    flexDirection: 'column',
    position: 'relative',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  chartTitle: {
    marginLeft: 20,
    marginTop: 25,
    fontWeight: '600',
    fontSize: 22,
  },
  chartAmount: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
  },
  chartConatiner: {
    // borderWidth: 5,
    // borderColor: "green",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
