import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function InputStatic({
  label,
  type,
  plHolder,
  showIcon = false,
  iconName,
  iconSize,
  geralColor,
}) {
  const dynamicStyles = {
    containerInput: {
      borderColor: geralColor || "#71a42a",
    },
    label: {
      color: geralColor || "#71a42a",
    },
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.label , dynamicStyles.label]}>{label || plHolder}:</Text>
      <View style={[styles.containerInput , dynamicStyles.containerInput]}>
        <TextInput
          style={styles.input}
          placeholder={plHolder}
          keyboardType={type} 
        />
        <TouchableWithoutFeedback style={styles.icon}>
          {showIcon && (
            <FontAwesome name={iconName} size={iconSize} color={geralColor} />
          )}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
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
    fontSize: 20,
    color: "#71a42a",
    fontWeight: "700",
    position: "relative",
    marginLeft: 7,
    padding: "0 3px",
    width: "fit-content",
    marginBottom: 8,
  },
  input: {
    fontSize: 14,
    width: '80%'
  },
});
