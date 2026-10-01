import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";
import DiceOne from "../assets/inverted-dice-1.png";
import DiceTwo from "../assets/inverted-dice-2.png";
import DiceThree from "../assets/inverted-dice-3.png";
import DiceFour from "../assets/inverted-dice-4.png";
import DiceFive from "../assets/inverted-dice-5.png";
import DiceSix from "../assets/inverted-dice-6.png";
const DiceScreen = () => {
  // Create the State Varible to Change Images of Dice
  const [diceImage, setDiceImage] = useState(DiceOne);

  // Create the rollDice() function to run on button onPress={} event
  const rollDice = () => {
    // Using Haptic Feedback for "PHONE's VIBRATION"
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // Generate a Random Number from 1-To-6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Using Switch Case to Display Images of Dice on the "Basis of Generated Random Number"
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
    }
  };
  return (
    <View>
      {/* Dice Image */}
      <Image source={diceImage} style={styles.imageStyle} />

      {/* 'Roll The Dice' Button  */}
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={rollDice}>
          <Text style={styles.btnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DiceScreen;

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
  },
  btn: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "blue",
  },
  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
