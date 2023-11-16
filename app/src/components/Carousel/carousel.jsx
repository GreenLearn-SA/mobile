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
          progressPercentage={32}
          onPress={() => navigation.navigate('Humans')}
        />

        <CardC
          icon={'atom'}
          titulo={'Natureza'}
          geralColor={'#9370DB'}
          progressPercentage={77}
          onPress={() => navigation.navigate('Nature')}
        />

        <CardC
          icon={'book-education-outline'}
          titulo={'Linguagens'}
          geralColor={'#3AA2CE'}
          progressPercentage={50}
          onPress={() => navigation.navigate('Languages')}
        />

        <CardC
          icon={'progress-pencil'}
          titulo={'Redação'}
          geralColor={'#89CFFB'}
<<<<<<< HEAD
          progressPercentage={50}
          onPress={() => navigation.navigate('Wording')}
=======
          progressPercentage={97}
          onPress={() => navigation.navigate('Languages')}
>>>>>>> ddf5677c6976bc046cd522f859c4809b42f03746
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
