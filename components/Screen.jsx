import { View } from 'react-native';

export default function Screen({ children }) {
	return <View className='bg-black flex-1 px-3'>{children}</View>;
}
