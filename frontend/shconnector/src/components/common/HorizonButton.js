import { Pressable, Text } from "react-native";

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
      backgroundColor: backgroundColor,
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    marginHorizontal: 12,
    marginBottom: 20,
  },
  text: {
    fontSize: font(16),
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
