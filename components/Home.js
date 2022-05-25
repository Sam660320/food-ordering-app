import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar.js'
import Categories from './Categories'
import Restaurant from './Restaurant'

export default function home() {
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
        <SearchBar />
        </View>
        <Categories />
        <Restaurant />
     
    </SafeAreaView>
  )
}