import { Pressable, Text, StyleSheet } from "react-native";

import { font } from "../../config/globalStyles";
export default function horizontalButton({
  onPress,
  title,
  backgroundColor,
  color,
  borderColor,
  selected,
  // selected로 컬러 바꿔야 함
}) {
  const dynamicStyles = {
    button: {
      backgroundColor: selected ? backgroundColor : "white",
      borderColor: borderColor,
    },
    text: {
      color: color,
    },
  };

  return (
    <Pressable style={[styles.button, dynamicStyles.button]} onPress={onPress}>
      <Text style={[styles.text, dynamicStyles.text]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 2,
    marginBottom: 2,
    borderWidth: 1,
    width: 100,
    height: 40,
  },
  text: {
    fontSize: font(12),
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "white",
  },
});