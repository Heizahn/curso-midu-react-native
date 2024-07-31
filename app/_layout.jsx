import { View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Logo } from '../components/Logo';

export default function Layout() {
	return (
		<View className='flex-1'>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: '#000',
					},

					headerTintColor: '#fff',
					headerTitle: '',
					headerLeft: () => <Logo />,
					headerRight: () => (
						<Link href={'/about'} className='text-blue-600 font-bold text-xl'>
							Ir a about
						</Link>
					),
				}}
			/>
		</View>
	);
}
