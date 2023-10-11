import { StyleSheet, View } from "react-native";
import { Appbar, Text, Avatar } from 'react-native-paper';
import React from 'react';

export default function User({ navigation, route }) {
    const { firstName, lastName } = route.params;

    const avatarLabel = firstName.charAt(0) + lastName.charAt(0);

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.topBar}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User')} />
            </Appbar.Header>

            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Avatar.Text size={80} label={avatarLabel} />
                </View>
                <Text style={styles.greeting}>Olá, {firstName + " " + lastName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: '#b3e66c',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        elevation: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    header: {
        marginTop: 80,
        paddingHorizontal: 20,
    },
    avatar: {
        alignItems: 'center',
        marginVertical: 30
    },
    greeting: {
        fontSize: 30,
        textAlign: 'center',

    },
});
