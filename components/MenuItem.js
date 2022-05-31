import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title: "Burger",
        description: "yAMMY",
        price: "$7.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Pizza",
        description: "yAMMY",
        price: "$8.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Cheeseburger",
        description: "yAMMY",
        price: "$9.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "meatLover",
        description: "yAMMY",
        price: "$19.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Icecream",
        description: "yAMMY",
        price: "$29.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Chocolate",
        description: "yAMMY",
        price: "$39.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Coffee",
        description: "yAMMY",
        price: "$7.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
     {
        title: "bubble Tea",
        description: "yAMMY",
        price: "$7.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Three guys",
        description: "yAMMY",
        price: "$7.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "McSpicy",
        description: "yAMMY",
        price: "$7.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
    {
        title: "Donut",
        description: "yAMMY",
        price: "$7.8",
        image: "http://www.chinabargroup.com/wp-content/uploads/2016/06/restaurant_chinabar_01-hd-768x593.jpg"
    },
];

export default function MenuItem({ restaurantName }) {
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => 
        dispatch({
            type: "ADD_TO_CART",
            payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue}
        });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title));

    return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        margin: 20
                    }}>
                        <BouncyCheckbox 
                        iconStyle={{borderColor: "lightgray", borderRadius: 7}}  
                        fillColor="green"
                        onPress={(checkboxValue)=>selectItem(food, checkboxValue)}
                        isChecked={isFoodInCart(food, cartItems)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} style={{ marginHorizontal:10}}/>
                </View>
                
            ))}
        </ScrollView>
    </SafeAreaView>
    )
}


const FoodInfo = (props) => (
    <View style={{
        width: 240, 
        justifyContent: "space-evenly"
    }}>
        <Text style={{
            fontSize: 19,
            fontWeight: "600"
        }}>
            {props.food.title}
        </Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri:props.food.image}} style={{
            width: 100,
            height: 100,
            borderRadius: 9

        }} />
    </View>
)