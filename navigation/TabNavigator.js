import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  MainStackNavigator,
  PostStackNavigator,
  ProfileStackNavigator,
  SearchStackNavigator
} from './Navigator'

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={26} />
          )
        }}
        name='Profile'
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          )
        }}
        name='Home'
        component={MainStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='album' color={color} size={26} />
          )
        }}
        name='Search'
        component={SearchStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='bell' color={color} size={26} />
          )
        }}
        name='Post'
        component={PostStackNavigator}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
