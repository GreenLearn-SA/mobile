import { StyleSheet, View } from "react-native";
import { Appbar, Text } from 'react-native-paper';
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
        <Text style={styles.greeting}>Olá, Vitor!</Text>
      </View>

      <View style={styles.grades}>
        <Text style={styles.gradesTitle}>Minhas Matérias</Text>
        <Carousel navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: '#b3e66c',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
  },
  header: {
    marginTop: 80,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 30,
    textAlign: 'center',

  },
  grades: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  gradesTitle: {
    fontSize: 30,
  }
});
