export default avatarImage = val => {
  switch (val) {
    case "nav3":
      return require("../../../assets/nav3.png");
    case "nav4":
      return require("../../../assets/nav4.png");
    case "navbtn":
      return require("../../../assets/navbtn.png");
    case "nav2":
      return require("../../../assets/nav2.png");
    case "nav1":
      return require("../../../assets/sn1.png");
    case "Bell":
      return require("../../../assets/Bell.png");
    case "chat":
      return require("../../../assets/chat.png");
    case "graph":
      return require("../../../assets/graph.gif");
    default:
      return require("../../../assets/profile.png");
  }
};
