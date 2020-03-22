import React, {useState} from "react";
import { Text, StyleSheet,View,Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

  return (
    <View>
        <Button 
        onPress={() => {
            setColors([...colors, {color: random(), key: `${colors.length+1}`}]);

        }}
        title="Add a color" 
      />
     
     <FlatList data={colors} renderItem={({item})=>{
        return <View style={{ height:100, width: 100, backgroundColor: item.color}}></View>
     }}>

     </FlatList>
    </View>
  ) 
};

const random = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green}, ${blue})`;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default ColorScreen;