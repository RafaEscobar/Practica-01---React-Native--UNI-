import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={ style.view_screen }>
      <Text style={ style.text_screen }>Mi pantalla principal</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
    </Stack.Navigator>  
    }</NavigationContainer>
  );
}

const style = StyleSheet.create({
  view_screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  text_screen: {
    fontSize: 25,
  }

})