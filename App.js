import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeSplashScreen from './app/screens/WelcomeScreen';
import LoadingScreen from './app/screens/LoadingScreen'

export default function App() {
  return <WelcomeSplashScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
