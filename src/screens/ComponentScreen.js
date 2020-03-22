import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentScreen = () => {

    const greeting = "Getting started with react native";
    const name = "Akmal";
    const textElement = <Text style={styles.nameStyle}>My name is {name}</Text>
    return (
        <View>
            <Text style={styles.textStyle}>{greeting} </Text>
            {textElement}
        </View>
    );
};

 const styles = StyleSheet.create({
    textStyle : {
        fontSize: 45
    },
    nameStyle : {
        fontSize: 20
    }
 });

 export default ComponentScreen;




