import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Svg } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg height={400} width={200}>
          <Svg.Text   //GAME OVER
            fill="black"
            stroke="red"
            fontSize="35"
            fontWeight="bold"
            x="100"
            y="35"
            textAnchor="middle"
          >GAME OVER</Svg.Text>
          <Svg.Circle   //head
            cx={100}
            cy={120}
            r={27}
            strokeWidth={2.5}
            stroke="#e74c3c"
            fill="#f1c40f"
          />
          <Svg.Line   //body
            x1="100"
            y1="147"
            x2="100"
            y2="200"
            stroke="red"
            strokeWidth="2.5"
          />
          <Svg.Line   //the first leg
            x1="100"
            y1="200"
            x2="70"
            y2="240"
            stroke="red"
            strokeWidth="2.5"
          />
          <Svg.Line   //the second leg
            x1="100"
            y1="200"
            x2="130"
            y2="240"
            stroke="red"
            strokeWidth="2.5"
          />
          <Svg.Line   //the first arm
            x1="100"
            y1="170"
            x2="70"
            y2="190"
            stroke="red"
            strokeWidth="2.5"
          />
          <Svg.Line   //the second arm
            x1="100"
            y1="170"
            x2="130"
            y2="190"
            stroke="red"
            strokeWidth="2.5"
          />
          <Svg.Line   //подставка для виселицы №1
            x1="23"
            y1="275"
            x2="0.1"
            y2="310"
            stroke="black"
            strokeWidth="4"
          />
          <Svg.Line   //подставка для виселицы №2
            x1="23"
            y1="275"
            x2="42"
            y2="310"
            stroke="black"
            strokeWidth="4"
          />
          <Svg.Line   //палка для виселицы
            x1="23"
            y1="275"
            x2="23"
            y2="55"
            stroke="black"
            strokeWidth="4"
          />
          <Svg.Line   //держатель верёвки
            x1="23"
            y1="55"
            x2="100"
            y2="55"
            stroke="black"
            strokeWidth="4"
          />
          <Svg.Line   //верёвка
            x1="100"
            y1="55"
            x2="100"
            y2="93"
            stroke="black"
            strokeWidth="4"
          />
          <Svg.Ellipse   //петля
            cx="100"
            cy="153"
            rx="10"
            ry="4"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
          <Svg.Line   //the first.1 eye
            x1="85"
            y1="110"
            x2="95"
            y2="120"
            stroke="black"
            strokeWidth="2"
          />
          <Svg.Line   //the first.2 eye
            x1="95"
            y1="110"
            x2="85"
            y2="120"
            stroke="black"
            strokeWidth="2"
          />
          <Svg.Line   //the second.1 eye
            x1="105"
            y1="110"
            x2="115"
            y2="120"
            stroke="black"
            strokeWidth="2"
          />
          <Svg.Line   //the second.2 eye
            x1="115"
            y1="110"
            x2="105"
            y2="120"
            stroke="black"
            strokeWidth="2"
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
