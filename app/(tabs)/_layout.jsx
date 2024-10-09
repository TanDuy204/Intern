import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import Octicons from '@expo/vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default function TabLayout() {

  return (

    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='home'
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => <Ionicons name='home' size={24} color={color} />
        }} />
      <Tabs.Screen name='duan'
        options={{
          tabBarLabel: 'Dự án của tôi',
          tabBarIcon: ({ color }) => <Octicons name="project" size={24} color={color} />
        }} />
        <Tabs.Screen name='todo'
        options={{
          tabBarLabel: 'To-Do',
          tabBarIcon: ({ color }) => <Icon name="checklist" size={24} color={color} />
        }} />

      <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color }) => <Ionicons name='people-circle' size={24} color={color} />
        }} />
    </Tabs>
  )
}