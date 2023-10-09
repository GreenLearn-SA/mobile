import { StyleSheet, View, ViewBase } from "react-native";
import { TextInput, Button, Text, Provider as PaperProvider, DefaultTheme, IconButton } from 'react-native-paper';
import React from 'react';
import Carousel from "../../components/Carousel/carousel";


export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <IconButton 
          icon="cog"
          size={35}
          onPress={()=> navigation.navigate('Home')}
        />
      </View>
      <View>
        <Text>
          Olá vitinho !
        </Text>
      </View>
      <View>
        <Text>
          Minhas Materias
        </Text>
        <Carousel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});