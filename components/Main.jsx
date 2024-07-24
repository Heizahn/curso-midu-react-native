import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { getLatestGame } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';

export default function Main() {
	const insets = useSafeAreaInsets();
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGame().then((res) => setGames(res));
	}, []);

	return (
		<View
			style={{
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
			}}
		>
			<View style={{ paddingVertical: 12 }}>
				<Logo />
			</View>
			{games.length === 0 ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={games}
					keyExtractor={(item) => item.slug}
					renderItem={({ item, index }) => <AnimatedGameCard item={item} index={index} />}
				/>
			)}
		</View>
	);
}
