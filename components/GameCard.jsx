import { StyleSheet, View, Image, Text, Animated, Pressable } from 'react-native';
import { useEffect, useRef } from 'react';
import Score from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

export function GameCard({ item }) {
	const StyledPressable = styled(Pressable);
	const titleLength = (title) => {
		if (title.length > 24) return 'py-0';
		return 'py-3';
	};
	return (
		<Link asChild href={`/${item.slug}`}>
			<StyledPressable className='bg-slate-800/70 rounded-xl mb-6 px-2 py-2'>
				<View className={`flex-row items-center ${titleLength(item.title)} gap-2`}>
					<Image source={{ uri: item.image }} style={styles.image} />
					<View className='px-2 flex-shrink'>
						<Text className='text-white font-bold p-2 text-lg'>{item.title}</Text>
						<Score score={item.score} maxScore={100} />
						<Text className='mt-2 flex-shrink-0' style={styles.description}>
							{item.description.slice(0, 100)}...
						</Text>
					</View>
				</View>
			</StyledPressable>
		</Link>
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
