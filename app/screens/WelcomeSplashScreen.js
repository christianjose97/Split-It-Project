import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeSplashScreen(props) {
    return (

        <View style={{ backgroundColor: "dodgerblue", flex: 1 }}>

            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>SpliT-IT</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        top: 750,
        backgroundColor: '#FFA500',
    },

    registerButton: {
        width: '100%',
        height: 70,
        top: 610,
        backgroundColor: '#EBF4FA',
    },
    textContainer: {
        top: 200,
        alignItems: "center",
    },

    textStyle: {

        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
    }


})

export default WelcomeSplashScreen;