import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "China Bar",
        image_url: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg",
        categories: ["Chinese"],
        price: "$$",
        reviews: 970,
        rating: 3.7,
    },
    {
        name: "Grill'd",
        image_url: "https://www.sharks.com.au/siteassets/2018/02/20180220_grilld_site4.jpg?center=0.3%2C0.5&preset=photo-inline",
        categories: ["Burger", "Fast-food"],
        price: "$$",
        reviews: 450,
        rating: 4.3,
    }
]

export default function Restaurant(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
        {props.restaurantData.map((restaurant, index) => (
            <View 
                key={index}
                style={{
                    marginTop: 10, 
                    padding: 15, 
                    backgroundColor: 'white'
                }}
            >
                <RestaurantImage image={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
        ))}
        
    </TouchableOpacity>
  )
}

const RestaurantImage = (props) => {
    return (
        <View>
            <Image 
                source={{
                    uri: props.image,
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

const RestaurantInfo = (props) => {
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
                }}> {props.name} </Text>
                <Text style={{ fontSize: 13, color: "grey" }}>30-45 • min</Text>
            </View>
            <View style={{
                backgroundColor: "lightgreen",
                height: 30,
                width: 30,
                alignItems: "center",
                borderRadius: 15,
                justifyContent: "center"
            }}>
            <Text> {props.rating} </Text>
            </View>
        </View>
    )
}