import { ScrollView, StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import React, { useState } from 'react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#71a42a',
  },
};

export default function Cadastro({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const showToast = () => {
    ToastAndroid.show('Cadastro realizado!', ToastAndroid.SHORT);
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
          />

          <TextInput
            mode='outlined'
            cancelable='true'
            style={styles.input}
            label="Senha"
            secureTextEntry={passwordVisible}
            outlineColor='#71a42a'
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
            onPress={() => showToast()}>
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