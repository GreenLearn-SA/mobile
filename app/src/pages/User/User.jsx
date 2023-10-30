import { ScrollView, StyleSheet, View, Alert, Image } from "react-native";
import { Appbar, Text, Avatar, TextInput, IconButton, Modal, Provider as PaperProvider, DefaultTheme, Button } from 'react-native-paper';
import React, { useState } from 'react';
import mind from './img/mind.png'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#71a42a',
    },
};

export default function User({ navigation, route }) {
    const { firstName, lastName } = route.params;
    const avatarLabel = firstName.charAt(0) + lastName.charAt(0);

    const [passwordVisible, setPasswordVisible] = useState(true);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [email, setEmail] = useState("ananegri@proflinda.com");
    const [username, setUsername] = useState("AnaNegriDogLover");
    const [password, setPassword] = useState("amoDogs3C");

    //*Modal
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
                    onPress: () => Alert.alert('Informações atualizadas com sucesso'),
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
                    <TextInput
                        mode='outlined'
                        cancelable='true'
                        style={styles.input}
                        label={"Primeiro nome"}
                        value={newFirstName}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setUsername(text)}
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
                        onChangeText={text => setUsername(text)}
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
                        value={username}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setUsername(text)}
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
                        value={email}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setUsername(text)}
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
                        value={password}
                        secureTextEntry={passwordVisible}
                        outlineColor='#71a42a'
                        selectionColor='#71a42a'
                        onChangeText={text => setPassword(text)}
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
