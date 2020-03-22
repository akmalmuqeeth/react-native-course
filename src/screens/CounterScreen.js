import React, {useState} from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const CounterScreen = () => {
    let [counter, setCounter] = useState(0);
  return (
    <View>
        <Button 
        onPress={() => {
            setCounter(counter + 1);
        }}
        title="Increase counter" 
      />
      <Button 
        onPress={() => {
            setCounter(counter -1);
        }}
        title="Decrease counter" 
      />
<Text style={styles.text}>Counter: {counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default CounterScreen;