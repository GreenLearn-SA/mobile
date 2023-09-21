import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Inputs from '../../components/Inputs/input'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Inputs
        plHolder='Nome'
        type='pass'
        showIcon={true}
        iconName="chevron-up"
        iconSize={20}
        iconColor="#71a42a"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center', 
    alignItems:"center"
  }
})