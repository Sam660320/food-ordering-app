import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'


const items = [
    {
        image: require("../assets/kimbap.png"),
        text: 'Japan',
    },
    {
        image: require("../assets/chinese.png"),
        text: 'Chinese',
    },
    {
        image: require("../assets/korean.png"),
        text: 'Korean',
    },
    {
        image: require("../assets/pasta.png"),
        text: 'Italian',
    },
    {
        image: require("../assets/sushi2.png"),
        text: 'Dessert',
    },
];

export default function Categories() {
  return (
    <View 
        style={{
            marginTop: 5,
            backgroundColor: "#fff",
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