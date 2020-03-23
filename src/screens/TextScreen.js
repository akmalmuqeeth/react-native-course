import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState("")

  return (
    <View>
        <Text style={styles.text}>Enter name here:</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(text)=> setName(text)}
        />
<Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  },
  input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1
  }
});

export default TextScreen;