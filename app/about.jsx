import { ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Screen from '../components/Screen';
export default function About() {
	return (
		<ScrollView className='bg-black'>
			<Stack.Screen
				options={{
					headerLeft: () => {},
					headerTitle: () => <Text className='text-white font-bold text-2xl'>About</Text>,
					headerRight: () => {},
				}}
			/>

			<Screen>
				<Text className='text-white'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id optio alias
					perspiciatis quisquam doloribus fugiat ad, labore laboriosam ab possimus tempora
					inventore nam iusto temporibus, animi quidem! Ratione, tempora!
				</Text>
			</Screen>
		</ScrollView>
	);
}
