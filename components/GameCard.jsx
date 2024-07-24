import { StyleSheet, View, Image, Text, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import Score from './Score';

export function GameCard({ item }) {
	return (
		<View className='flex-row bg-slate-400/10 rounded-xl p-4 mb-10' key={item.slug}>
			<Image source={{ uri: item.image }} style={styles.image} />
			<View className='px-2'>
				<Text className='text-white font-bold p-2 text-lg'>{item.title}</Text>
				<Score score={item.score} maxScore={100} />
				<Text className='mt-2 flex-shrink-0' style={styles.description}>
					{item.description.slice(0, 100)} ...
				</Text>
			</View>
		</View>
	);
}

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

const styles = StyleSheet.create({
	card: {
		marginBottom: 42,
	},

	image: {
		width: 107,
		height: 147,
		borderRadius: 10,
	},

	description: {
		color: '#eee',
		fontSize: 16,
	},
});
