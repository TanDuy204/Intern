import { View, Text } from 'react-native'
import React from 'react'

import DuAnScreen from '../../components/duan/DuAnScreen'

export default function Explore() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
    <Text style={{ fontSize: 20, marginBottom: 20 }}>Thông Tin Dự Án:</Text>
    <DuAnScreen />
  </View>
  )
}