import { StyleSheet, View } from "react-native";
import { Appbar, Text } from 'react-native-paper';
import React from 'react';
import Carousel from "../../components/Carousel/carousel";


export default function Main({ navigation }) {
  const firstName = "Ana";
  const lastName = "Negri";

  return (
    <View style={styles.container}>

      <Appbar.Header style={styles.topBar}>
        <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
        <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User', { firstName, lastName })} />
      </Appbar.Header>

      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {firstName}</Text>
      </View>

      <View style={styles.grades}>
        <Text style={styles.gradesTitle}>Minhas Matérias</Text>
        <Carousel navigation={navigation} />
      </View>

      <View style={styles.grades}>
        <Text style={styles.gradesTitle}>Metas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: '#71a42a',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    marginTop: 80,
    paddingHorizontal: 20,

  },
  greeting: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  grades: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  gradesTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
