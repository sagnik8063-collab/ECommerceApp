import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductsDetailsScreen from '../screens/ProductsDetailsScreen';

const AppNavigation = () => {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='ProductDetails' component={ProductsDetailsScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})