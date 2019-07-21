import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";

position = new Animated.ValueXY(0, 0);
Animated.spring(position, { toValue: { x: 200, y: 500 } }).start();

const Ball = () => {
  const a = 1;
  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue"
  }
});

export default Ball;
