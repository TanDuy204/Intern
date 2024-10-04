import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Sliders from '../../components/home/Sliders'
import Listview from '../../components/home/Project'

export default function home() {
  return (
    <ScrollView>
      <Header />
      <Sliders/>
      <Listview/>
    </ScrollView>
  )
}