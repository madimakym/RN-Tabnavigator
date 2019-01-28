import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingScreen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'Setting',
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#418558',
      },
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
