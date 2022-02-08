import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function DetailPage({photos, name, defaultRating, price}) {
   
    return (
        <View style = {styles.container}>
           <View style = { styles.Icons}>
                <Ionicons name="arrow-back" size={24} color="black"  borderRadius ={50} backgroundColor = "white" height ={50} />
                <AntDesign name="shoppingcart" size={24} color="black" />
            </View>
            <View style ={styles.imageContainer} >
                <Image  source = {require("../assets/img/ladiesblack.jpg")}  style = {styles.imageView}/>
            </View>
            <View  style = {styles.TextContainer}>
            <View   >
                <Text style ={styles.itemTitle} >Black Jacket</Text>
            </View>
            <View flexDirection = "row"  marginVertical={10}>
               <Text style={{color:'black', fontWeight:'bold', marginVertical:5}}>Review:</Text>
                <AirbnbRating 
                count = {5}
                defaultRating= {defaultRating}
                size ={20}
                showRating = {false}
               
                />
            </View>
            <View>
                <Text style ={styles.emptyText} ></Text>
            </View>
            <View style ={styles.descriptionContainer} > 
                <Text>This jacket is made of wool, good for all kinds of weather, casual. Dries very fast</Text>
            </View>
            <View style = {styles.materialDetails}>
                <Text backgroundColor = "#60c1eb">Material: 81% Wool, 9% Polester 10% nylon</Text>
            </View>
            <View flexDirection= "row" justifyContent= "space-between" marginVertical = {15}>
                <Text> XS</Text>
                <Text>S</Text>
                <Text style ={styles.materialSize} >M</Text>
                <Text>L</Text>
                <Text>XL</Text>
            </View>
            <View style = {styles.amountContainer}>
            <View>   
                <Text style={{color:'white', fontWeight:'bold'}}> Total</Text>
                <Text style={{color:'white', fontWeight:'bold'}}>$100</Text>
            </View>
                <TouchableOpacity>
                    <Text style ={styles.addToCart}> Add To Cart</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        top:20,
        backgroundColor: "#f0f7fa",
    },
    Icons:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:30,
        borderRadius: 50,
        top:30,
        
      },
    imageContainer: {
        borderTopRightRadius:90,
        borderBottomLeftRadius:60,
        backgroundColor:"white",
        top:40,
    },
    imageView:{
        height:180,
        width: 180,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:70,
        marginVertical:30,
    },
    itemTitle:{
        fontSize:20,
        fontWeight: "bold",
    },
    TextContainer:{
        flexDirection: "column",
        paddingHorizontal: 35,
        paddingVertical:40,
        marginVertical:25,
        justifyContent: "space-evenly"
       
    },
    emptyText:{
        height:5,
        width:70,
        backgroundColor: "#60c1eb",
        borderRadius: 50,
        marginVertical:10,
    },
    descriptionContainer:{
        marginVertical:20,
    },
    materialDetails:{
    padding:10,
    backgroundColor:"white",
    color: "#60c1eb"
    },
    materialSize:{
        backgroundColor:"#60c1eb",
        color: "white",
        fontWeight: "bold",
        alignItems:"center",
       padding:5,
       borderRadius:10,
    },
    amountContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding:15,
        backgroundColor:"#199ad1",
        borderRadius:15,
        color: "white",
    },
    addToCart: {
       padding:10,
       backgroundColor: "white",
       borderRadius:10,
       
       fontWeight: "bold",

    },
    nameContainer:{
        fontSize: 17,
        fontWeight: "bold", 
    },
    priceContiner:{
        fontSize:15,
        marginVertical:10,
    }
})

export default DetailPage;
