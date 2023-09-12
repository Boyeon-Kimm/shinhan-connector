import React from "react";
import { useWindowDimensions, View, StyleSheet, Text } from "react-native";
import { VictoryPie, VictoryLabel, VictoryContainer } from "victory-native";
// import { useDimension } from 'react-native-responsive-dimensions';

export default function pieChart({ ratio }) {
  const { height, width } = useWindowDimensions();
  const pieWidth = width * ratio;
  const pieHeight = height * ratio * 0.5;

  return (
    <View style={styles.chart}>
      <Text style={styles.chartTitle}>2023년 8월 총 지출</Text>
      <View style={styles.chartConatiner}>
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
          animate={{
            duration: 2000,
            easing: "exp",
            onLoad: { duration: 2000 },
          }}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          width={pieWidth}
          height={pieHeight}
          innerRadius={70}
        />
        <VictoryLabel
          textAnchor="center"
          style={{ fontSize: 20 }}
          text="450,000원"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    // borderWidth: 3,
    // bordercolor: "black",
    flexDirection: "column",
    position: "relative",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  chartTitle: {
    marginLeft: 20,
    marginTop: 25,
    fontWeight: "600",
    fontSize: 18,
  },
  chartConatiner: {
    // borderWidth: 5,
    // borderColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
