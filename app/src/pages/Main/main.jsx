import { StyleSheet, View } from "react-native";
import { Appbar, IconButton, Text } from 'react-native-paper';
import React from 'react';
import Carousel from "../../components/Carousel/carousel";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.topBar}>
        <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
        <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User')} />
      </Appbar.Header>

      <View style={styles.header}>
        <Text>Olá vitinho!</Text>
      </View>

      <View style={styles.materias}>
        <Text>Minhas Matérias</Text>
        <Carousel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: '#71a42a',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  materias: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
