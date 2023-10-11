import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Nature({ navigation }) {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Tarefa 1', completed: false },
        { id: 2, text: 'Tarefa 2', completed: true },
        { id: 3, text: 'Tarefa 3', completed: false },
    ]);

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Natureza</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                    <AntDesign name="left" size={24} color="#f5f5f5" />
                </TouchableOpacity>
            </View>
            <View style={styles.taskContainer}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.taskItem}>
                            <View style={styles.taskTextContainer}>
                                <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                                    {item.text}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkButton}>
                                {item.completed ? (
                                    <AntDesign name="checksquare" size={24} color="#826FB8" />
                                ) : (
                                    <AntDesign name="checksquareo" size={24} color="#826FB8" />
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
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#826FB8',
        paddingTop: '5%',
        paddingBottom: '5%',
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
    taskContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#826FB8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    taskTextContainer: {
        flex: 1,
    },
    checkButton: {
        marginLeft: 10,
    },
});
