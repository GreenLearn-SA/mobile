import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Buttons from '../../components/Buttons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <ImageBackground source={require('../../../assets/bg-gl.svg')} resizeMode="cover" style={styles.image}>
        <View style={styles.containerBtn}>
          <Text style={styles.title}>
            Mais que um Aplicativo
          </Text>
          <Text style={styles.nt}>
            Uma maneira prática e organizada de guiar e somar aos seus objetivos acadêmicos.
          </Text>
          <Buttons 
            txt='Começar'
          />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text2}>Bem-Vindo ao</Text>
        <Text style={styles.text}>GreenLearn</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 42,
    lineHeight: 70,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  containerBtn:{
    display: 'flex',
    flexDirection:'column',
    backgroundColor: '#fff',
    height: '50%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15
  },
  containerText:{
    marginBottom: 200,
    display: 'flex',
    alignSelf: 'center',
  },
  title:{
    color:"#71A42A",
    fontWeight: 'bold',
    fontSize: 36,
  },
  nt: {
    color: '#71A42A',
    fontSize: 20,
  }
});