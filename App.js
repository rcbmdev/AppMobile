import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/HomeScreen';
import MapScreen from './src/MapScreen';
import SavedScreen from './src/SavedScreen';
import SettingsScreen from './src/SettingsScreen';
import InfoScreen from './src/InfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  )
}

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
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            }else if (route.name === 'Saved') {
              iconName = focused ? 'ios-save' : 'ios-save-outline';
            }else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Ionicons name={iconName} size={26} color="white" />;
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'green',
            padding: 10,
            position: 'absolute',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,

          }
        })}
      >
        <Tab.Screen name="Home" component={HomeStack}/>
         <Tab.Screen name="Map" component={MapScreen}/>
        <Tab.Screen name="Saved" component={SavedScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
