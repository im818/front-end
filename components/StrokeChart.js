import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';



function StrokeChart(props) {

  const chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
      {
        data: props.data,
      }
    ]
  };

  const styles = StyleSheet.create({
    main: {
      alignItems: 'center'
    }
  })

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.main}>
      <LineChart
        data={chartData}
        screen={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  )
}

export default StrokeChart;