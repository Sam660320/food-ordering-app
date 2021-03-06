import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// const {REACT_APP_GOOGLE_PLACES_KEY} = process.env

export default function SearchBar({cityHandler}) {
  return (
    <View style={{
        marginTop: 15, 
        flexDirection: "row"
    }}>
        <GooglePlacesAutocomplete 
            query={{ key: "AIzaSyCt-ByDOhuYcrn7H46BWMOUJVtIuXqH5RE"}}
            onPress={(data, details = null) => {
                const city = data.description.split(',')[0];
                cityHandler(city);
            }}
            placeholder='Search'
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    fontWeight: "700",
                    marginTop: 7,
                },
                textInputContainer: { 
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                },
            }}
            
            renderLeftButton = {() => (
                <View 
                    style={{ 
                        marginLeft: 10
                    }}>
                    <Ionicons name="location-sharp" size={24}></Ionicons>
                </View>
            )}
            renderRightButton = {() => (
                <View 
                    style = {{
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "white",
                        padding: 9, 
                        borderRadius: 30,
                        alignItems: 'center'
                    }}>

                    <AntDesign name="google" size={15} style={{ paddingHorizontal: 10 }} ></AntDesign>
                </View>
            )}
        />
        
    </View>
  )
}