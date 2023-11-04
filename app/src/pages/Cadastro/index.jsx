import { ScrollView, StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#71a42a',
  },
};

export default function Cadastro({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInfo, setErrorInfo] = useState('');

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const signUpUser = () => {
    const userSignUpData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      isManager: false
    };

    const userSignInData = {
      username: username,
      password: password,
    }

    axios.post('http://10.3.116.228:3000/user/create', userSignUpData)
      .then((signUpSuccessResponse) => {
        showToast('Cadastro realizado!');
        console.info(signUpSuccessResponse);

        axios.post('http://10.3.116.228:3000/auth/login', userSignInData)
          .then((signInSuccessResponse) => {
            localStorage.setItem('accessToken', 'Bearer ' + signInSuccessResponse.data)
            navigation.navigate('Main');
          })
          .catch((signInErrorResponse) => {
            console.error(signInErrorResponse)
          });
      })
      .catch((signUpErrorResponse) => {
        setErrorInfo(signUpErrorResponse.response.data.message);
      });
  }

  useEffect(() => {
    if (errorInfo) {
      showErrorToast();
    }
  }, [errorInfo]);

  const showErrorToast = () => {
    if (errorInfo === `Usuário com o e-mail ${email} já existe`) {
      showToast(errorInfo);
    } else if (errorInfo === `Usuário com o username ${username} já existe`) {
      showToast(errorInfo);
    } else if (errorInfo[0] == "password is not strong enough") {
      showToast("Senha não é forte o suficiente");
    } else {
      showToast(errorInfo);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            mode='outlined'
            cancelable='true'
            style={styles.input}
            keyboardType='default'
            label="Primeiro nome"
            outlineColor='#71a42a'
            left={
              <TextInput.Icon
                icon={'account'}
              />
            }
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />

          <TextInput
            mode='outlined'
            cancelable='true'
            style={styles.input}
            keyboardType='default'
            label="Sobrenome"
            outlineColor='#71a42a'
            left={
              <TextInput.Icon
                icon={'account'}
              />
            }
            value={lastName}
            onChangeText={text => setLastName(text)}
          />

          <TextInput
            mode='outlined'
            cancelable='true'
            style={styles.input}
            keyboardType='default'
            label="Username"
            outlineColor='#71a42a'
            left={
              <TextInput.Icon
                icon={'account'}
              />
            }
            value={username}
            onChangeText={text => setUsername(text)}
          />

          <TextInput
            mode='outlined'
            cancelable='true'
            style={styles.input}
            keyboardType='email-address'
            label="E-mail"
            outlineColor='#71a42a'
            left={
              <TextInput.Icon
                icon={'email'}
              />
            }
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            mode='outlined'
            cancelable='true'
            style={styles.input}
            label="Senha"
            secureTextEntry={passwordVisible}
            outlineColor='#71a42a'
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
            <Text>Já possui uma conta?</Text>
            <Button onPress={() => navigation.goBack()}>Faça login</Button>
          </View>

          <Button
            style={styles.button}
            dark='true'
            icon="login"
            mode="contained-tonal"
            onPress={signUpUser}>
            Cadastrar
          </Button>
        </ScrollView>
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
    marginTop: 100,
    marginBottom: 40,
    color: '#71a42a',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  spanContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});