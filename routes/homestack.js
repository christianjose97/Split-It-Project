import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../app/screens/WelcomeScreen';

//Cofigure Splash to Loading sreen
import Splash from '../app/screens/LoadingScreen';

import Register from'../app/screens/Register';


//NAVIGATION OF SCREENS THROUGH STACKS
const stackNavigatorOptions = {
    headerShown:false
}

const AppNavigator = createStackNavigator({
    Splash: {screen: Splash},
    WelcomeScreen: {screen: WelcomeScreen},
    Register: {screen: Register}
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);

export default createAppContainer(AppNavigator)