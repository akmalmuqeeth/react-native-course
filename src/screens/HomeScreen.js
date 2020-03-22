import React from "react";
import { Text, StyleSheet,Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  // <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
  //       <Text>Go to list page</Text>
  //       <Text>Go to list page</Text>
  //       <Text>Go to list page</Text>
  //     </TouchableOpacity>
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to components demo here" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to list" 
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to images" 
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Open counter" 
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Open color screen" 
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Open square screen" 
      />
      
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default HomeScreen;