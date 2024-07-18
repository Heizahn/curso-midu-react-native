import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getLatestGame } from './lib/metacritic';

export default function App() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGame().then((res) => setGames(res));
	}, []);
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		padding: 10,
	},
});
