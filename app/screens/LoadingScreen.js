


import React, { Component } from 'react';
import {
    View, Image, StyleSheet, Animated, Text, SafeAreaView
} from 'react-native';

export default class WelcomeSplashScreen extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("WelcomeScreen");
        }, 4000);
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>
                        This is the Splash Screen!
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'

    }

})

