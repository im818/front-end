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

  async function updateChart() {
    return fetch('http://192.168.4.1/acceleration')
      .then((response) => response.json())
      .then((json) => {
        setChartData(json.accX);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const state = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
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
        <Button
          title="Update Graph"
          onPress={updateChart()} />
      </View>
    </View>
  );
};

export default App;
