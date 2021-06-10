import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screen/Splash'
import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'
import PostScreen from '../screen/PostScreen'
import SearchScreen from '../screen/SearchScreen'

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8'
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back'
}
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Search' component={SearchScreen} />
    </Stack.Navigator>
  )
}
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}
const PostStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Post' component={PostScreen} />
    </Stack.Navigator>
  )
}
const SplashStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Splash' component={Splash} />
    </Stack.Navigator>
  )
}

export {
  MainStackNavigator,
  SearchStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
  SplashStackNavigator
}
