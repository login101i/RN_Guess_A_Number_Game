import { disableExpoCliLogging } from 'expo/build/logs/Logs'
import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function Input(props) {
    return (
      <TextInput onblur={disableExpoCliLogging} {...props} style={{...styles.input, ...props.style}}></TextInput>
    )
}

const styles = StyleSheet.create({

    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginVertical: 23,
        padding: 10,
      textAlign:'center',
     

    },
})
