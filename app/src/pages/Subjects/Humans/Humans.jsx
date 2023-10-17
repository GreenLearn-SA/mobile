import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { List } from 'react-native-paper';

import historyData from './History.json';
import philosophyData from './Philosophy.json';
import sociologyData from './Sociology.json';
import geographyData from './Geography.json';

export default function Humans({ navigation }) {
  const [expanded, setExpanded] = useState(null);
  const [subjectList, setSubjectList] = useState([]);

  const loadTasks = (subject) => {
    if (expanded === subject) {
      setExpanded(null);
      setSubjectList([]);
    } else {
      setExpanded(subject);
      switch (subject) {
        case 'history':
          setSubjectList(historyData);
          break;
        case 'filosofia':
          setSubjectList(philosophyData);
          break;
        case 'sociologia':
          setSubjectList(sociologyData);
          break;
        case 'geography':
          setSubjectList(geographyData);
          break;
        default:
          setSubjectList([]);
      }
    }
  };

  const toggleTask = (taskId) => {
    setSubjectList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.subjectItem}>
      <View style={styles.subjectTextContainer}>
        <Text style={item.completed ? styles.completedText : styles.text}>
          {item.text}
        </Text>
      </View>
      <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkButton}>
        <AntDesign
          name={item.completed ? 'checksquare' : 'checksquareo'}
          size={24}
          color="#C28F42"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Humanas</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <AntDesign name="left" size={24} color="#f5f5f5" />
        </TouchableOpacity>
      </View>
      <ScrollView>

      
      <List.Section>
        <List.Accordion style={styles.list}
          title="História"
          expanded={expanded === 'history'}
          onPress={() => loadTasks('history')}
        >
          <FlatList
            data={subjectList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTaskItem}
          />
        </List.Accordion>
        <List.Accordion style={styles.list}
          title="Filosofia"
          expanded={expanded === 'filosofia'}
          onPress={() => loadTasks('filosofia')}
        >
          <FlatList
            data={subjectList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTaskItem}
          />
        </List.Accordion>
        <List.Accordion style={styles.list}
          title="Sociologia"
          expanded={expanded === 'sociologia'}
          onPress={() => loadTasks('sociologia')}
        >
          <FlatList
            data={subjectList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTaskItem}
          />
        </List.Accordion>
        <List.Accordion style={styles.list}
          title="Geografia"
          expanded={expanded === 'geography'}
          onPress={() => loadTasks('geography')}
        >
          <FlatList
            data={subjectList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTaskItem}
          />
        </List.Accordion>
      </List.Section>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#EBAB4C',
        paddingTop: '2%',
        paddingBottom: '2%',
        height: '20%',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    goBackButton: {
        marginLeft: '5%',
    },
    cardTitle: {
        padding: '10%',
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 30,
    },
    dropdownContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    dropdown: {
        marginBottom: 20,
    },
    dropdownButton: {
        backgroundColor: '#C28F42',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    dropdownText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 18,
    },
    subjectItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#C28F42',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    subjectTextContainer: {
        flex: 1,
    },
    text: {
        textDecorationLine: 'none',
    },
    completedText: {
        textDecorationLine: 'line-through',
    },
    checkButton: {
        marginLeft: 10,
    },
    list:{
        margin: 15,
        borderRadius: 15,
        backgroundColor: '#EBAB4C',
    }
});
