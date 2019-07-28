import React, { Component } from "react";
import { View, Text } from "react-native";

const Deck = ({ renderCard, data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={`${data.id}_${index}`}>{renderCard(item)}</View>
      ))}
    </View>
  );
};

export default Deck;
