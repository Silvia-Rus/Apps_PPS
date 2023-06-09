import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "../styles/Style";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const IndexScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handlerSignUp = () => {
        navigation.replace('SignUp');
    }

    const handlerSingIn = () => {
        navigation.replace('Login');
    }

    return (
            <ImageBackground
                source={require("../../assets/background.png")}
                resizeMode="cover"
                style={styles.image}
                >
        <View style={styles.container}>
                <Image
                    // source={require('../../assets/alarmOff.png')}
                    source={require('../../assets/index.png')}

                    resizeMode="contain"
                    style={styles.logoIndex}
                />

                <View style={styles.buttonContainer} >

         

                    <TouchableOpacity
                        onPress={handlerSingIn}

                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>

         {/*            <TouchableOpacity
                        onPress={handlerSignUp}                     
                        style={styles.buttonRegister}>
                        <Text style={styles.buttonRegisterText}>Configura tu alarma</Text>
                    </TouchableOpacity> */}

          
                </View>

            </View>
        </ImageBackground>


    );
}

export default IndexScreen
