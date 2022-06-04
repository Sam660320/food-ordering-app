import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomNav from './BottomNav'

const UserProfile = ({ navigation }) => {
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
    }
    
  return (
    <SafeAreaView >
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.screen}>Hi {auth.currentUser?.email}</Text>
        </View>
     
        <View>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} >
                <View style={styles.subview}>
                    <Ionicons name="wallet-outline" size={24} />
                    <Text style={{marginLeft: 20, marginTop: 5}}>My Wallet</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} >
                <View style={styles.subview}>
                    <Ionicons name="gift-outline" size={24} />
                    <Text style={{marginLeft: 20, marginTop: 5}}>Refer a friend, get $15</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} >
                <View style={styles.subview}>
                    <Ionicons name="ribbon-outline" size={24} />
                    <Text style={{marginLeft: 20, marginTop: 5}}>Vouchers</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} >
                <View style={styles.subview}>
                    <Ionicons name="receipt-outline" size={24} />
                    <Text style={{marginLeft: 20, marginTop: 5}}>Receipt</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} >
                <View style={styles.subview}>
                    <Ionicons name="language-outline" size={24} />
                    <Text style={{marginLeft: 20, marginTop: 5}}>Language</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignOut} >
                <View style={styles.subview}>
                    <Ionicons name="log-out-outline" size={24} />
                    <Text style={{marginLeft: 20, marginTop: 5}}>Sign Out</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 175}}><BottomNav /></View>
        

    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    screen: {
        fontSize: 20,
        fontWeight: "500",
        color: "green",
        marginBottom: 70,
        marginTop: 30
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "green",
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: "green"
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: '#eee',
        borderWidth: 2,
    },
    subview: {
        flexDirection: "row",
        justifyContent: "flex-start"
    }
})

