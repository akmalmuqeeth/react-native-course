import React from "react";
import { Text, StyleSheet,View, FlatList } from "react-native";

import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {

    const images = [
        {title: "Forest", image: require("../../assets/forest.jpg"), key: "1", score: "9"},
        {title: "Snows", image: require("../../assets/beach.jpg"),key: "2" , score: "7"},
        {title: "Desserts", image: require("../../assets/mountain.jpg"),key: "3", score: "8"},
    ];

   

  return (
    <FlatList
        data={images}
        renderItem={
            ({item})=>{
                return  <ImageDetail title={item.title} image={item.image} score={item.score}/>
            }
        }
    >
         
    </FlatList>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default ImageScreen;