import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { List } from "react-native-paper";
import { useProgress } from "../../../../contexts/ProgressContext";

import historyData from "./History.json";
import philosophyData from "./Philosophy.json";
import sociologyData from "./Sociology.json";
import geographyData from "./Geography.json";

export default function Humans({ navigation }) {
  const [expanded, setExpanded] = useState(null);
  const [subjectList, setSubjectList] = useState([]);
  const { progress, updateProgress } = useProgress();

  const loadTasks = (subject) => {
    if (expanded === subject) {
      setExpanded(null);
      setSubjectList([]);
    } else {
      setExpanded(subject);
      switch (subject) {
        case "history":
          setSubjectList(historyData);
          break;
        case "filosofia":
          setSubjectList(philosophyData);
          break;
        case "sociologia":
          setSubjectList(sociologyData);
          break;
        case "geography":
          setSubjectList(geographyData);
          break;
        default:
          setSubjectList([]);
      }
    }
  };
  useEffect(() => {
    // Calcula o progresso total
    const completedTasks = subjectList.filter((subject) => subject.completed);
    const totalTasks = subjectList.length;
    const totalProgress = (completedTasks.length / totalTasks) * 100;
    updateProgress(subjectList); // Atualize o progresso no contexto
  }, [subjectList]);

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

      <TouchableOpacity
        onPress={() => toggleTask(item.id)}
        style={styles.checkButton}
      >
        <AntDesign
          name={item.completed ? "checksquare" : "checksquareo"}
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        >
          <AntDesign name="left" size={24} color="#f5f5f5" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <List.Section>
          <List.Accordion
            style={styles.list}
            title="História"
            expanded={expanded === "history"}
            onPress={() => loadTasks("history")}
          >
            <View
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Text style={styles.progressText}>
                Progresso: {progress.toFixed(2)}%
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#C28F42",
                    height: 10,
                  }}
                />
              </View>
            </View>
            <ScrollView horizontal={true}>
              <FlatList
                style={styles.flatList}
                data={subjectList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTaskItem}
              />
            </ScrollView>
          </List.Accordion>
          <List.Accordion
            style={styles.list}
            title="Filosofia"
            expanded={expanded === "filosofia"}
            onPress={() => loadTasks("filosofia")}
          >
            <View
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Text style={styles.progressText}>
                Progresso: {progress.toFixed(2)}%
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#C28F42",
                    height: 10,
                  }}
                />
              </View>
            </View>
            <ScrollView horizontal={true}>
              <FlatList
                style={styles.flatList}
                data={subjectList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTaskItem}
              />
            </ScrollView>
          </List.Accordion>
          <List.Accordion
            style={styles.list}
            title="Sociologia"
            expanded={expanded === "sociologia"}
            onPress={() => loadTasks("sociologia")}
          >
            <View
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Text style={styles.progressText}>
                Progresso: {progress.toFixed(2)}%
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#C28F42",
                    height: 10,
                  }}
                />
              </View>
            </View>
            <ScrollView horizontal={true}>
              <FlatList
                style={styles.flatList}
                data={subjectList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTaskItem}
              />
            </ScrollView>
          </List.Accordion>
          <List.Accordion
            style={styles.list}
            title="Geografia"
            expanded={expanded === "geography"}
            onPress={() => loadTasks("geography")}
          >
            <View
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Text style={styles.progressText}>
                Progresso: {progress.toFixed(2)}%
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#C28F42",
                    height: 10,
                  }}
                />
              </View>
            </View>
            <ScrollView horizontal={true}>
              <FlatList
                style={styles.flatList}
                data={subjectList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTaskItem}
              />
            </ScrollView>
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#EBAB4C",
    paddingTop: "2%",
    paddingBottom: "2%",
    height: "20%",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    width: "90%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  goBackButton: {
    marginLeft: "5%",
  },
  cardTitle: {
    padding: "10%",
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 30,
  },
  subjectItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#C28F42",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  subjectTextContainer: {
    flex: 1,
  },
  text: {
    textDecorationLine: "none",
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  checkButton: {
    marginLeft: 10,
  },
  list: {
    margin: 15,
    borderRadius: 15,
    backgroundColor: "#F8E1BF",
    display: "flex",
  },
  flatList: {
    width: 350,
    marginLeft: 23,
  },
});
