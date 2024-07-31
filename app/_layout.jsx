import { Stack } from 'expo-router';
import { Logo } from '../components/Logo';

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerLeft: () => <Logo />,
				headerStyle: { backgroundColor: '#000' },
				title: '',
				statusBarColor: '#000',
			}}
		>
			<Stack.Screen name='(tabs)' />
		</Stack>
	);
}
