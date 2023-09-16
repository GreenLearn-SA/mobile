import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Buttons from './src/components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <ImageBackground source={require('./assets/adaptive-icon.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.containerBtn}>
          <Text style={styles.title}>
            Mais que um Aplicativo.
          </Text>
          <Text style={styles.nt}>
            Uma maneira prática e organizada de guiar e somar aos seus objetivos acadêmicos.
          </Text>
          <Buttons 
            text = 'começar'
            bgColor = 'blue'
          />
      </View>
      <Text style={styles.text}>Bem Vindo</Text>
        <Text style={styles.text}>GrennLearn</Text>
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
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerBtn:{
    display: 'flex',
    flexDirection:'column',
    backgroundColor: '#000',
    height: '50%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'

  }
});
