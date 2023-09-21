import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
export default function ClickInput({
  label,
  type,
  plHolder,
  showIcon = false,
  iconColor,
  iconName,
  iconSize,
  navigation,
  nav,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label || plHolder}:</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder={plHolder}
          keyboardType={type}
        />
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate(nav)}>
          {showIcon && (
            <FontAwesome name={iconName} size={iconSize} color={iconColor} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    position: "relative",
    maxWidth: 300,
  },
  containerInput:{
    display: 'flex',
    width:'100%',
    flexDirection: 'row',
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "#71a42a",
    borderRadius: 5,
    justifyContent: 'space-between'
  },
  icon:{
    display:"flex" ,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%'
  },
  label: {
    fontSize: 16,
    color: "#71a42a",
    fontWeight: "700",
    position: "relative",
    marginLeft: 7,
    padding: "0 3px",
    width: "fit-content",
  },
  input: {
    fontSize: 12,
    width: '80%'
  },
});