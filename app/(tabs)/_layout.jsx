import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#000' },
				tabBarActiveTintColor: '#ffee00',
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <Ionicons name='home' size={32} color={color} />,
				}}
			/>

			<Tabs.Screen
				name='about'
				options={{
					title: 'About',
					tabBarIcon: ({ color }) => (
						<Ionicons name='information-circle' size={32} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
