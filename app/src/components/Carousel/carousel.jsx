import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardC from './cards';
import { useProgress } from "../../../contexts/MathContext";

export default function Carousel({ navigation }) {
  const { progress } = useProgress();
  return (
    <View style={styles.flexContainer}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.flexContainer}
        showsHorizontalScrollIndicator={false}
      >
        <CardC
          icon={'pencil-ruler'}
          titulo={'Matemática'}
          geralColor={'#ff5454'}
          progressPercentage={progress}
          onPress={() => navigation.navigate('Math')}
        />

        <CardC
          icon={'compass'}
          titulo={'Humanas'}
          geralColor={'#FF8C00'}
          progressPercentage={20}
          onPress={() => navigation.navigate('Humans')}
        />

        <CardC
          icon={'atom'}
          titulo={'Natureza'}
          geralColor={'#9370DB'}
          progressPercentage={22}
          onPress={() => navigation.navigate('Nature')}
        />

        <CardC
          icon={'book'}
          titulo={'Linguagens'}
          geralColor={'#3AA2CE'}
          progressPercentage={18}
          onPress={() => navigation.navigate('Languages')}
        />

        <CardC
          icon={'progress-pencil'}
          titulo={'Redação'}
          geralColor={'#89CFFB'}
          progressPercentage={10}
          onPress={() => navigation.navigate('Wording')}
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
