import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'


const items = [
    {
        image: require("../assets/fast-food-menu.png"),
        text: 'Burger',
    },
    {
        image: require("../assets/sushi2.png"),
        text: 'Japanese',
    },
    {
        image: require("../assets/pizza.png"),
        text: 'Pizza',
    },
    {
        image: require("../assets/dessert.png"),
        text: 'Dessert',
    },
    {
        image: require("../assets/pasta.png"),
        text: 'Italian',
    },
    {
        image: require("../assets/drinks.png"),
        text: 'Alcohol',
    },
    
];

export default function Categories() {
  return (
    <View 
        style={{
            marginTop: 5,
            backgroundColor: "#F3FEF8",
            paddingVertical: 10,
            paddingLeft: 20,
        }}
    >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                    <Image 
                        source={item.image} 
                        style={{
                            width: 50,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                    />
                    <Text style={{ fontSize: 13, fontWeight: "700"}}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}