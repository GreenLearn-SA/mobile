import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Inputs({ label, type }) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="John Doe"
        keyboardType={type} // se o type for pass ele troca o keyboard para numeric e adiciona uma propriedade 
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  input: {
    height: 40,
    with: 120,
    backgroundColor: "#fff",
  },
});
