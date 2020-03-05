import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text
} from "react-native";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import Screen1 from "./src/components/screens/Screen1";
import Screen2 from "./src/components/screens/Screen2";
import Screen3 from "./src/components/screens/Screen3";
import avatarImage from "./src/components/utils/imgUtil";
import CustomSidebarMenu from "./src/components/drawers/CustomSidebarMenu";
import NavBarItems from "./src/components/navigator/NavBarItems";

global.currentScreenIndex = 0;

const NavigatorScreenOne = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: "RN Dashboard",
      headerLeft: (
        <NavBarItems navigationProps={navigation} source={["profile"]} isHome />
      ),
      headerStyle: {
        backgroundColor: "#1C1F2D"
      },
      headerTintColor: "#fff",
      headerRight: (
        <NavBarItems navigationProps={navigation} source={["Bell", "chat"]} />
      )
    })
  }
});

const NavigatorScreenTwo = createStackNavigator({
  Second: {
    screen: () => (
      <View>
        <Text></Text>
      </View>
    ),
    navigationOptions: ({ navigation }) => ({
      title: "Demo Screen 2",
      headerLeft: (
        <NavBarItems navigationProps={navigation} source={["profile"]} />
      ),

      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const NavigatorScreenThree = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: "Demo Screen 3",
      headerLeft: (
        <NavBarItems navigationProps={navigation} source={["profile"]} />
      ),
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const DrawerNavigatorMain = createDrawerNavigator(
  {
    NavScreen1: {
      screen: NavigatorScreenOne,
      navigationOptions: {
        drawerLabel: "Demo Screen 1"
      }
    },
    NavScreen2: {
      screen: NavigatorScreenTwo,
      navigationOptions: {
        drawerLabel: "Demo Screen 2"
      }
    },
    NavScreen3: {
      screen: NavigatorScreenThree,
      navigationOptions: {
        drawerLabel: "Demo Screen 3"
      }
    }
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerWidth: Dimensions.get("window").width - 130
  }
);
export default createAppContainer(DrawerNavigatorMain);
