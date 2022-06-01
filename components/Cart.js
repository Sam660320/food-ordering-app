import { View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import firebase from "../firebase";
import LottieView from "lottie-react-native";



export default function Cart({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );
    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);
        
    const totalDollar = total.toLocaleString("en", {
        style: "currency",
        currency: "AUD",
    });

    const addOrderToFireBase = () => {
        setLoading(true);
        const db = firebase.firestore();
        db.collection("orders")
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                setTimeout(() => {
                setLoading(false);
                navigation.navigate("OrderCompleted");
                }, 1000);
            });
    };
    

    const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        },
    
        modalCheckoutContainer: {
          backgroundColor: "white",
          padding: 16,
          height: 500,
          borderWidth: 1,
        },
    
        restaurantName: {
          textAlign: "center",
          fontWeight: "500",
          fontSize: 18,
          marginBottom: 10,
        },
    
        subtotalContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        },
    
        subtotalText: {
          textAlign: "left",
          fontWeight: "700",
          fontSize: 15,
          marginBottom: 10,
          marginHorizontal: 22,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalDollar}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",
                                }}
                                onPress={() => {
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                        top: 17,
                                    }}
                                >
                                    {total ? totalDollar : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    
    };


    console.log(totalDollar)
    return (
        <View>
            <Modal 
                animationType='slide' 
                visible={modalVisible}
                treansparent={true}
                onRequestClose={()=>setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>

            {total ? (
            <View style={{
                
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 30,
                
            }}>
                <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
                    <TouchableOpacity 
                        style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            alignItems: "center",
                            padding: 15,
                            borderRadius: 30,
                            width: 200,
                            position: "relative",
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}
                        onPress={()=> setModalVisible(true)}
                    >
                        <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>Cart</Text>
                        <Text style={{ color: "white", fontSize: 20}}>{totalDollar}</Text>
                    </TouchableOpacity>
                </View>
            </View> )
            : (<></>)}
       
        </View> 
    )
}