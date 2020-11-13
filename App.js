import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'

export default function App() {

const [userNumber, setUserNumber]=useState()

const startGame=(selectedNumber)=>{
  setUserNumber(selectedNumber)
}


let content =<StartScreen
startGame={startGame}
/>
if(userNumber){
  content=<GameScreen
  userChoice={userNumber}

  />
}

  return (
    <View style={styles.screen}>
     <Header title="Guess  a number"/>
    {content}
    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // width:'100%',
    
  },
});
