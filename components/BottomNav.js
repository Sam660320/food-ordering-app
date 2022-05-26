import { View, Text } from 'react-native'
import React from 'react'

export default function BottomNav() {
  return (
    <View style={{
        flexDirection:"row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between"
    }}>
      <Text>BottomNav</Text>
      <Text>BottomNav</Text>
      <Text>BottomNav</Text>
      <Text>BottomNav</Text>
    </View>
  )
}