import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Sliders from '../../components/home/Sliders'
import Listview from '../../components/home/Listview'

export default function home() {
  return (
    <View>
      <Header />
      <Sliders />
      <Listview/>
    </View>
  )
}