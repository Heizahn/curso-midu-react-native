import { StyleSheet, View, Image, Text, Animated } from 'react-native';
import gameDescription from '../lib/gameDescription';
import { useEffect, useRef } from 'react';

export function AnimatedGameCard({ item, index }) {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			delay: index * 250,
			useNativeDriver: true,
		}).start();
	}, [index, opacity]);

	return (
		<Animated.View style={{ opacity }}>
			<GameCard item={item} />
		</Animated.View>
	);
}
export default function GameCard({ item }) {
	return (
		<View style={styles.card}>
			<Image source={{ uri: item.image }} style={styles.image} />
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.score}>{item.score}</Text>
			<Text style={styles.description}>{gameDescription(item.description)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		marginBottom: 42,
	},

	image: {
		width: 107,
		height: 147,
		borderRadius: 10,
	},

	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
	},

	description: {
		color: '#eee',
		fontSize: 16,
	},

	score: {
		color: 'green',
		fontSize: 22,
		marginBottom: 10,
		fontWeight: 'bold',
	},
});
