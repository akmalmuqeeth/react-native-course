import React, {useState} from "react";
import { Text, StyleSheet,View } from "react-native";

import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const COLOR_INCREMENT = 15;
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

  return (
      <View>
          <ColorCounter onIncrease={()=> setRed(red+COLOR_INCREMENT)} onDecrease={()=> setRed(red-COLOR_INCREMENT)} color="Red"></ColorCounter>
          <ColorCounter onIncrease={()=> setGreen(green+COLOR_INCREMENT)} onDecrease={()=> setGreen(green-COLOR_INCREMENT)} color="Green"></ColorCounter>
          <ColorCounter onIncrease={()=> setBlue(blue+COLOR_INCREMENT)} onDecrease={()=> setBlue(blue-COLOR_INCREMENT)} color="Blue"></ColorCounter>
            <Text>Red: {red}</Text>
            <Text>Green: {green}</Text>
            <Text>Blue: {blue}</Text>
            <View style={{ height:100, width: 100, backgroundColor: `rgb(${red},${green}, ${blue})`}}></View>

      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default SquareScreen;