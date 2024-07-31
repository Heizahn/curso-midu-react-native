import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Screen from '../components/Screen';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { getGameDetail } from '../lib/metacritic';
import Score from '../components/Score';

export default function Detail() {
	const { gameslug } = useLocalSearchParams();
	const [gameInfo, setGameInfo] = useState(null);

	useEffect(() => {
		if (gameslug) {
			getGameDetail(gameslug).then(setGameInfo);
		}
	}, [gameslug, gameInfo]);

	return (
		<Screen>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: '#ffee00',
					},
					headerTintColor: 'black',
					headerLeft: () => {},
					headerRight: () => {},
					headerTitle: gameInfo !== null ? gameInfo.title : '',
				}}
			/>
			<View>
				{gameInfo === null ? (
					<ActivityIndicator color={'white'} size={'large'} />
				) : (
					<ScrollView>
						<View className='justify-center items-center text-center'>
							<Image
								className='my-4 rounded'
								source={{ uri: gameInfo.img }}
								style={{ width: 214, height: 294 }}
							/>
							<Score score={gameInfo.score} maxScore={100} />
							<Text className='text-white text-center font-bold text-xl mt-3 mb-6'>
								{gameInfo.title}
							</Text>
							<Text className='text-white/70 text-justify text-bases mb-6'>
								{gameInfo.description}
							</Text>
						</View>
					</ScrollView>
				)}
			</View>
		</Screen>
	);
}
