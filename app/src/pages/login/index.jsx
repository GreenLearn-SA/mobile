import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputStatic from '../../components/Inputs/static-input'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <InputStatic
        plHolder='login'
        showIcon={true}
        iconName="chevron-up"
        iconSize={20}
        geralColor='#71a42a'
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