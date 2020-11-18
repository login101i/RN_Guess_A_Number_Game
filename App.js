import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen';
import WelcomeScreen from './screens/WelcomeScreen'


const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [guessNr, setGuessNr] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [firstGame, setFirstGame] = useState(true)
  console.log("User Number: " + userNumber + " GuessNr:  " + guessNr)



  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true)
          console.log('załadowano czcionki')
        }}
        onError={(err) => console.log(err)}
      />)
  }


  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessNr(0)
    setDataLoaded(false)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGuessNr(numberOfRounds)


  }
  const firstGameHandler = () => {
    setFirstGame(false)
  }

  let content = (
    <WelcomeScreen
      firstGame={firstGameHandler}
    />
  )

  if(!firstGame){
    content =(
      <StartScreen
      startGame={startGame}
      />

    )
  }



  if (userNumber && guessNr <= 0) {
    content = <GameScreen
      userChoice={userNumber}
      cancelGame={startGame}
      gameOver={gameOverHandler}

    />


  } else if (guessNr > 0) {

    content = <GameOverScreen
      numberOfGuesess={guessNr}
      cancelGame={startGame}

    />

  }

  return (
    <View style={styles.screen}>
      {!firstGame && <Header title="Guess a number" />}
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
