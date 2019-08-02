import React, { Component } from "react";
import { View, Text } from "react-native";

const Deck = ({ renderCard, data }) => {
  return <View>{data.map((item, index) => renderCard(item, index))}</View>;
};

export default Deck;
