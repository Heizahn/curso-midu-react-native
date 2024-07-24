import { View, Text } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Detail() {
	const { gameslug } = useLocalSearchParams();

	return (
		<View className='flex-1 justify-start items-center'>
			<Text className='text-white font-bold text-xl mb-6'>
				Detalles del juego de {gameslug}
			</Text>

			<Link href={'/'} className='text-blue-600'>
				Volver
			</Link>
		</View>
	);
}
