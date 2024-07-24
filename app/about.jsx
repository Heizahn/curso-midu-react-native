import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function About() {
	return (
		<ScrollView>
			<View className='flex-row justify-between mb-8'>
				<Text className='text-white font-bold text-2xl'>About</Text>
				<Link href={'/'} className='text-blue-600 font-bold text-xl'>
					Ir a Inicio
				</Link>
			</View>

			<Text className='text-white'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id optio alias
				perspiciatis quisquam doloribus fugiat ad, labore laboriosam ab possimus tempora
				inventore nam iusto temporibus, animi quidem! Ratione, tempora!
			</Text>
		</ScrollView>
	);
}
