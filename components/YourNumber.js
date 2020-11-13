import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import colors from '../config/colors'

export default function YourNumber(props) {
    return (
        <View style="container">
            <Text style={styles.number}>{props.children}</Text>
          
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical:11
    

    },
    number: {
        fontSize: 40,
        color: colors.primary,
        marginVertical: 10,
        textAlign:'center',
     

    },
   
})
