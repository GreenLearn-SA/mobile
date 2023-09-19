import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Buttons(  props ) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.title}>{props.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 35,
    paddingRight: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71a42a",
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
  },
});
