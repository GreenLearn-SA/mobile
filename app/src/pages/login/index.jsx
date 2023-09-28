import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Button , TextInput } from "react-native-paper";

export default function Login({navigation}) {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}></View>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Nome"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputs}
          mode="outlined"
          label="Senha"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button
          mode="outlined"
          textColor="#71a42a"
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}
          >
          Logar
        </Button>
      </View>
      <View style={styles.cadastro}>
        <Pressable onPress={() => navigation.navigate('Cadastro')}>
          <Text>Não possui cadastro ? Clique aqui e faça</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  btn:{
    borderColor: '#71a42a',
    paddingHorizontal:30,
  },
})