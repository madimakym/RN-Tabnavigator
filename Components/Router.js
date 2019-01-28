import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './Home/Home'
import FavoriteScreen from './Favorite/Favorite'
import SettingScreen from './Setting/Setting'
import DetailScreen from './Home/Detail'


const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen},
    Detail: { screen: DetailScreen},
  })

const FavoriteStack = createStackNavigator({
    Favorite: { screen: FavoriteScreen},
  })

const SettingStack = createStackNavigator({
  SettingScreen: { screen: SettingScreen},
})

const DashboardTabNavigator = createBottomTabNavigator(
    {
      Home: { screen: HomeStack , 
            navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ tintColor }) => ( <Ionicons name="ios-home" size={22} color={tintColor} />)
          },
        },
        Favorite: { screen: FavoriteStack, 
            navigationOptions: {
            tabBarLabel:"Favorite",
            tabBarIcon: ({ tintColor }) => ( <Ionicons name="ios-heart" size={22} color={tintColor} />)
          },
        },

        Setting: { screen: SettingStack, 
            navigationOptions: {
            tabBarLabel:"Setting",
            tabBarIcon: ({ tintColor }) => ( <Ionicons name="md-information-circle-outline" size={22} color={tintColor} />)
          },
        }

  },
  {
    navigationOptions:({navigation})=> {
      const {routeName} = navigation.state.routes
      [navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
  )


const AppContainer = createAppContainer(DashboardTabNavigator);

export default AppContainer;
