import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function CardC({ titulo, geralColor }) {
  const LeftContent = props => (
    <Avatar.Icon {...props} icon="trello" style={{ backgroundColor: geralColor }} />
  );
  return (
    <Card style={styles.containerCard}>
      <Card.Title
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">{titulo}</Text>
      </Card.Content>
      <Card.Actions style={styles.progressText}>
        <Text style={styles.progressText}>
          Progresso: 62%
        </Text>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    width: '20%',
    height: 200,
  },
  progressText: {
    width: 150,
    marginLeft: 25
  },
})
