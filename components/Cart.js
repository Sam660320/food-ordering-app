import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items);
    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);
    const totalDollar = total.toLocaleString("en", {
        style: "currency",
        currency: "AUD",
    });

    console.log(totalDollar)
    return (
        <View style={{
            
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 30,
            
        }}>
            <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: "black",
                    alignItems: "center",
                    padding: 13,
                    borderRadius: 30,
                    width: 200,
                    position: "relative",
                }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}