import React, {useReducer} from "react";
import { Text, StyleSheet,View } from "react-native";

import ColorCounter from '../components/ColorCounter'

const reducer = (state, action) =>{

    // state {red: 0, green: 0, blue: 0}
    // action type, payload

    switch(action.type) {
        case "CHANGE_RED":
          return {...state, red: action.payload}
        case "CHANGE_GREEN":
            return {...state, green: action.payload}
        case "CHANGE_BLUE":
            return {...state, blue: action.payload}
        default:
            return state;
      }

     
}
const SquareWithReducerScreen = () => {
    const COLOR_INCREMENT = 15;
    
    const [state, dispatch] = useReducer(  reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

  return (
      <View>
          <Text style={styles.text}>Using Reducer</Text>
          <ColorCounter onIncrease={()=> dispatch({type: "CHANGE_RED", payload: red + COLOR_INCREMENT})} onDecrease={()=> dispatch({type: "CHANGE_RED", payload: red + -1 * COLOR_INCREMENT})} color="Red"></ColorCounter>
          <ColorCounter onIncrease={()=> dispatch({type: "CHANGE_GREEN", payload: green + COLOR_INCREMENT})} onDecrease={()=> dispatch({type: "CHANGE_GREEN", payload: green + -1 * COLOR_INCREMENT})} color="Green"></ColorCounter>
          <ColorCounter onIncrease={()=> dispatch({type: "CHANGE_BLUE", payload: blue + COLOR_INCREMENT})} onDecrease={()=> dispatch({type: "CHANGE_BLUE", payload: blue + -1 * COLOR_INCREMENT})} color="Blue"></ColorCounter>
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

export default SquareWithReducerScreen;