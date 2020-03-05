import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", margin: 15 },
  floatingBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
