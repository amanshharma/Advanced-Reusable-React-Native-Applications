import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import avatarImage from "../utils/imgUtil";
import styles from "./DrawerButton.styles";

const DrawerButton = ({ item, style }) => {
  const { navOptionThumb, navOptionName } = item;
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Ionicons
        name={item.navOptionThumb}
        size={40}
        color="#303548"
        style={styles.image}
      />
      <Text style={styles.text}>{navOptionName}</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
