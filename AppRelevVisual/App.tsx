import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import IndexScreen from './src/screens/IndexScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import CameraScreen from './src/screens/CameraScreen';
import LikeScreen from './src/screens/LikeScreen';
import DislikeScreen from './src/screens/DislikeScreen'
import AnimatedLottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import ChartScreen from './src/screens/ChartScreen';
import Prueba from './src/screens/Prueba';

export type RootStackParamList = {
  Home: any;
  Login: any;
  Index: any;
  SignUp: any;
  Camera: any;
  Like: any;
  Dislike: any;
  Chart: any;
  
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const [lottieLoad, setLottieLoad] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLottieLoad(true)
    }, 4000);
  }, [])

  if (!lottieLoad) {
    return (
      <AnimatedLottieView duration={4000}
        autoPlay
        style={styles.splash}
        source={require('./assets/animation.json')}
      />)
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Index" component={IndexScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Camera" component={CameraScreen} />
        {<Stack.Screen options={{ headerShown: false }} name="Chart" component={ChartScreen} />}
        

        <Stack.Screen name="Like" component={LikeScreen} />
        <Stack.Screen name="Dislike" component={DislikeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b4552',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {    
    backgroundColor: '#3b4552',
  },
});


