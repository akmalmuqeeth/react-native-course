import React, {useReducer} from "react";
import { Text, StyleSheet,View } from "react-native";

import ColorCounter from '../components/ColorCounter'

const reducer = (state, action) =>{

    // state {red: 0, green: 0, blue: 0}
    // action color, amount

    switch(action.color) {
        case "red":
          return {...state, red: action.amount}
        case "green":
            return {...state, green: action.amount}
        case "blue":
            return {...state, blue: action.amount}
        default:
            return state;
      }

    
}
const SquareWithReducerScreen = () => {
    const COLOR_INCREMENT = 15;
    
    const [state, dispatch] = useReducer(  reducer, {red: 0, green: 0, blue: 0});

  return (
      <View>
          <Text style={styles.text}>Using Reducer</Text>
          <ColorCounter onIncrease={()=> dispatch({color: "red", amount: state.red + COLOR_INCREMENT})} onDecrease={()=> dispatch({color: "red", amount: state.red + -1 * COLOR_INCREMENT})} color="Red"></ColorCounter>
          <ColorCounter onIncrease={()=> dispatch({color: "green", amount: state.green + COLOR_INCREMENT})} onDecrease={()=> dispatch({color: "green", amount: state.green + -1 * COLOR_INCREMENT})} color="Green"></ColorCounter>
          <ColorCounter onIncrease={()=> dispatch({color: "blue", amount: state.blue + COLOR_INCREMENT})} onDecrease={()=> dispatch({color: "blue", amount: state.blue + -1 * COLOR_INCREMENT})} color="Blue"></ColorCounter>
            <Text>Red: {state.red}</Text>
            <Text>Green: {state.green}</Text>
            <Text>Blue: {state.blue}</Text>
            <View style={{ height:100, width: 100, backgroundColor: `rgb(${state.red},${state.green}, ${state.blue})`}}></View>

      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default SquareWithReducerScreen;