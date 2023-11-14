import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const EnemDate = () => {
    const enemDate = new Date('2023-12-07');
    const currentDate = new Date();

    const diferencaMili = enemDate - currentDate;
    const diaEmMili = 1000 * 60 * 60 * 24;
    const diferencaEmDias = Math.ceil(diferencaMili / diaEmMili);

    const redirectToGovPage = () => {
        Linking.openURL('https://www.gov.br/inep/pt-br/assuntos/noticias/enem');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={redirectToGovPage} style={styles.button}>
                <Text style={styles.buttonText}>
                    Faltam {diferencaEmDias} dias para o fim das aulas
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: -50,
        backgroundColor: '#8DC53D',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
};

export default EnemDate;
