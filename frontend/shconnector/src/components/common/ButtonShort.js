import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { font } from '../../config/globalStyles';

export default function Button(props) {
  const { onPress, title, backgroundColor, color } = props;

  const dynamicStyles = {
    button: {
      backgroundColor: backgroundColor,
    },
    text: {
      color: color,
    },
  };

  return (
    <Pressable
      style={[styles.button, dynamicStyles.button]}
      onPress={onPress}
    >
      <Text style={[styles.text, dynamicStyles.text]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 7,
    elevation: 3,
  },
  text: {
    fontSize: font(15),
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
