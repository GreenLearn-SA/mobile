import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ChartScreen from "../../components/ChartScreen";

export default function Graphs() {
  const subjects = ["Matemática", "Humanas", "Linguagens", "Natureza"];
  const percentages = [30, 25, 20, 25];

  return (
    <View>
      <Text>index</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollH}
        showsHorizontalScrollIndicator={false}
      >
        <ChartScreen />
        <ChartLine subjects={subjects} percentages={percentages} />
      </ScrollView>
    </View>
  );
}
