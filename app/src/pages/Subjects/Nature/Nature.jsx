import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Nature({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                
                <Text style={styles.cardTitle}>
                    Natureza
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                    <AntDesign name="left" size={24} color="#f5f5f5"  />
                </TouchableOpacity>
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
});
