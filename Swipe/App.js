import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button, Header } from "react-native-elements";
import CardDeck from "./components/CardDeck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

export default (App = () => {
  const renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>Customizable card!!</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="Tap here!!"
        />
      </Card>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card title="Done!">
        <Text style={{ marginBottom: 10 }}>No content left!!</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Swipe Deck", style: { color: "#fff" } }}
      />

      <CardDeck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff"
  }
});
