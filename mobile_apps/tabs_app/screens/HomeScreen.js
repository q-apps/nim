import React, { Component } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { Constants, Svg } from 'expo';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg height={400} width={200}>
        <Svg.Image
        x="4%"
        y="4%"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        href={require('../images/Visilytsa.jpg')}>
        </Svg.Image>
        </Svg>
        <Button
          onPress={() => this.props.navigation.navigate('Game')}
          title="Play"
          color="black"
        />
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
