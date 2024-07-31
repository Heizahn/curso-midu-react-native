import { ScrollView, Text } from 'react-native';
import Screen from '../../components/Screen';

export default function About() {
	return (
		<ScrollView className='bg-black'>
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
