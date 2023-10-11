import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function User({ navigation }) {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.topBar}>
                <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
                <Appbar.Action icon="account-cog" onPress={() => navigation.navigate('User')} />
            </Appbar.Header>
            <Text>EE</Text>
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
    },
})