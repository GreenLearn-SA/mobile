import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Text } from 'react-native-paper';
import React from 'react';
import Carousel from "../../components/Carousel/carousel";
import ChartScreen from "../../components/ChartScreen";
import ChartLine from "../../components/ChartLine";

export default function Main({ navigation }) {
  const firstName = "Ana";
  const lastName = "Negri";

  const subjects = ["Matemática", "Humanas", "Linguagens", "Natureza"];
  const percentages = [30, 25, 20, 25];

  return (
    <View style={styles.container}>
      <ScrollView>
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

        <View style={styles.space} />

        <View style={styles.chart}>
          <Text style={styles.gradesTitle}>Seu progresso</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollH}
            showsHorizontalScrollIndicator={false}
          >
            <ChartScreen />
            <ChartLine subjects={subjects} percentages={percentages} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    height: 75,
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#71a42a',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
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
  },
  space: {
    marginVertical: 100,
  },
  chart: {
    paddingHorizontal: 20,
  },
  scrollH: {
    gap: 50
  }
});
