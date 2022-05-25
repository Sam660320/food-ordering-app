import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Restaurant() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  )
}

const RestaurantImage = () => {
    return (
        <View>
            <Image 
                source={{
                    uri: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058"
                }}
                style={{
                    width: "100%",
                    height: 180
                }}
            />
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20}}>
                <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'></MaterialCommunityIcons>
            </TouchableOpacity>
        </View>
    )
};

const RestaurantInfo = () => {
    return ( 
        <View 
            style={{ 
                flexDirection: "row", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginTop: 10
            }}
        >
            <View>
                <Text style={{
                    fontSize: 15, fontWeight: "bold"
                }}>chinese cuisine</Text>
                <Text>30-45 • min</Text>
            </View>
            
            <Text>4.5</Text>
        </View>
    )
}