import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";
import ChartScreen from "../../components/ChartScreen";
import ChartLine from "../../components/ChartLine";

export default function Graphs() {
  const subjects = ["Matemática", "Humanas", "Linguagens", "Natureza"];
  const percentages = [30, 25, 20, 25];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  scrollH: {
    flexDirection: 'row', // Horizontal scrolling
    alignItems: 'center', // Align items in the center vertically
    paddingVertical: 10, // Adjust as needed
  },
});
