import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>SomethingJustGotUpdated</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22
  }
});

export default HomeScreen;