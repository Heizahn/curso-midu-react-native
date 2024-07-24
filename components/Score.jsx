import { View, Text } from 'react-native';

export default function Score({ score, maxScore }) {
	const getColor = () => {
		const percentage = (score / maxScore) * 100;

		if (percentage < 50) return 'bg-red-700';
		if (percentage < 75) return 'bg-yellow-600';

		return 'bg-green-700';
	};

	const bgScore = getColor();
	return (
		<View className={`${bgScore} w-8 h-8 rounded-full justify-center items-center `}>
			<Text className='text-lg font-bold text-white '>{score}</Text>
		</View>
	);
}
