//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import DrawerButton from "../commons/DrawerButton";
import avtarImage from "../utils/imgUtil";
import styles from "./CustomSidebarMenu.styles";

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();

    this.items = [
      {
        id: 0,
        navOptionThumb: "md-home",
        navOptionName: "Home",
        screenToNavigate: "NavScreen1"
      },
      {
        id: 1,
        navOptionThumb: "ios-airplane",
        navOptionName: "Page 1",
        screenToNavigate: "NavScreen2"
      },
      {
        id: 2,

        navOptionThumb: "ios-aperture",
        navOptionName: "Page 2",
        screenToNavigate: "NavScreen3"
      },
      {
        id: 3,

        navOptionThumb: "ios-apps",
        navOptionName: "Page 3",
        screenToNavigate: "NavScreen3"
      },
      {
        id: 4,

        navOptionThumb: "md-call",
        navOptionName: "Page 4",
        screenToNavigate: "NavScreen3"
      },
      {
        id: 5,

        navOptionThumb: "ios-help-circle",
        navOptionName: "FAQ/Help",
        screenToNavigate: "NavScreen3"
      },
      {
        id: 6,

        navOptionThumb: "ios-analytics",
        navOptionName: "Rate the app",
        screenToNavigate: "NavScreen3"
      },
      {
        id: 7,

        navOptionThumb: "ios-log-out",
        navOptionName: "Logout",
        screenToNavigate: "NavScreen3"
      }
    ];
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {this.items.map((item, index) =>
            item.navOptionName === "Home" ? (
              <View style={styles.logoContainer} key={item.id}>
                <Image
                  source={avtarImage("profile")}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.text}>TITLE</Text>
                  <Text style={styles.text}>Subtitle</Text>
                </View>
              </View>
            ) : (
              <DrawerButton
                item={item}
                key={item.id}
                style={[
                  styles.drawerBtnStl,
                  item.id === 7 && styles.lastButton,
                  item.id === 6 && { borderBottomWidth: 0 }
                ]}
                borderBottom={true}
              />
            )
          )}
        </View>
      </View>
    );
  }
}
