import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Information from './src/screens/Information';
import Sponsoring from './src/screens/Sponsoring';
import ProductInfo from './src/screens/ProductInfo';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={Information} />
        <Stack.Screen name="Spon" component={Sponsoring} />
        <Stack.Screen name="Products" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;