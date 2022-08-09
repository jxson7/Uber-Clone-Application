import React from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from "./views/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from "./views/MapScreen";


// 2:37:40 
// https://youtu.be/bvn_HYpix6s?list=PLyhfkMBYs9d8fCB8YdHXQzsc30pZTS-Eo&t=9460 
// NOTE TO SELF: RESUME ON MAP INTEGRATION


export default function App() {
  const Stack = createStackNavigator();
  return (
    //initial setup of Redux, and sync of data to store
    <Provider store= {store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding": "height"}
        style={{flex:1}}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
          <Stack.Navigator>
            <Stack.Screen 
              name='HomeScreen' 
              component={HomeScreen}
              options={{
                headerShown: false,
              }} 
            />
            <Stack.Screen 
              name='MapScreen' 
              component={MapScreen}
              options={{
                headerShown: false,
              }} 
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
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
