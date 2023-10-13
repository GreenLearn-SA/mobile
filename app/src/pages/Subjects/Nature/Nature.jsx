import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import biologyData from './Biology.json';
import chemicalData from './Chemical.json';
import physicsData from './Physics.json';

export default function Nature({ navigation }) {
    const [subjectList, setSubjectList] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const loadTasks = (subject) => {
        if (subject === selectedSubject) {
            setSelectedSubject(null);
            setSubjectList([]);
        } else {
            setSelectedSubject(subject);
            switch (subject) {
                case 'biology':
                    setSubjectList(biologyData);
                    break;
                case 'chemical':
                    setSubjectList(chemicalData);
                    break;
                case 'physics':
                    setSubjectList(physicsData);
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
                <Text style={item.completed ? styles.completedText : styles.text}>{item.text}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkButton}>
                <AntDesign
                    name={item.completed ? 'checksquare' : 'checksquareo'}
                    size={24}
                    color="#826FB8"
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Natureza</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                    <AntDesign name="left" size={24} color="#f5f5f5" />
                </TouchableOpacity>
            </View>
            <View style={styles.dropdownContainer}>
                <View style={styles.dropdown}>
                    <TouchableOpacity
                        style={styles.dropdownButton}
                        onPress={() => loadTasks('biology')}
                    >
                        <Text style={styles.dropdownText}>Biologia</Text>
                    </TouchableOpacity>
                    {selectedSubject === 'biology' && (
                        <FlatList
                            data={subjectList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderTaskItem}
                        />
                    )}
                </View>

                <View style={styles.dropdown}>
                    <TouchableOpacity
                        style={styles.dropdownButton}
                        onPress={() => loadTasks('chemical')}
                    >
                        <Text style={styles.dropdownText}>Química</Text>
                    </TouchableOpacity>
                    {selectedSubject === 'chemical' && (
                        <FlatList
                            data={subjectList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderTaskItem}
                        />
                    )}
                </View>

                <View style={styles.dropdown}>
                    <TouchableOpacity
                        style={styles.dropdownButton}
                        onPress={() => loadTasks('physics')}
                    >
                        <Text style={styles.dropdownText}>Física</Text>
                    </TouchableOpacity>
                    {selectedSubject === 'physics' && (
                        <FlatList
                            data={subjectList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderTaskItem}
                        />
                    )}
                </View>

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
        backgroundColor: '#826FB8',
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
        borderColor: '#826FB8',
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
});
