import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, ProgressBar, Text } from "react-native-paper";

export default function CardC({ icon, titulo, geralColor, progressPercentage, onPress }) {
  const progress = Math.round(progressPercentage);

  const LeftContent = (props) => (
    <Avatar.Icon
      {...props}
      icon={icon}
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
          <Text style={styles.progressText}>Progresso: {progressPercentage}%</Text>
          <ProgressBar
            progress={progress / 100}
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
    width: 170,
    height: 200,
  },
  progressView: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  progressText: {
    width: 150,
    marginLeft: 20,
    marginTop: 40,
  },
  progressBar: {
    marginLeft: 0,
    marginTop: 5,
    textAlign: "center",
    width: 150,
  },
});
