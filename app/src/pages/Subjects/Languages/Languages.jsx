import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import subjects from './Languages.json'; 

export default function Languages({ navigation }) {
    const [subjectList, setSubjectList] = useState(subjects);

    const toggleSubject = (subjectId) => {
        setSubjectList((prevSubjects) =>
            prevSubjects.map((subject) =>
                subject.id === subjectId ? { ...subject, completed: !subject.completed } : subject
            )
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Linguagens</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                    <AntDesign name="left" size={24} color="#f5f5f5" />
                </TouchableOpacity>
            </View>
            <View style={styles.taskContainer}>
                <FlatList
                    data={subjectList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.taskItem}>
                            <View style={styles.taskTextContainer}>
                                <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                                    {item.text}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => toggleSubject(item.id)} style={styles.checkButton}>
                                {item.completed ? (
                                    <AntDesign name="checksquare" size={24} color="#3AA2CE" />
                                ) : (
                                    <AntDesign name="checksquareo" size={24} color="#3AA2CE" />
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
        backgroundColor: '#3AA2CE',
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
        borderColor: '#3AA2CE',
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
