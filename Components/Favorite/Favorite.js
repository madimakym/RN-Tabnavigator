import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FavoriteScreen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'Favorite',
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
        <Text>Favorite </Text>
        <Button title='Go to Home Screen' onPress={()=> this.props.navigation.navigate('Home')} />
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
