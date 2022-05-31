import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import RestaurantInfo from './RestaurantInfo'
import { Divider } from 'react-native-elements'
import MenuItem from './MenuItem'
import Cart from './Cart'


export default function RestaurantDetails({route, navigation}) {
  return (
    <View
        style={{
            backgroundColor: "white",
            flex: 1
        }}
    >
        <View 
            style={{
                backgroundColor: "white",
                padding: 0
            }}
        >
        <RestaurantInfo route={route} />
        <Divider width={2} style={{ marginVertical: 20}}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <MenuItem restaurantName={route.params.name}/>
        </ScrollView>
        <Divider width={1} />
        <Cart navigation={navigation} />
    </View>
  )
}