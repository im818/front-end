import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  numberContainer: {
    padding: 30,
    margin: 3,
    backgroundColor: '#00003f',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }
})

const Datapoint = (props) => {
  return (
    <View>
      <Text style={styles.numberContainer}>
        {props.number}
      </Text>
    </View>
  );
}

export default Datapoint;