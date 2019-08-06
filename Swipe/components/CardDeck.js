import React, { Component, useState, useEffect } from "react";
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
} from "react-native";

const APP_SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_SWIPE_THRESHOLD = 0.25 * APP_SCREEN_WIDTH;
const CARD_SWIPE_OUT_DURATION = 250;

const CardDeck = ({
  data,
  renderCard,
  renderNoMoreCards,
  onSwipeLeft = () => {},
  onSwipeRight = () => {}
}) => {
  //set states
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > CARD_SWIPE_THRESHOLD) {
          forceSwipe("right");
        } else if (gesture.dx < -CARD_SWIPE_THRESHOLD) {
          forceSwipe("left");
        } else {
          resetPosition();
        }
      }
    })
  );

  const [position, setPosition] = useState(new Animated.ValueXY());
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   UIManager.setLayoutAnimationEnabledExperimental &&
  //     UIManager.setLayoutAnimationEnabledExperimental(true);
  //   LayoutAnimation.spring();
  // });

  const forceSwipe = direction => {
    console.log("forceSwipe()");
    const x = direction === "right" ? APP_SCREEN_WIDTH : -APP_SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: CARD_SWIPE_OUT_DURATION
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = direction => {
    console.log("onSwipeComplete - index value -start", index);

    const item = data[index];

    //direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    setIndex(prevIndex => prevIndex + 1);
    position.setValue({ x: 0, y: 0 });

    console.log("onSwipeComplete - index value -end", index);
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-APP_SCREEN_WIDTH * 1.5, 0, APP_SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"]
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  };

  const renderCards = () => {
    console.log("index in renderCard", index);
    if (index >= data.length) {
      return renderNoMoreCards();
    }

    return data.map((item, i) => {
      if (i < index) {
        return null;
      }

      if (i === index) {
        return (
          <Animated.View
            key={item.id}
            style={[getCardStyle()]} //styles.cardStyle]} //{ zIndex: 99 }]}
            {...panResponder.panHandlers}
          >
            {renderCard(item)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={item.id}
          //style={[styles.cardStyle, { top: 10 * (i - index), zIndex: 5 }]}
        >
          {renderCard(item)}
        </Animated.View>
      );
    });
    //.reverse();
  };

  return <View>{renderCards()}</View>;
};

const styles = {
  cardStyle: {
    position: "absolute",
    width: APP_SCREEN_WIDTH
  }
};

export default CardDeck;
