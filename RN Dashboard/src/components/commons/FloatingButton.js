import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import avatarImage from "../utils/imgUtil";
import styles from "./FloatingButton.styles";

const FloatingButton = ({ source, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={avatarImage(source)}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default FloatingButton;
