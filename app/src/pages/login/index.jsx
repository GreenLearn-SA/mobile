import { StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import React, { useState } from 'react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#71a42a',
  },
};

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const signInUser = () => {
    const userSignInData = {
      username: username,
      password: password,
    }

    axios.post('http://10.3.116.228:3000/auth/login', userSignInData)
      .then((signInSuccessResponse) => {
        localStorage.setItem('accessToken', 'Bearer ' + signInSuccessResponse.data)
        showToast('Login realizado!')
        navigation.navigate('Main');
      })
      .catch((signInErrorResponse) => {
        console.error(signInErrorResponse);
      });
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          keyboardType='default'
          label="E-mail"
          outlineColor='#71a42a'
          selectionColor='#71a42a'
          value={username}
          onChangeText={text => setUsername(text)}
          left={
            <TextInput.Icon
              icon={'email'}
            />
          }
        />

        <TextInput
          mode='outlined'
          cancelable='true'
          style={styles.input}
          label="Senha"
          secureTextEntry={passwordVisible}
          outlineColor='#71a42a'
          selectionColor='#71a42a'
          value={password}
          onChangeText={text => setPassword(text)}
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          left={
            <TextInput.Icon
              icon={'lock'}
            />
          }
        />

        <View style={styles.spanContainer}>
          <Text>Não possui uma conta?</Text>
          <Button onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Button>
        </View>


        <Button
          style={styles.button}
          dark='true'
          icon="login"
          mode="contained-tonal"
          onPress={signInUser}>
          Entrar
        </Button>
      </View >
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 50,
    marginVertical: 20,
    outlineColor: '#71a42a'
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 6,
    backgroundColor: '#71a42a'
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    marginBottom: 50,
    color: '#71a42a',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  spanContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});








