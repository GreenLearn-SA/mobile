import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardC from './cards';
import { useProgress } from '../../../contexts/ProgressContext';

export default function Carousel({ navigation }) {
  const { progress, updateProgress } = useProgress();
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
          progressPercentage={progress}
          onPress={() => navigation.navigate('Math')}
        />

        <CardC
          titulo={'Humanas'}
          geralColor={'#FF8C00'}
          progressPercentage={0.32}
          onPress={() => navigation.navigate('Humans')}
        />

        <CardC
          titulo={'Natureza'}
          geralColor={'#9370DB'}
          progressPercentage={0.29}
          onPress={() => navigation.navigate('Nature')}
        />

        <CardC
          titulo={'Linguagens'}
          geralColor={'#3AA2CE'}
          progressPercentage={0.6}
          onPress={() => navigation.navigate('Languages')}
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
