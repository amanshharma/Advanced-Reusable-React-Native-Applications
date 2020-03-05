import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import avatarImage from "../utils/imgUtil";

import FloatingButton from "../commons/FloatingButton";
import FloatingMenu from "../commons/FloatingMenu";
import HomeButton from "../commons/HomeButton";
import styles from "./Screen1.styles";

export default () => {
  const [showmenu, setShowMenu] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    //In case we want to fetch data from an API
    // async function getDataFromApi() {
    //   try {
    //     let response = await fetch("URL");
    //     let responseJson = await response.json();
    //     setData(responseJson);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    //getDataFromApi();
  }, []);

  const toggle = () => {
    setShowMenu(!showmenu);
  };

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
      <FlatList
        data={data?.leagues}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <HomeButton entry={item.fee} />;
        }}
      />
      <Image
        source={avatarImage("graph")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.floatingBtn}>
        {!!showmenu && (
          <FloatingMenu buttons={["nav1", "nav2", "nav3", "nav4"]} />
        )}
        <FloatingButton source={"navbtn"} onPress={toggle} />
      </View>
    </SafeAreaView>
  );
};
