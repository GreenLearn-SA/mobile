import { StyleSheet, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import CalendarPage from '../Calendar/CalendarPage'
import Graphs from '../Graphs/index';
import Carousel from "../../components/Carousel/carousel";
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

        axios.get('http://10.3.116.89:3000/auth/profile', config)
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



  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.topBar}>
        <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
        <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User', { firstName, lastName })} />
      </Appbar.Header>

      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {firstName} {lastName}!</Text>
      </View>
      <EnemDate />

      <View style={styles.grades}>
        <Text style={styles.gradesTitle}>Minhas Matérias</Text>
        <Carousel navigation={navigation} />
      </View>
      <FabButton
        navigation={navigation}
        icon1={'user'}
        iconNav1={'User'}
        icon2={'calendar-o'}
        iconNav2={CalendarPage}
        icon3={'bar-chart'}
        iconNav3={Graphs}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingTop: 10,
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
