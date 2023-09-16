import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function SearchInput(){
  return(
    <TextInput
      style={styles.input}
      placeholder="검색어를 입력해주세요.."
      keyboardType="text"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
})