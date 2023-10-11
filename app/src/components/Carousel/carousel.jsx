import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardC from './cards';

export default function Carousel({ navigation }) {
  return (
    <View style={styles.flexContainer}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.flexContainer}
        showsHorizontalScrollIndicator={false}
      >
        <CardC
          titulo={'Matemática'}
          geralColor={'#ff5454'}
          progressPercentage={0.67}
        />

        <CardC
          titulo={'Humanas'}
          geralColor={'#FF8C00'}
          progressPercentage={0.32}
        />

        <CardC
          titulo={'Natureza'}
          geralColor={'#9370DB'}
          progressPercentage={0.29}
        />

        <CardC
          titulo={'Linguagens'}
          geralColor={'#ffef61'}
          progressPercentage={0.6}
        />
      </ScrollView>
    </View >


  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
    height: 250
  },
})
