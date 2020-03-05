import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./HomeButton.styles";

const HomeButton = ({ onPress, entry }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.entry}>Entry: {entry}</Text>
    </TouchableOpacity>
  );
};

export default HomeButton;
