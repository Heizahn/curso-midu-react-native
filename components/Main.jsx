import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { getLatestGame } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
import { Link } from 'expo-router';

export default function Main() {
	const insets = useSafeAreaInsets();
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGame().then((res) => setGames(res));
	}, []);

	return (
		<View>
			<View className='flex-row items-center justify-between w-[100%] '>
				<Logo />
				<Link href={'/about'} className='text-blue-600 font-bold text-xl'>
					Ir a about
				</Link>
			</View>
			<View className='mt-3 pb-20'>
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
		</View>
	);
}
