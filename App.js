import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [guessNr, setGuessNr] = useState(0)
  console.log("User Number: " + userNumber + " GuessNr:  "  + guessNr)


  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessNr(0)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGuessNr(numberOfRounds)
 

  }


  let content = (
      <StartScreen
        startGame={startGame}
      />
  )

  if (userNumber && guessNr <=0) {
    content = <GameScreen
      userChoice={userNumber}
      cancelGame={startGame}
      gameOver={gameOverHandler}

    />


  } else if (guessNr>0) {

    content = <GameOverScreen
    numberOfGuesess={guessNr}
      cancelGame={startGame}
    
    />

  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',

  },
});
