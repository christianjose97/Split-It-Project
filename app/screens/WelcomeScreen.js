import React, { Component } from 'react';
import Icon from '@expo/vector-icons/AntDesign';
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

/*export default class WelcomeScreen extends React.Component{
    render(){
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

                    <View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        marginHorizontal: 55,
                        borderWidth:2,
                        marginTop:50,
                        paddingHorizontal:10,
                        borderColor: "dodgerblue",
                        borderRadius: 23,
                        paddingVertical:2,
                        }}>
                    <Icon name="mail" color="dodgerblue" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                        
                    </View> 

                    <View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        marginHorizontal: 55,
                        borderWidth:2,
                        marginTop:40,
                        paddingHorizontal:10,
                        borderColor: "dodgerblue",
                        borderRadius: 23,
                        paddingVertical:2,
                        }}>
                    <Icon name="mail" color="dodgerblue" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                        
                    </View>  

                    <View style={{
                        marginHorizontal:55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "dodgerblue",
                        paddingVertical: 8,
                        borderRadius:23
                    }}>
                        <Text styles={{
                            alignSelf: "center",
                            color: 'white',
                            paddingVertical:30
                        }}>
                           Sign in
                        </Text>
                    </View>
                    <Text 
                    
                    onPress={()=>navigate('Register')}
                    
                    style={{
                        alignSelf:"center",
                        color: 'dodgerblue',
                        paddingVertical:30
                    }}>
                        New User?
                        </Text>
            </View>
        )
    }
}*/

export default class WelcomeSplashScreen extends Component {

    
    render() {
        const{navigate} = this.props.navigation
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

                                <Text 
                                
                                onPress={()=>navigate('Register')}

                                style={styles.new_user}
                                
                                >New User</Text>

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
        justifyContent: 'center',
        
        
       

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
        height: 300,
        padding: 20,
        

        //backgroundColor: 'red'
        

    },

    user_input:
    {
        height: 40,
        textAlign: "left",
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 23
        
    },
    button_container: {

        backgroundColor: 'orange',
        paddingVertical: 15,
        borderWidth: 2,
        borderRadius: 23
    },
    button_text: {

        textAlign: "center",
        color: 'rgb(32, 53, 70)',
    },

    new_user: {
        alignSelf: 'center',
        color: 'black',
        paddingVertical: 30,
       



    }




})

