import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import { useEffect, useState } from 'react';
import Home from '../screens/others';
import Register from '../screens/auth/register';
import Restaurants from '../screens/restaurants';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function Navigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        async function getAuthToken() {
            const token = await SecureStore.getItemAsync('token')
            if (token) {
                setIsLoggedIn(true)
            }
        }
        getAuthToken()
    }, [])

    if (!isLoggedIn) return <AuthNavigation />
    return <AppNavigation />
}

export function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator
          initialRouteName="Login"
          >
          <Stack.Screen 
              name="Login"
              component={Login}
              options={{headerShown: false}}
          />

          <Stack.Screen 
              name="Register"
              component={Register}
              options={{headerShown: false}}
          />

          <Stack.Screen
            name="App"
            options={{headerShown: false}}
            component={AppNavigation}
          />

      </Stack.Navigator>
  )
}


export function AppNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
          }}
        >
            <Tab.Screen options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Feather
                        name="home"
                        size={24}
                        color={focused ? 'yellow' : 'grey'}
                    />
                )

            }} name="Home" component={Home} />
            <Tab.Screen name="Restaurants" component={Restaurants} />
        </Tab.Navigator>
    );
}