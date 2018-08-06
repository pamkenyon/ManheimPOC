/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Alert, TouchableOpacity, TextInput, View} from 'react-native';

const instructions = Platform.select({
  ios: 'I am the iOS App!',
  android:
    'I am the Android App!',
});
class Inputs extends Component {
  state = {
     username: '',
     password: ''
  }
  handleEmail = (text) => {
     this.setState({ username: text })
  }
  handlePassword = (text) => {
     this.setState({ password: text })
  }
}

type Props = {};
export default class App extends Component<Props> {
  _onPressButton() {
    Alert.alert(
      'You submitted the form!'
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Appium POC!</Text>
        <Text style={styles.host_line}>A Kenyonator Production</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
               accessibilityLabel = "username"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               accessibilityLabel = "password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               accessible={true}
               accessibilityLabel={'submit_btn'}
               onPress = {this._onPressButton}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  welcome: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  host_line: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    marginBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    margin: 15,
    height: 40,
    alignItems: 'stretch',
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
    textAlign: 'center'
 }
});
