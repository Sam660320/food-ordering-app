import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title: "Beef Curry with Rice",
        description: "When it comes to quick and satisfying meals Beef Masala Curry has to be at the top of the list. ",
        price: "$14.8",
        image: "https://i0.wp.com/www.gastrosenses.com/wp-content/uploads/2020/12/Beef-Masala-Curry-4.jpg?w=1200&quality=100&strip=all&ssl=1"
    },
    {
        title: "Lasagna",
        description: "Tender pieces of pasta noodles layered with a hearty tomato sauce, creamy ricotta, and mozzarella cheese.",
        price: "$12.8",
        image: "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200-450x450.jpg"
    },
    {
        title: "Tomato Spinach Chicken Pasta",
        description: "Tender pan-fried chicken nestled in a creamy tomato spinach sauce.",
        price: "$10.8",
        image: "https://www.saltandlavender.com/wp-content/uploads/2020/10/tomato-spinach-chicken-pasta-1.jpg"
    },
    {
        title: "MeatLover Pizza",
        description: "Simple Meatlover's pizza with pepperoni, ham, mince and chorizo",
        price: "$19.8",
        image: "https://img.kidspot.com.au/04fx2_du/w643-h428-cfill-q90/kk/2015/03/meatlovers-pizza-recipe-605896-2.jpg"
    },
    {
        title: "Lemon mediterranean chicken salad",
        description: "Full of Mediterranean flavours: olives, tomatoes, cucumber, avocados, and chicken",
        price: "$14.8",
        image: "https://cafedelites.com/wp-content/uploads/2016/07/Lemon-Herb-Mediterranean-Chicken-Salad-208.jpg"
    },
    {
        title: "Lettuce Salad",
        description: "Tomato, cucumber, dill, onion, olive oil, salt, and pepper",
        price: "$9.8",
        image: "https://i0.wp.com/ifoodreal.com/wp-content/uploads/2017/06/lettuce-tomato-cucumber-salad-recipe-15.jpg?w=596&ssl=1"
    },
    {
        title: "Golden Steak",
        description: "One pound Ribeye steak",
        price: "$17.8",
        image: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/02/how-to-cook-steak-1061w.jpg"
    },
     {
        title: "Beef Burger",
        description: "Juicy, cheese-cloaked beef, sharp onion, crunchy lettuce, and sweet-tangy “special sauce,” wrapped in a soft toasted bun.",
        price: "$14.8",
        image: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2240,c_limit/basically-burger-1.jpg"
    },
    {
        title: "Bubble Tea",
        description: "Bouncy, chewy balls are fun to munch on, much like chewing gum.",
        price: "$7.8",
        image: "https://assets.epicurious.com/photos/5953ca064919e41593325d97/master/w_1280,c_limit/bubble_tea_recipe_062817.jpg"
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