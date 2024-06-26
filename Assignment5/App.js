import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';
import { Ionicons } from '@expo/vector-icons';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'My Cards') {
              iconName = focused ? 'card' : 'card-outline'; // Change these to your desired icons
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline'; // Change these to your desired icons
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3DC2EC',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
        />
        <Tab.Screen 
          name="My Cards" 
          component={MyCards} 
        />
        <Tab.Screen 
          name="Statistics" 
          component={Statistics} 
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
