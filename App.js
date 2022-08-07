import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from "./views/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from "./views/MapScreen";



export default function App() {
  const Stack = createStackNavigator();
  return (
    //initial setup of Redux, and sync of data to store
    <Provider store= {store}>
      <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator>
      <Stack.Screen 
      name='HomeScreen' 
      component={HomeScreen}
      options={{
        headerShown: false,
      }} />
      <Stack.Screen 
      name='MapScreen' 
      component={MapScreen}
      options={{
        headerShown: false,
      }} />

      </Stack.Navigator>
      

      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
