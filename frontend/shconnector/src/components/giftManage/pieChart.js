import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VictoryPie } from 'victory-native';
// import { useDimension } from 'react-native-responsive-dimensions';

export default function pieChart({ ratio }) {
  const { height, width } = useWindowDimensions();

  const pieWidth = width * ratio;
  //   const pieHeight = height * heightRatio;
  return (
    <VictoryPie
      data={[
        { x: 'Cats', y: 35 },
        { x: 'Dogs', y: 40 },
        { x: 'Birds', y: 55 },
      ]}
      animate={{
        duration: 2000,
        easing: 'exp',
        onLoad: { duration: 2000 },
      }}
      //   animate={{ easing: 'exp' }}
      colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
      width={pieWidth}
    />
  );
}
