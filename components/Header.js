import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text
                style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7287b',
        paddingTop: 34,
        textAlign: 'center',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
       
  

    },
    headerTitle:{
        paddingBottom:22,
        fontSize: 22,
    }

})
