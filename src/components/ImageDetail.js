import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
    console.log('image', props.image);
  return (
      <View>
          <Image source={props.image}/>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.scoreStyle}>Score is: {props.score}</Text>    
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  },
  scoreStyle: {
    fontSize: 14
  }
});

export default ImageDetail;