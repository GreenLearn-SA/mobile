import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FabButton() {
	const [primeiroIcon] = useState(new Animated.Value(40));
	const [segundoIcon] = useState(new Animated.Value(40));
	const [terceiroIcon] = useState(new Animated.Value(40));

	const [pop , setPop] = useState(false)

	const popIn = () =>{
		setPop(true);
		Animated.timing(primeiroIcon, {
			toValue: 130,
			duration: 500,
			useNativeDriver: false,
		}).start();
		Animated.timing(segundoIcon, {
			toValue: 110,
			duration: 500,
			useNativeDriver: false,
		}).start();
		Animated.timing(terceiroIcon, {
			toValue: 130,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}

	const popDut = ()=> {
		setPop(false);
		Animated.timing(primeiroIcon, {
			toValue: 40,
			duration: 500,
			useNativeDriver: false,
		}).start();
		Animated.timing(segundoIcon, {
			toValue: 40,
			duration: 500,
			useNativeDriver: false,
		}).start();
		Animated.timing(terceiroIcon, {
			toValue: 40,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}
	return (
		<View style={{
			flex: 1,
		}}>
			<Animated.View style={[styles.btn, {bottom: primeiroIcon}]}>
				<TouchableOpacity>
					<Icon name="user" size={25} color="#fff" />
				</TouchableOpacity>
			</Animated.View>
			<Animated.View style={[styles.btn, {bottom: segundoIcon , right: segundoIcon}]}>
				<TouchableOpacity>
					<Icon name="book" size={25} color="#fff" />
				</TouchableOpacity>
			</Animated.View>
			<Animated.View style={[styles.btn, { right: terceiroIcon}]}>
				<TouchableOpacity>
					<Icon name="user" size={25} color="#fff" />
				</TouchableOpacity>
			</Animated.View>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					pop === false ? popIn() : popDut()
				}}
			>
				<Icon name="plus" size={25} color="#fff" />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#000',
		width: 60,
		height: 60,
		position: 'absolute',
		bottom: 40,
		right: 40,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});