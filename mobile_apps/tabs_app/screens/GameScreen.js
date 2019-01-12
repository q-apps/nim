import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { Constants, Svg } from 'expo';

var words = ['cat', 'dog', 'horse', 'christmas', 'mouse', 'health', 'date', 'world', 'system'];

function chooseWord(words) {
  var index = getRandomNum(0, 8);
  return words[index];
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var word = chooseWord(words)

function mask_word(word) {
  var length = word.length
  var stars = '*'.repeat(length)
  return stars
}

var masked_word = mask_word(word)

function check_letter(word, letter, masked) {
  var result = []
  var i
  for (i = 0; i < word.length; i++) {
    if (masked.length != 0 && masked[i] != '*') {
      result.push(masked[i])
      continue
    }
    if (word[i] == letter) {
      result.push(letter)
    }
    else {
      result.push('*')
    }
  }
  return result
}

var masked = []

function guess_letter(input_letter) {
    masked = check_letter(word, input_letter, masked)
    alert(masked);
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Text>{mask_word(word)}</Text>
          <TextInput
            placeholder="Enter a letter"
            style={styles.input}
            onChangeText={(text) => guess_letter(text)}
          />
          <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  input: {
  height: 50,
  backgroundColor: '#fff',
  marginHorizontal: 10,
  marginVertical: 5,
  width: window.width - 30,
  },
});
