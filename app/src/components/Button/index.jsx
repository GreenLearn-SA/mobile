import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Buttons({
  navigation,
  txt,
  nav,
  bgColor,
  showIcon,
  iconName,
  iconSize,
  iconColor,
}) {
  const buttonStyles = {
    ...styles.btn,
    backgroundColor: bgColor || styles.btn.backgroundColor,
  };
  return (

    <TouchableOpacity 
      style={buttonStyles}
      onPress={() => navigation.navigate(nav)} 
    >
      <Text style={styles.title}>{txt}</Text>
      {showIcon && (
        <FontAwesome
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    borderRadius: 15,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 35,
    paddingRight: 35,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#71a42a",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.27,
    elevation: 14,
  },

  title: {
    color: "#fff",
    fontSize: 19,
    marginRight: 20,
  },
});
