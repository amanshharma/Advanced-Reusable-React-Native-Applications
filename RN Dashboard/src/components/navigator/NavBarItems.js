import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./NavBarItems.styles";

const NavBarItems = ({ navigationProps, source, isHome }) => {
  const toggleDrawer = () => {
    navigationProps.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      {source.map(src => {
        return (
          <TouchableOpacity
            onPress={!!isHome ? toggleDrawer : () => {}}
            key={src}
          >
            <Image
              source={avatarImage(src)}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavBarItems;
