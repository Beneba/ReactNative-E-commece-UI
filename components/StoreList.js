import React from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import StoreDisplay from "./StoreDisplay";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';


function StoreList() {
  const stocks = [
    {
      photos: require("../assets/img/ladiesblack.jpg"),
      name: "Casual for Ladies",
      defaultRating: "3",
      price: "$990",
    },
    {
        photos: require("../assets/img/pink.jpg"),
        name: "Pink Jacket",
        defaultRating: "4.5",
        price: "$200",
      },
      {
        photos: require("../assets/img/black.jpg"),
        name: "Mens Bumper",
        defaultRating: "4",
        price: "$100",
      },
      {
        photos: require("../assets/img/men.jpg"),
        name: "Men Jacket",
        defaultRating: "5",
        price: "$250",
      },
      {
        photos: require("../assets/img/black.jpg"),
        name: "Black Jacket for Women",
        defaultRating: "4.5",
        price: "$500",
      },
  ];
  
  return (
    <View style ={styles.container} >
      <View style = { styles.Icons}>
        <Ionicons name="arrow-back" size={24} color="black"  borderRadius ={50} backgroundColor = "white" height ={50} />
        <AntDesign name="shoppingcart" size={24} color="black" />
      </View>
      <View>
        <Text style ={styles.itemTitle} >Women Jacket</Text>
      </View>
      <View style ={styles.searchArea} > 

        <TextInput placeholder ="Search Item Here" />
        <Text>|</Text>
        <Text> Filter</Text>
      </View>
      <FlatList
        data={stocks}
        renderItem={({ item }) => {
          return (
            <StoreDisplay
              photos={item.photos}
              name={item.name}
              defaultRating={item.defaultRating}
              price={item.price}
            />
          );
        }}
        keyExtractor={(item) => item.price}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f0f7fa",
    top: 20,
  },
  Icons:{
    flexDirection: "row",
    justifyContent:"space-between",
    paddingHorizontal:30,
    borderRadius: 50,
    top:30,
    
  },
  itemTitle:{
    marginHorizontal:30,
    fontSize:20,
    fontWeight: "bold",
    top:40
  }, 
  searchArea:{
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius:50,
    paddingVertical:10,
    paddingHorizontal:50,
    alignContent:"center",
    backgroundColor: "white",
    marginHorizontal: 25,

  },
})

export default StoreList;
