import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { getLatestGame } from '../lib/metacritic';
import { AnimatedGameCard } from './GameCard';
import Screen from './Screen';
import { Stack } from 'expo-router';

export default function Main() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGame().then((res) => setGames(res));
	}, []);

	return (
		<Screen>
			<Stack.Screen
				options={{
					statusBarStyle: 'light',
					statusBarColor: '#000',
					statusBarTranslucent: true,
				}}
			/>
			<View className='mt-2'>
				{games.length === 0 ? (
					<View className='flex-1 justify-center'>
						<ActivityIndicator />
					</View>
				) : (
					<FlatList
						data={games}
						keyExtractor={(item) => item.slug}
						renderItem={({ item, index }) => (
							<AnimatedGameCard item={item} index={index} />
						)}
					/>
				)}
			</View>
		</Screen>
	);
}
