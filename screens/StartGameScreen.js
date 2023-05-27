import { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text } from "react-native";

import Colors from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  }

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 ||chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler }]);
      return;
    }

    onPickNumber(chosenNumber);
  }

 return (
  <View style= {styles.rootContainer}>
    <Title>Guess My Number</Title>
  <Card>
    <InstructionText>Enter a Number</InstructionText>
    <TextInput
      style= {styles.numberInput}
      maxLength={2}
      keyboardType="number-pad"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={numberInputHandler}
      value={enteredNumber}
    />
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
    </Card>
  </View>
 )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});
