import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import Splash from '../app/screens/LoadingScreen';


// NAVIGATION OF SCREENS THROUGH STACKS

const screens = {
    Splash: {
        screen: Splash, navigationOptions: { header: null }
    },
    WelcomeScreen: {
        screen: WelcomeScreen, navigationOptions: { header: null }
    },



}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack)