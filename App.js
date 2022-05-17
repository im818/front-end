import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Datapoint from './components/Datapoint';
import StrokeChart from './components/StrokeChart';


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
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: "center"
  }
})

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [chartData, setChartData] = useState();
  const [accX, setAccX] = useState();
  const [accY, setAccY] = useState();
  const [accZ, setAccZ] = useState();
  const [gyroX, setGyroX] = useState();
  const [gyroY, setGyroY] = useState();
  const [gyroZ, setGyroZ] = useState();


  // this function is called on clickin the button Update Graph
  // it submits an HTTP request to the board, which gathers data and sends over as JSON
  async function updateChart() {
    return fetch('http://192.168.4.1/record-stroke')
      .then((response) => response.json())
      .then((json) => {
        // for debugging purposes, this is how to access a single reading of the acceleration in x.
        console.log(json["acceleration_x"][0]);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  var ws = new WebSocket('ws://192.168.4.1:81');

  useEffect(() => {

    ws.onopen = () => {
      console.log('Connected to the server');
    };

    ws.onmessage = (e) => {
      var jsonData = JSON.parse(e.data);
      setAccX(jsonData.accX);
      setAccY(jsonData.accY);
      setAccZ(jsonData.accZ);
      setGyroX(jsonData.gyroX);
      setGyroY(jsonData.gyroY);
      setGyroZ(jsonData.gyroZ);
    };
  });

  return (
    <View
      style={styles.main}>
      <View
        style={styles.row}>
        <Datapoint number={accX} />
        <Datapoint number={accY} />
        <Datapoint number={accZ} />
      </View>
      <View
        style={styles.button}>
        <Button
          title="Update Graph"
          onPress={() => updateChart()} />
      </View>
    </View>
  );
};

export default App;
