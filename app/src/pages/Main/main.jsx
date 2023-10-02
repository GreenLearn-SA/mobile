import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-paper'
import React from 'react';


export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Button label='Voltar' onPress={() => navigation.goBack()}>
        Volta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});