import { ScrollView, StyleSheet, View, Alert, Image } from "react-native";
import { Appbar, Text, Avatar, TextInput, IconButton, Modal, Provider as PaperProvider, DefaultTheme, Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import mind from './img/mind.png'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#71a42a',
    },
};

export default function User({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    
    useEffect(() => {
        async function fetchData() {
            try {
                const accessToken = await AsyncStorage.getItem('accessToken');
                if (!accessToken) {
                    console.error('Access token is missing.');
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                };

                axios.get('http://10.0.0.103:3000/auth/profile', config)
                    .then((response) => {
                        setFirstName(response.data.firstName);
                        setLastName(response.data.lastName);
                        setUsername(response.data.username);
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

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const avatarLabel = firstName.charAt(0) + lastName.charAt(0);

    async function saveChanges() {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            if (!accessToken) {
                console.error('Access token is missing.');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            };

            const updatedData = {
                firstName: newFirstName,
                lastName: newLastName,
                username: newUsername,
                email: newEmail,
                password: newPassword,
                isManager: false
            };

            axios.patch(`http://10.0.0.103:3000/user/update/${username}`, updatedData, config)
                .then((response) => {
                    console.warn(response);
                })
                .catch((error) => {
                    console.error("Erro ao atualizar informações do usuário", error);
                    console.info(username);
                    console.info(newUsername);
                });
        } catch (error) {
            console.error(error);
        }


    };

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', width: 700, alignSelf: 'center' };

    const showAlert = () =>
        Alert.alert(
            'Atenção',
            'Após a confirmação, suas informações pessoais serão alteradas. \n\nDeseja prosseguir?',
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        setFirstName(newFirstName);
                        setLastName(newLastName);
                        saveChanges();
                    },
                    style: 'default',
                },
                {
                    text: 'Cancelar',
                    onPress: () => Alert.alert('Alterações não salvas'),
                    style: 'cancel',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => Alert.alert('Alterações não salvas'),
            },
        );

    return (
        <PaperProvider theme={theme}>
            <ScrollView style={styles.container}>
                <Appbar.Header style={styles.topBar}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User')} />
                </Appbar.Header>

                <View style={styles.header}>
                    <View style={styles.avatar}>
                        <Avatar.Text size={80} label={avatarLabel} color="#FFF" backgroundColor="#71a42a" />
                    </View>
                    <Text style={styles.greeting}>Olá, {firstName + " " + lastName}</Text>
                </View>

                <View>
                    <Text style={styles.editInfos}>Altere suas informações abaixo</Text>
                    <TextInput
                        mode='outlined'
                        cancelable='true'
                        style={styles.input}
                        label={"Primeiro nome"}
                        value={newFirstName}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setNewFirstName(text)}
                        left={
                            <TextInput.Icon
                                icon={'account'}
                            />
                        }
                    />

                    <TextInput
                        mode='outlined'
                        cancelable='true'
                        style={styles.input}
                        label={"Último nome"}
                        value={newLastName}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setNewLastName(text)}
                        left={
                            <TextInput.Icon
                                icon={'account'}
                            />
                        }
                    />

                    <TextInput
                        mode='outlined'
                        cancelable='true'
                        style={styles.input}
                        label={"Username"}
                        value={newUsername}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setNewUsername(text)}
                        left={
                            <TextInput.Icon
                                icon={'account'}
                            />
                        }
                    />

                    <TextInput
                        mode='outlined'
                        cancelable='true'
                        style={styles.input}
                        label={"E-mail"}
                        value={newEmail}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setNewEmail(text)}
                        left={
                            <TextInput.Icon
                                icon={'email'}
                            />
                        }
                    />

                    <TextInput
                        mode='outlined'
                        cancelable='true'
                        style={styles.input}
                        label={"Senha"}
                        value={newPassword}
                        secureTextEntry={passwordVisible}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setNewPassword(text)}
                        right={
                            <TextInput.Icon
                                icon={passwordVisible ? 'eye-off' : 'eye'}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            />
                        }
                        left={
                            <TextInput.Icon
                                icon={'lock'}
                            />
                        }
                    />

                    <Button mode="contained" style={styles.button} onPress={showAlert}>
                        Salvar
                    </Button>

                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Image
                            style={styles.tinyLogo}
                            source={mind}
                        />
                    </Modal>

                    <Text style={styles.ash2}>Clique no ícone abaixo.</Text>
                    <IconButton style={styles.ash}
                        icon="cursor-default-click"
                        iconColor={"#71a42a"}
                        size={100}
                        onPress={showModal}
                    />
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        paddingTop: 10,
        backgroundColor: '#71a42a',
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
        marginVertical: 30,
    },
    greeting: {
        fontSize: 30,
        textAlign: 'center',
    },
    editInfos: {
        marginTop: 20,
        marginBottom: -10,
        fontSize: 15,
        textAlign: 'center',
    },
    input: {
        marginHorizontal: 50,
        marginVertical: 20,
        outlineColor: '#71a42a'
    },

    button: {
        marginHorizontal: 50,
        marginVertical: 20,
        marginBottom: 50,
        backgroundColor: '#71a42a'
    },
    ash2: {
        alignSelf: 'center',
        marginTop: 50
    },
    ash: {
        alignSelf: 'center',
        marginBottom: 50
    }
});
