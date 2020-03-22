import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
        <Text style={styles.text}>{props.color}</Text>
        <Button 
            onPress={() => {
                props.onIncrease();
            }}
            title={`More ${props.color}`} 
      />
      <Button 
            onPress={() => {
                props.onDecrease();
            }}
            title={`Less ${props.color}`} 
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default ColorCounter;