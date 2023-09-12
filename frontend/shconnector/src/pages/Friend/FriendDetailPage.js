import React, { useState, useRef } from "react";
import { Animated, View, Text, StyleSheet, Image } from "react-native";
import HeaderBar from "../../components/common/HeaderBar";
import HorizonButton from "../../components/common/HorizonButton";
import BottomSheet from "../../components/common/BottomSheet";
import { useScrollToTop } from "@react-navigation/native";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { Shadow } from "react-native-shadow-2";

import { colors, font, screenWidth } from "../../config/globalStyles";

import testImg from "../../../assets/character8.png";
import FriendGiftCard from "../../components/friend/FriendGiftCard";

const category = ["전체보기", "받은 내역", "보낸 내역"];

export default function FriendDetailPage({ friendNo }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(category[0]);
  const handleModify = () => {
    console.log(friendNo + "수정");
  };
  const handleDelete = () => {
    console.log(friendNo + "삭제");
  };

  const FriendDetailModalData = [
    { title: "수정", func: handleModify },
    { title: "삭제", func: handleDelete },
  ];

  const data = [
    { id: 1, name: "아이템1" },
    { id: 2, name: "아이템2" },
    { id: 3, name: "아이템3" },
    { id: 4, name: "아이템4" },
    { id: 5, name: "아이템5" },
    { id: 6, name: "아이템6" },
    { id: 7, name: "아이템7" },
    { id: 8, name: "아이템8" },
    { id: 9, name: "아이템9" },
    { id: 10, name: "아이템10" },
    { id: 11, name: "아이템11" },
    { id: 12, name: "아이템12" },
    { id: 13, name: "아이템13" },
    { id: 14, name: "아이템14" },
    { id: 15, name: "아이템15" },
    { id: 16, name: "아이템15" },
    { id: 17, name: "아이템15" },
    { id: 18, name: "아이템15" },
    { id: 19, name: "아이템15" },
    { id: 20, name: "아이템15" },
    { id: 21, name: "아이템15" },
    { id: 22, name: "아이템15" },
    { id: 23, name: "아이템15" },
    { id: 24, name: "아이템15" },
    { id: 25, name: "아이템15" },
    { id: 26, name: "아이템15" },
    { id: 27, name: "아이템15" },
    { id: 28, name: "아이템15" },
    { id: 29, name: "아이템15" },
    { id: 30, name: "아이템15" },
    { id: 31, name: "아이템15" },
    { id: 32, name: "아이템15" },
    { id: 33, name: "아이템15" },
    { id: 34, name: "아이템15" },
  ];

  const onPressHorizon = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  const onPressThreeDots = () => {
    setModalVisible(true);
    console.log("three");
  };

  const ref = useRef(null);
  useScrollToTop(ref);

  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY } =
    useCollapsibleHeader({
      navigationOptions: {
        headerStyle: {
          height: 530,
        },
      },
    });

  const stickyHeaderHeight = 180;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY }],
          position: "absolute",
          backgroundColor: "white",
          height: stickyHeaderHeight,
          width: "100%",
          zIndex: 9999,
        }}
      >
        <Shadow style={{ width: "100%" }}>
          <HeaderBar
            showBackArrow={true}
            showThreeDots={true}
            onPressRight={onPressThreeDots}
          />
          <View style={styles.headerContent}>
            <Image source={testImg} style={styles.img}></Image>
            <Text
              style={{
                fontSize: 17,
                color: "grey",
                fontWeight: "600",
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              [직장]
            </Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>김보연</Text>
            <View style={styles.userInfo}>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>전화번호</Text>
                <Text>010-1234-5678</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>소속</Text>
                <Text>신한은행</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>계좌번호</Text>
                <Text>[신한] 110-987-654321</Text>
              </View>
            </View>
            <View style={styles.horizonCon} horizontal={true}>
              {category.map((item) => (
                <HorizonButton
                  key={item}
                  onPress={() => {
                    onPressHorizon(item);
                  }}
                  title={item}
                  backgroundColor={colors.button}
                  color={colors.shinhan}
                  borderColor={colors.button}
                  selected={currentCategory === item ? true : false}
                />
              ))}
            </View>
          </View>
        </Shadow>
      </Animated.View>
      {/* //////////////////////////// */}

      <Animated.FlatList
        style={{
          position: "relative",
          width: "100%",
        }}
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: containerPaddingTop + stickyHeaderHeight,
        }}
        scrollIndicatorInsets={{
          top: scrollIndicatorInsetTop + stickyHeaderHeight,
        }}
        ref={ref}
        data={data}
        renderItem={(item) => <FriendGiftCard onPressHorizon={null} />}
        keyExtractor={(item) => item.id}
      />

      <BottomSheet
        visible={modalVisible}
        setVisible={setModalVisible}
        sheetData={FriendDetailModalData}
      />
    </View>
  );
}

const imgSize = screenWidth / 3;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  headerContent: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    zIndex: 999,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  img: {
    width: imgSize,
    height: imgSize,
    borderRadius: font(imgSize) / 2,
    borderColor: colors.shinhan,
    borderWidth: font(3),
  },
  horizonCon: {
    flexDirection: "row",
  },
  userInfo: {
    width: "100%",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  infoCard: {
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 5,
    width: "80%",
    padding: 10,
    gap: 5,
  },
  infoText: {
    color: "grey",
  },
});