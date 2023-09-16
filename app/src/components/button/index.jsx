import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function Buttons({ bgColor, ...props }){
  return(
    <TouchableOpacity style={[styles.btn , {bgColor}]}>
      <Text>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btn:{
    borderRadius:15,
    padding: 15, 
    justifyContent:'center', 
    alignItems:"center",
    backgroundColor: 'grey'
  }
})