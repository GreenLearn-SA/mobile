import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useProgress } from "../../../../contexts/ProgressContext";
import { AntDesign } from "@expo/vector-icons";
import subjects from "./Math.json";

export default function Math({ navigation }) {
    const [subjectList, setSubjectList] = useState(subjects);
    const { progress, updateProgress } = useProgress(); // Obtenha progress e updateProgress do contexto
  
    useEffect(() => {
      // Calcula o progresso total
      const completedTasks = subjectList.filter((subject) => subject.completed);
      const totalTasks = subjectList.length;
      const totalProgress = (completedTasks.length / totalTasks) * 100;
      updateProgress(subjectList); // Atualize o progresso no contexto
    }, [subjectList]);
  
    const toggleSubject = (subjectId) => {
      setSubjectList((prevSubjects) =>
        prevSubjects.map((subject) =>
          subject.id === subjectId
            ? { ...subject, completed: !subject.completed }
            : subject
        )
      );
    };
    
  
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Matemática</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}
          >
            <AntDesign name="left" size={24} color="#f5f5f5" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.taskContainer}>
          <Text style={styles.progressText}>
            Progresso: {progress.toFixed(2)}%
          </Text>
          <View style={styles.progressBar}>
            <View
              style={{
                width: `${progress}%`,
                backgroundColor: "#ff5454",
                height: 10,
              }}
            />
          </View>
          <FlatList
            data={subjectList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <View style={styles.taskTextContainer}>
                  <Text
                    style={{
                      textDecorationLine: item.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => toggleSubject(item.id)}
                  style={styles.checkButton}
                >
                  {item.completed ? (
                    <AntDesign name="checksquare" size={24} color="#ff5454" />
                  ) : (
                    <AntDesign name="checksquareo" size={24} color="#ff5454" />
                  )}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#ff5454",
    paddingTop: "2%",
    paddingBottom: "2%",
    height: "20%",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
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
  taskContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#ff5454",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 55,
    marginBottom: 20,
  },
  taskTextContainer: {
    flex: 1,
  },
  checkButton: {
    marginLeft: 10,
  },
});
