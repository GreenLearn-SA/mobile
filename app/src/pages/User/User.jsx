import { ScrollView, StyleSheet, View, Alert, Image, ToastAndroid } from "react-native";
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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(true);

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

                axios.get('http://10.3.118.49:3000/auth/profile', config)
                    .then((response) => {
                        setFirstName(response.data.firstName);
                        setLastName(response.data.lastName);
                        setUsername(response.data.username);
                        setEmail(response.data.email);
                        setPassword(response.data.password);
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

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const avatarLabel = firstName.charAt(0) + lastName.charAt(0);

    const [errorInfo, setErrorInfo] = useState('');

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
                firstName: firstName,
                lastName: lastName,
                username: newUsername,
                email: email,
                password: newPassword,
                isManager: false
            };

            axios.patch(`http://10.3.118.49:3000/user/update/${username}`, updatedData, config)
                .then((response) => {
                    console.info(response);
                    showToast("Alterações salvas!")
                    setUsername(newUsername);
                    setPassword(newPassword);
                })
                .catch((error) => {
                    console.error(error.response.data);
                    setErrorInfo(error.response.data.message);
                });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (errorInfo) {
            showErrorToast();
        }
    }, [errorInfo]);

    const showErrorToast = () => {
        if (errorInfo == "Senha incorreta") {
            showToast(errorInfo);
        } else if (errorInfo[0] == "password is not strong enough") {
            showToast("Senha não é forte o suficiente");
        } else {
            showToast(errorInfo);
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
                        saveChanges();
                    },
                    style: 'default',
                },
                {
                    text: 'Cancelar',
                    onPress: () => showToast("Alterações canceladas"),
                    style: 'cancel',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => showToast("Alterações canceladas"),
            },
        );

    const handleSave = () => {
        if (newUsername.trim() === '') {
            showToast('Preencha o campo "Username"');
            return;
        }

        if (newPassword.trim() === '') {
            showToast('Preencha o campo "Senha"');
            return;
        }

        showAlert();
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('accessToken');
            showToast("Saindo...");
            navigation.navigate('Login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    }

    return (
        <PaperProvider theme={theme}>
            <Appbar.Header style={styles.topBar}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User')} />
            </Appbar.Header>

            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Avatar.Text size={80} label={avatarLabel} color="#FFF" backgroundColor="#8DC53D" />
                    <Text style={styles.greeting2}>@{username}</Text>
                </View>
                <Text style={styles.greeting}>Olá, {firstName + " " + lastName}</Text>
            </View>

            <View>
                <Text style={styles.editInfos}>Altere suas informações abaixo</Text>
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
                    label={"Senha"}
                    value={newPassword}
                    outlineColor='#71a42a'
                    selectionColor='#71a42a'
                    secureTextEntry={passwordVisible}
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

                <Button mode="contained" style={styles.button} onPress={handleSave}>
                    Salvar
                </Button>
                <Button mode="contained" style={styles.buttonLogout} onPress={logout}>
                    Sair da conta
                </Button>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        paddingTop: 10,
        backgroundColor: '#8DC53D',
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
    greeting2: {
        marginTop: 15,
        fontSize: 20,
        textAlign: 'center',
    },
    editInfos: {
        marginTop: 20,
        marginBottom: 20,
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
    buttonLogout: {
        marginHorizontal: 50,
        marginTop: -20,
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
