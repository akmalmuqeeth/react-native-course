import React from "react";
import { Text, StyleSheet,FlatList } from "react-native";

const ListScreen = () => {

    const names = [
        {name : "Akmalian", key: '1', age : 35},
        {name : "Bob", key: '2', age : 25},
        {name : "Charlie", key: '3', age : 15},
        {name : "Doug", key: '4', age : 45},
        {name : "Emily", key: '5', age : 22},
        {name : "Akmalian", key: '6', age : 33},
        {name : "Bob", key: '7', age : 44},
        {name : "Charlie", key: '8', age : 34},
        {name : "Doug", key: '9', age : 56},
        {name : "Emily", key: '10', age : 65},

    ]

    // keyExtractor={(friend)=>{ return friend.name}}
    // <FlatList 
    // horizontal
    // showsHorizontalScrollIndicator={false}
    // data={names} 
    // renderItem={
    //     ({item}) =>{
    //     return <Text style={styles.textStyle}>{item.name}</Text>
    //     }
    // }
    // >

    // </FlatList>

  return (
    <FlatList 
    
    
    data={names} 
    renderItem={
        ({item}) =>{
        return <Text style={styles.textStyle}>{item.name} - age is {item.age}</Text>
        }
    }
    >

    </FlatList>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    marginVertical: 50  
  }
});

export default ListScreen;