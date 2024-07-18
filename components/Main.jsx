import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getLatestGame } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Main() {
	const insets = useSafeAreaInsets();
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGame().then((res) => setGames(res));
	}, []);
	return (
		<View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<ScrollView>
				{games.map((game) => (
					<View key={game.slug} style={styles.card}>
						<Image source={{ uri: game.image }} style={styles.image} />
						<Text style={styles.title}>{game.title}</Text>
						<Text style={styles.score}>{game.score}</Text>
						<Text style={styles.description}>{GameDescription(game.description)}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

function GameDescription(description) {
	let newDescription = '';
	for (let i = 0; i < 117; i++) {
		newDescription = newDescription + description[i];
	}

	return newDescription + '...';
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
