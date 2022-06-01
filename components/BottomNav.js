import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native';

const BottomNav = () => {
    const navigation = useNavigation();

    return (
    
        <View style={{
            flexDirection:"row",
            margin: 0,
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            <TouchableOpacity onPress={() =>
                            navigation.navigate("Home")}>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="home" size={25} style={{ marginRight: 3, marginTop: 10}} />
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="bars" size={25} style={{ marginRight: 3, marginTop: 10}} />
                    <Text>Browse</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                            navigation.navigate("Home")}>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="shoppingcart" size={25} style={{ marginRight: 3, marginTop: 10}} />
                    <Text>Cart</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                            navigation.navigate("UserProfile")}>
                <View style={{ display: "block", alignItems: "center"}}>
                    <AntDesign name="user" size={25} style={{ marginRight: 3, marginTop: 10}} />
                    <Text>Profile</Text>
                </View>
            </TouchableOpacity>
        </View>
    
    )
};

export default BottomNav