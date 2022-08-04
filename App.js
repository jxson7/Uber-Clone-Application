import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from "./views/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'; 
import { NavigationContainer, StackActions } from '@react-navigation/native';




export default function App() {
  return (
    //initial setup of Redux, and sync of data to store
    <Provider store= {store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <HomeScreen/>
      <StatusBar style="auto" />
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
