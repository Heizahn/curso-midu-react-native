import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
	return (
		<View className='flex-1 bg-black px-3 pt-10 pb-2 items-center'>
			<Slot />
		</View>
	);
}
