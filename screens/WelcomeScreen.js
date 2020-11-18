import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import MainButton from "../components/MainButton";



const image = { uri: "https://i.pinimg.com/originals/b7/2e/37/b72e37ff09810beaab19a87577894cd0.jpg" };

const WelcomeScreen = (props) => (
    <View style={styles.container}>
        <ImageBackground
            source={image}
            style={styles.image}
            fadeDuration={1000}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                   <MainButton
                   onPress={props.firstGame}
                   >Graj</MainButton>
                </View>
            </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    button: {
        // height: 50,
        width: 220,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems:'center'



    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
     
    },
    container: {
        flex: 1,
        // flexDirection: "column",
        width: '100%',

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

});

export default WelcomeScreen;