import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import Carousel from "../../components/Carousel/carousel";
import ChartScreen from "../../components/ChartScreen";
import ChartLine from "../../components/ChartLine";
import EnemDate from "../../components/EnemDate/EnemDate";
import FabButton from "../../components/Button/FabButton";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (!accessToken) {
          console.error('Access token is missing.');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
        };

        axios.get('http://10.3.117.18:3000/auth/profile', config)
          .then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
          })
          .catch((error) => {
            console.error("Erro ao puxar dados", error);
          });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  // axios.post('http://10.0.0.103:3000/auth/profile', null, config)
  //   .then((profileInfo) => {

  //   })
  //   .catch((signInErrorResponse) => {
  //     console.error(signInErrorResponse);
  //   });

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
          <Text style={styles.greeting}>Olá, {firstName} {lastName}!</Text>
          <EnemDate />
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
            <ChartLine subjects={subjects} percentages={percentages} />
          </ScrollView>
        </View>
      </ScrollView>
      <FabButton
        navigation={navigation}
      />


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
    backgroundColor: '#8DC53D',
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
