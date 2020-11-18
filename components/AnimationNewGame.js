import React from 'react'
import { StyleSheet, Text, View, Modal} from 'react-native'
import LottieView from 'lottie-react-native'



export default function ({visible, onDone}) {
    if(!visible) return null
    return (
        <View style={styles.container}>
            <LottieView 
            source={require('../assets/animation/loader.json')}
            autoPlay
            
            style={styles.lottie}
         
         
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:50
    },
   lottie:{
    
       width:422,
       height:422,
       maxWidth:'80%',
       maxHeight:'80%'
   }
})
