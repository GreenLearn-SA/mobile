import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputStatic from '../../components/Inputs/static-input'
import Icons from '../../components/Icons/icons'

export default function Login() {
  return (
    <View style={styles.container}>
     <View style={styles.containerImage}>

     </View>
      <View style={styles.inputContainer}>
        <InputStatic
          plHolder='Login'
          showIcon={true}
          iconName="user"
          iconSize={20}
          geralColor='#71a42a'
          />
        <InputStatic
          plHolder='Senha'
          showIcon={true}
          iconName="lock"
          iconSize={20}
          geralColor='#71a42a'
          senha
          />
      </View>
      <View>
        <Text>Não possui cadastro ? Clique aqui e faça</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'space-evenly', 
    alignItems:"center"
  },
  inputContainer:{
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    marginBottom: 180
  }
})