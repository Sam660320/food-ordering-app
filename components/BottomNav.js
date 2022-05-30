import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BottomNav = () => {
    return (
    
        <View style={{
            flexDirection:"row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            <TouchableOpacity>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="home" size={25} style={{ marginRight: 3}} />
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="bars" size={25} style={{ marginRight: 3}} />
                    <Text>Browse</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="shoppingcart" size={25} style={{ marginRight: 3}} />
                    <Text>Cart</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="user" size={25} style={{ marginRight: 3}} />
                    <Text>Profile</Text>
                </View>
            </TouchableOpacity>
        </View>
    
    )
};

export default BottomNav