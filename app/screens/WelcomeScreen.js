import React, { Component } from 'react';
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
    TouchableOpacity
}
    from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class WelcomeSplashScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <Text style={styles.title}>Split-It</Text>
                            <View style={styles.info_Container}>
                                <TextInput style={styles.user_input}
                                    placeholder="Enter email or username"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />

                                <TextInput style={styles.user_input}

                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}

                                />

                                <TouchableOpacity style={styles.button_container}>
                                    <Text style={styles.button_text}>Sign In</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",
        alignItems: "center",
        justifyContent: 'center'

    },

    title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        marginBottom: 300
    },

    info_Container: {
        position: 'absolute',
        left: -110,
        right: -110,
        bottom: 0,
        height: 200,
        padding: 20,
        //backgroundColor: 'red'

    },

    user_input:
    {
        height: 40,
        textAlign: "center",
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button_container: {

        backgroundColor: 'orange',
        paddingVertical: 15
    },
    button_text: {

        textAlign: "center",
        color: 'rgb(32, 53, 70)',
    }



})

