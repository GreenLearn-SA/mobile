import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Appbar, Text, Checkbox } from "react-native-paper";
import React, { useState, useEffect, useContext } from "react";
import CalendarPage from "../Calendar/CalendarPage";
import Graphs from "../Graphs/index";
import Carousel from "../../components/Carousel/carousel";
import FabButton from "../../components/Button/FabButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import subjects from "./subject.json";
import ChartLine from "../../components/ChartLine";
import { useProgress } from "../../../contexts/MathContext";

export default function Main({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subjectList, setSubjectList] = useState(subjects);
  const { progress } = useProgress();

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        if (!accessToken) {
          console.error("Access token is missing.");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        axios
          .get("http://10.3.118.49:3000/auth/profile", config)
          .then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
          })
          .catch((error) => {
            console.error("Erro ao puxar dados", error);
          });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const toggleSubject = (subjectId) => {
    setSubjectList((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === subjectId
          ? { ...subject, completed: !subject.completed }
          : subject
      )
    );
  };

  const subjectsChart = [
    "Matemática",
    "Humanas",
    "Linguagens",
    "Natureza",
    "Redação",
  ];
  const percentages = [progress, 20, 22, 18, 10];

  return (
    <View style={styles.container}>
      <ScrollView>
      <Appbar.Header style={styles.topBar}>
        <Appbar.Action
          icon="account-cog"
          onPress={() => navigation.navigate("User", { firstName, lastName })}
        />
      </Appbar.Header>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá, {firstName} {lastName}!
        </Text>
        <Text style={styles.wlcm}>Seja bem vindo!</Text>
      </View>

      <View style={styles.grades}>
        <Text style={styles.gradesTitle}>Progresso Semanal</Text>
        <ChartLine percentages={percentages} subjects={subjectsChart} />
      </View>

      <View style={styles.grades}>
        <Text style={styles.gradesTitle}>Minhas Matérias</Text>
        <Carousel navigation={navigation} />
      </View>

      <Text style={styles.objectivesTitle}>Metas</Text>
      <FlatList
        data={subjectList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView >
            <View style={styles.taskItem}>
              <View style={styles.objectivesComponent}>
                <Checkbox
                  style={styles.checkbox}
                  status={item.completed ? "checked" : "unchecked"}
                  onPress={() => toggleSubject(item.id)}
                  color="#4CAF50"
                />
                <Text
                  style={{
                    textDecorationLine: item.completed
                      ? "line-through"
                      : "none",
                    flex: 1,
                    fontSize: 17,
                    color: item.completed ? "#999" : "#000",
                  }}
                >
                  {item.text}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      />

      <FabButton
        style={styles.mainBtn}
        navigation={navigation}
        icon1={"user"}
        iconNav1={"User"}
        icon2={"calendar-o"}
        iconNav2={CalendarPage}
        icon3={"bar-chart"}
        iconNav3={Graphs}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    paddingTop: 10,
    backgroundColor: "#8DC53D",
    justifyContent: "flex-end",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    marginTop: 80,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  greeting: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
    color: "#8DC53D",
  },
  wlcm: {
    fontSize: 22,
  },
  grades: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  gradesTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  space: {
    marginVertical: 100,
  },
  chart: {
    paddingHorizontal: 20,
  },
  scrollH: {
    gap: 50,
  },
  objectives: {
    paddingHorizontal: 20,
  },
  objectivesTitle: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  objectivesComponent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
  checkboxText: {
    fontSize: 16,
  },
  taskItem: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#8DC53D",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 55,
    marginBottom: 20,
    width: "90%",
  },
  taskTextContainer: {
    flex: 1,
  },
  checkButton: {
    marginLeft: 10,
  },
});
