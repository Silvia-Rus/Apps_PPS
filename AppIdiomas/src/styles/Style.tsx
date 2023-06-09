import { StyleSheet } from "react-native";

const primaryColor = '#d31528';
const secondaryColor = '#2aa94f';
const tertiaryColor = '#ffffff';
const fourthColor = '#f6a228';
const fiveColor = '#2da6df';
const buttonBorderRadius = 0;

export default StyleSheet.create({

    container: {
        flex: 1,        
        justifyContent: "center"
    },
    image: {
        flex: 1,
        justifyContent: "center"

    },
    logo: {
        width: '100%',
        height: '60%', 
        alignContent: 'center', 
        marginTop: 60, 
                  
    },
    logoIndex: { 
        width: '100%',
        height: '20%', 
        alignItems: 'center',
        marginTop: 50,
    },
    logoHome: {
        width: '100%',
        height: '20%',
        marginTop: '10%',
    },
    inputContainer: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#696b67',        
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: buttonBorderRadius,
        color: tertiaryColor,
        marginTop: '5%',     
        borderWidth: 1,
        borderColor: tertiaryColor,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 3,
    },
    buttonAccessContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        width: '100%', 
            
        alignItems: 'center', 
    },
    button: {
        backgroundColor: '#f60069',
        width: '100%',
        padding: 20,
        alignItems: 'center',

    },
    buttonRegister: {
        backgroundColor: '#ff90ab',
        width: '100%',
        padding: 20,
    },
    buttonRole: {
        backgroundColor: secondaryColor,
        width: '100%',
        padding: 5,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
    },
    buttonError: {
        backgroundColor: primaryColor,
        width: '100%',
        padding: 15,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#ffccd1',
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    buttonOutlineRole: {
        backgroundColor:'#cccccc',
        marginTop: 5,
        borderColor: '#4d4a4b',
        borderWidth: 2,
    },
    buttonText: {
        color: tertiaryColor,
        fontWeight: '700',
        fontSize: 20,
    },
    buttonOutlineText: {
        color: fourthColor,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonRegisterText: {
        color: tertiaryColor,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',

    },
    buttonOutlineTextRole: {
        color: fiveColor,
        fontWeight: '700',
        fontSize: 16,
    },
    spinnerTextStyle: {
        color: 'white',
    },
    spinContainer: {
        position: 'absolute',
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 100,
    },
    textHome: {
        fontSize: 60,
        marginTop: 40,
        color: secondaryColor,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 20,
        color: secondaryColor,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    },


})