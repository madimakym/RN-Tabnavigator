import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    
    this.props.navigation.dispatch(navigateAction);
  }

  constructor(props){
    super(props);
    this.state = {
      status:true,
      refreshing: false,
      }
    }

  render () {
    return (
      <View style={styles.container}>
         <View style={{paddingVertical: 15}}></View>
          <View>  
              <TouchableOpacity style={styles.Item} onPress={this.navigateToScreen('Page1Stack')}>
                <Text style={styles.Text}> Page1 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Item} onPress={this.navigateToScreen('Page2Stack')}>
                <Text style={styles.Text}> Page2 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Item} onPress={this.navigateToScreen('Page3Stack')}>
                <Text style={styles.Text}> Page3 </Text>
              </TouchableOpacity>
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
    //backgroundColor: '#f4f4f4'
  },

  Content: {
    paddingVertical: 3,
    paddingTop: 20,
  },

  Item:{
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
 },


 IconMenu:{
    width: 25,
    height: 25,
//    paddingTop: 
  },

  Text:{
    fontSize: 17,
    color: '#858585',
    paddingHorizontal: 13,
  },

  Time: {
      fontWeight: 'bold',
      paddingVertical: 6,
      paddingHorizontal: 25,
      backgroundColor: '#ededed'
    },

  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  }

});


SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;

