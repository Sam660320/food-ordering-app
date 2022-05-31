import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";

export default function OrderCompleted({navigation}) {
  const [lastOrder, setLastOrder] = useState();

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalDollar = total.toLocaleString("en", {
    style: "currency",
    currency: "AUD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
          marginTop: 80
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalDollar}
        </Text>
        
          
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking1.json")}
            autoPlay
            speed={0.5}
          />
            <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
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
        </View>
    </SafeAreaView>
  );
}