import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTxt}>
        <Text style={styles.txt}>Cadastre-se</Text>
      </View>
      <View style={styles.containerInput}>
        <ScrollView style={styles.scroll}>
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Primeiro nome"
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Último nome"
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Nome de Usuário"
          />
          <TextInput style={styles.input} mode="outlined" placeholder="Email" />
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Senha"
            textColor="#71a42a"
          />
          <Button
            onPress={() => alert("Cadastrado com sucesso")}
            mode="elevated"
            textColor="#71a42a"
            theme={{ colors: { primary: 'green' } }}
          >
            Salvar
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTxt: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerInput: {
    flex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#999",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  scroll: {
    width: "90%",
    height: "100%",
  },
  txt: {
    fontSize: 40,
  },
  input: {
    marginTop: 20,
    width: "100%",
  },
});
