import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, ProgressBar, Text } from "react-native-paper";
import { useProgress } from "../../../../ProgressContext";

export default function CardC({ titulo, geralColor, onPress }) {
  const progresso = useProgress();
  const LeftContent = (props) => (
    <Avatar.Icon
      {...props}
      icon="book"
      style={{ backgroundColor: geralColor }}
    />
  )
  return (
    <Card style={styles.containerCard}>
      <TouchableOpacity onPress={onPress}>
        <Card.Title left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">{titulo}</Text>
        </Card.Content>

        <Card.Actions style={styles.progressView}>
        <Text>Progresso na outra tela: {}%</Text>
          <ProgressBar
            progress={0.67}
            color={geralColor}
            style={styles.progressBar}
          />
        </Card.Actions>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    width: "20%",
    height: 200,
  },
  progressView: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  progressText: {
    width: 150,
    marginLeft: 20,
    marginTop: 50,
  },
  progressBar: {
    marginLeft: 26,
    marginTop: 5,
    textAlign: "center",
    width: 150,
  },
});
