import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardC from './cards';

export default function Carousel({ navigation }) {
  return (
    <View style={styles.flexContainer}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.flexContainer}
        showsHorizontalScrollIndicator={true}
      >
        <CardC
          titulo={'Matemática'}
          geralColor={'red'}
          onPress={() => navigation.navigate('Home')}
        />

        <CardC
          titulo={'Ciências Humanas'}
          geralColor={'orange'}
        />

        <CardC
          titulo={'Ciências da Natureza'}
          geralColor={'purple'}
        />

        <CardC
          titulo={'Linguagens'}
          geralColor={'yellow'}
        />
      </ScrollView>
    </View >


  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    gap: 20,
    marginLeft: 10,
  },
})
