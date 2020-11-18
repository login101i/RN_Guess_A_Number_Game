import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TitleText from './TitleText'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <TitleText
                style={styles.headerTitle}>{props.title}
            </TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7287b',
        paddingTop: 34,
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:20
    
    },
    headerTitle: {
        paddingBottom: 22,
        fontSize: 22,
    }

})
