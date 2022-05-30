import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import SearchBar from './SearchBar.js'
import Categories from './Categories'
import Restaurant, { localRestaurants } from './Restaurant'
import { Divider } from 'react-native-elements'
import BottomNav from './BottomNav'

const YELP_API_KEY = ""

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('Melbourne')

    const getRestaurantsFromYelp =() => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }, 
        };
    
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => 
                setRestaurantData(
                    json.businesses
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);

    return (
        <SafeAreaView 
            style={{
                backgroundColor: "#eee", 
                flex: 1
            }}
        >
            <View 
                style={{
                    backgroundColor: "white",
                    padding: 15
                }}
            >
                <Header />
                <SearchBar  cityHandler={setCity} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <Restaurant restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>

            <Divider width={1} />

            <BottomNav />
            
        </SafeAreaView>
    )
}