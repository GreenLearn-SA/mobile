import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Inputs({ label, type, plHolder, showIcon = false, iconColor, iconName, iconSize }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
      >{ label || plHolder }:</Text>
      <TextInput 
        style={styles.input} 
        placeholder={plHolder}
        keyboardType={type} // se o type for pass ele troca o keyboard para numeric e adiciona uma propriedade 
        />
      <TouchableOpacity>
        {showIcon && (
          <FontAwesome
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
          )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    position: 'relative',
    maxWidth: 300,
  },
  label: {
    fontSize: 16, 
    color: '#71a42a',
    fontWeight: '700',
    position: 'relative',
    marginLeft: 7,
    padding: '0 3px',
    width: 'fit-content',
  },
  input: {
    paddingVertical: 11,
    paddingHorizontal: 10,
    fontSize: 12, 
    borderWidth: 2,
    borderColor: '#71a42a',
    borderRadius: 5,
  },
});
