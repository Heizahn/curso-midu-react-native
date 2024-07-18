import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar style='auto' />

				<Main />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 12,
	},
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
