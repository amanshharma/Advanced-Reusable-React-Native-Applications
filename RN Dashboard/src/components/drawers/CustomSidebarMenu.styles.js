import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  container: { width: "100%", flex: 1 },
  logoContainer: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1F2D"
  },
  drawerBtnStl: { marginHorizontal: 20, paddingVertical: 10 },
  text: { color: "#fff" },
  lastButton: {
    position: "absolute",
    bottom: 10,
    borderBottomWidth: 0
  },
  image: { width: 60, height: 60 }
});
