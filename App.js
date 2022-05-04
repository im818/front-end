import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Datapoint from './components/Datapoint';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
})

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var ws = new WebSocket('ws://192.168.4.1:81');

  useEffect(() => {

    ws.onopen = () => {
      console.log('Connected to the server');
    };

    ws.onmessage = (e) => {
      setData(e.data);
      console.log("Data updated");
    };
  });

  return (
    <View
      style={styles.main}>
      <View
        style={styles.row}>
        <Datapoint number={data.accX} />
        <Datapoint number={data.accY} />
        <Datapoint number={data.accZ} />
      </View>
    </View>
  );
};

export default App;
