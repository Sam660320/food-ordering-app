import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function BottomNav() {
  return (
    <View style={{
        flexDirection:"row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between"
    }}>
        <View style={{ display: "block", alignItems: "center"}}>
            <AntDesign name="home" size={25} style={{ marginRight: 3}} ></AntDesign>
            <Text>Home</Text>
        </View>
        <View style={{ display: "block", alignItems: "center"}}>
            <AntDesign name="bars" size={25} style={{ marginRight: 3}} ></AntDesign>
            <Text>Browse</Text>
        </View>
        <View style={{ display: "block", alignItems: "center"}}>
            <AntDesign name="shoppingcart" size={25} style={{ marginRight: 3}} ></AntDesign>
            <Text>Cart</Text>
        </View>
        <View style={{ display: "block", alignItems: "center"}}>
            <AntDesign name="user" size={25} style={{ marginRight: 3}} ></AntDesign>
            <Text>Profile</Text>
        </View>
    </View>
  )
  
}

const Icon = (props) => {
    <FontAwesome5 name={props.icon} size={25} style={{
        marginBottom: 3,
        alignSelf: "center",
    }}
    />
};