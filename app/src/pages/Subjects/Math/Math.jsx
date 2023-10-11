import { StyleSheet, View, Text } from 'react-native';

export default function Math({ navigation }) {
    return (
        <View>
            <Text>Matemática</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})