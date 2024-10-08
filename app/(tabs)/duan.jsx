import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import DuAnScreen from '../../components/duan/DuAnScreen'

export default function Explore() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Thông Tin Dự Án:</Text>
        <DuAnScreen />
      </View>
    </SafeAreaView>
  )
}