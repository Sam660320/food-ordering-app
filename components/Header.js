import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function Header() {
    const [activeTab, setActiveTab] =useState("Delivery")
  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
      <NavButton 
        text="Delivery" 
        btnColor="black" 
        textColor="white" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} />
      <NavButton 
        text="Pickup" 
        btnColor="white" 
        textColor="black" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} />

    </View>
  );
}
const NavButton = (props) => {
    return (  
        <View>
            <TouchableOpacity 
                style={{
                    backgroundColor: props.activeTab === props.text ? 'black' : 'white',
                    paddingVertical: 6,
                    paddingHorizontal: 15,
                    borderRadius: 30,
                }}
                onPress={() => props.setActiveTab(props.text)}
            >
                <Text 
                    style={{ 
                        color: props.activeTab === props.text ? 'white' : 'black', 
                        fontSize: 15, 
                        fontWeight: "900"
                    }}
                >
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
};
