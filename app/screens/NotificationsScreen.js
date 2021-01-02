//TODO+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import React, { Component } from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    SafeAreaView,
    TextInput,
    StatusBar,
    Keyboard,
    KeyboardAvoidingView,
    ColorPropType,
    TouchableOpacity,
    Button,
    TouchableWithoutFeedback
    
}
    from 'react-native';

export default class WelcomeScreen extends React.Component{
    render(){

        function HomeScreen({ navigation }) {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  onPress={() => navigation.navigate('HomeScreen')}
                  title="Home"
                />
              </View>
            );
          }
          
          function NotificationsScreen({ navigation }) {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => navigation.goBack()} title="Go back home" />
              </View>
            );
          }
          
          const Drawer = createDrawerNavigator();
          
          export default function App() {
            return (
              <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={HomeScreen} />
                  <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                </Drawer.Navigator>
              </NavigationContainer>
            );
          }





        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"white", height:"100%"}}>
                <Image source={require('../screens/images/eating.jpg')}
                    style={{width:"100%", height:"45%"}}
                />
                <Text style={{
                    color: 'dodgerblue',
                    fontSize:50,
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    alignSelf:"center",
                    marginTop:20,
                   
                  
                    
                    
                    
                    
                }}
                >split-It</Text>

                <Text
                style={{
                    color: 'dodgerblue',
                    fontSize:10,
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    alignSelf:"center",
                    textAlign: 'center',
                    
                    marginHorizontal: 55,
                    marginTop: 5,
                    opacity: 0.6
                
                }}
                    
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
        )
    }
}