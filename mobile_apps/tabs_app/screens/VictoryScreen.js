import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Svg } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg height={400} width={200}>
        <Svg.Text   //  YOU WON
          fill="#FFD700"
          stroke="red"
          fontSize="35"
          fontWeight="bold"
          x="100"
          y="35"
          textAnchor="middle"
        >YOU WON!</Svg.Text>
        <Svg.Circle   //  head
          cx={100}
          cy={120}
          r={27}
          strokeWidth={2.5}
          stroke="#FFD700"
          fill="#AFEEEE"
        />
        <Svg.Line   //  body
          x1="100"
          y1="147"
          x2="100"
          y2="200"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        <Svg.Line   //  the first leg
          x1="100"
          y1="200"
          x2="70"
          y2="240"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        <Svg.Line   //  the second leg
          x1="100"
          y1="200"
          x2="130"
          y2="240"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        <Svg.Line   //  the first arm
          x1="100"
          y1="170"
          x2="70"
          y2="160"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        <Svg.Line   //  the second arm
          x1="100"
          y1="170"
          x2="130"
          y2="160"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
