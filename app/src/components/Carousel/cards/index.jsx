import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, ProgressBar, Text } from 'react-native-paper';

export default function CardC({ titulo, geralColor, progressPercentage }) {
  const LeftContent = props => (
    <Avatar.Icon {...props} icon="book" style={{ backgroundColor: geralColor }} />
  );
  return (
    <Card style={styles.containerCard}>
      <Card.Title
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">{titulo}</Text>
      </Card.Content>
      <Card.Actions style={styles.progressView}>
        <Text style={styles.progressText}>
          Progresso: {Math.round(progressPercentage * 100)}%
        </Text>
        <ProgressBar progress={progressPercentage} color={geralColor} style={styles.progressBar} />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    width: '20%',
    height: 200,
  },
  progressView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  progressText: {
    width: 150,
    marginLeft: 20,
    marginTop: 50,
  },
  progressBar: {
    marginLeft: 26,
    marginTop: 5,
    textAlign: 'center',
    width: 150,
  }
})
