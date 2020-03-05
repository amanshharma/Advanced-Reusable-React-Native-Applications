import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FloatingButton from "./FloatingButton";

const FloatingMenu = ({ buttons }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {buttons.map((src, index) => {
        return <FloatingButton source={src} key={`${src}_${index}`} />;
      })}
    </View>
  );
};

export default FloatingMenu;
