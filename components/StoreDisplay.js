import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

function StoreDisplay({photos, name, defaultRating, price}) {
   
    return (
        <View style = {styles.container}>
           
            <View style ={styles.imageContainer} >
                <Image  source ={photos} style = {styles.imageView} />
            </View>
            <View style ={styles.TextContainer} >
            <View  >
                <Text style ={styles.nameContainer}>{name} </Text>
            </View>
            <View>
               
                <AirbnbRating 
                count = {5}
                defaultRating= {defaultRating}
                size ={20}
                showRating = {false}
               
                />
            </View>
            <View  > 
                <Text style ={styles.priceContiner}>{price} </Text>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        top:60,
        paddingHorizontal: 20,
        flexDirection: "row",
        marginVertical: 5,
        backgroundColor: "#f0f7fa",
    },
    imageContainer: {
        borderTopRightRadius:100,
        borderBottomLeftRadius:70,
        backgroundColor:"white",
        
        height:120,
        width:120,

    },
    imageView:{
        height:90,
        width: 70,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:20,
        marginVertical:20,
        

    },
    TextContainer:{
        flexDirection: "column",
        paddingHorizontal: 25,
        paddingVertical:10,
       marginVertical: 10,
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

export default StoreDisplay;
