import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStripe } from '@stripe/stripe-react-native'

const CheckoutScreen = () => {
    const {initPaymentSheet, presentPaymentSheet} = useStripe()

    

    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <Text>Checkoutscreen</Text>
                <TouchableOpacity 
                            style={{
                                marginTop: 60,
                                backgroundColor: "green",
                                alignItems: "center",
                                padding: 15,
                                borderRadius: 30,
                                width: 200,
                                position: "relative",
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                            onPress={() =>
                                navigation.navigate("Home")}
                        >
                            <Text style={{ color: "white", fontSize: 20}}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: StatusBar.currentHeight
    }
})