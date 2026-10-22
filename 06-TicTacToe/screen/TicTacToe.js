import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [userTurn, setUserTurn] = useState(null);
  const [hasTossed, setHasTossed] = useState(false);
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  // Logic To Check Winner
  const checkIsWinner = (currentBoard) => {
    if (
      currentBoard[0] !== null &&
      currentBoard[0] === currentBoard[1] &&
      currentBoard[1] === currentBoard[2]
    ) {
      setWinner(`${currentBoard[0]}'s won the game! 🥳`);
    } else if (
      currentBoard[3] !== null &&
      currentBoard[3] === currentBoard[4] &&
      currentBoard[4] === currentBoard[5]
    ) {
      setWinner(`${currentBoard[3]}'s won the game! 🥳`);
    } else if (
      currentBoard[6] !== null &&
      currentBoard[6] === currentBoard[7] &&
      currentBoard[7] === currentBoard[8]
    ) {
      setWinner(`${currentBoard[6]}'s won the game! 🥳`);
    } else if (
      currentBoard[0] !== null &&
      currentBoard[0] === currentBoard[3] &&
      currentBoard[3] === currentBoard[6]
    ) {
      setWinner(`${currentBoard[0]}'s won the game! 🥳`);
    } else if (
      currentBoard[1] !== null &&
      currentBoard[1] === currentBoard[4] &&
      currentBoard[4] === currentBoard[7]
    ) {
      setWinner(`${currentBoard[1]}'s won the game! 🥳`);
    } else if (
      currentBoard[2] !== null &&
      currentBoard[2] === currentBoard[5] &&
      currentBoard[5] === currentBoard[8]
    ) {
      setWinner(`${currentBoard[2]}'s won the game! 🥳`);
    } else if (
      currentBoard[0] !== null &&
      currentBoard[0] === currentBoard[4] &&
      currentBoard[4] === currentBoard[8]
    ) {
      setWinner(`${currentBoard[0]}'s won the game! 🥳`);
    } else if (
      currentBoard[6] !== null &&
      currentBoard[6] === currentBoard[4] &&
      currentBoard[4] === currentBoard[2]
    ) {
      setWinner(`${currentBoard[6]}'s won the game! 🥳`);
    } else if (currentBoard.every((cell) => cell !== null)) {
      //Condtion to Draw The Game
      setIsDraw(true);
    }
  };

  // Create a Function to Handle Toss to detrmine who run's "0's" OR "X's"
  const handleToss = () => {
    // Used Haptics Feedback for Button Touch Vibration
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // To Check User don't click tossed multiple times
    if (hasTossed) return;

    // Create a random number (i.e, 1 or 2)
    const randomNumber = Math.floor(Math.random() * 2) + 1;

    console.log(randomNumber);

    setUserTurn(randomNumber === 1 ? "0" : "X");
    setHasTossed(true);
  };

  // Create a Handle Press Function for Alternate 0's & X's
  const handleCellPress = (index) => {
    // Used Haptics Feedback for Button Touch Vibration
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // Check User is clicked on "TOSS Button or NOT"
    if (!userTurn) {
      return Alert.alert("Toss is required.");
    }

    // Stop if the cell is occupied or someone has won
    if (board[index] !== null || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = userTurn;

    setBoard(updatedBoard);

    // Check for a winner using the updated board
    checkIsWinner(updatedBoard);
    if (winner) return;

    // Switch turns only if nobody has won
    setUserTurn(userTurn === "0" ? "X" : "0");
  };

  // Create a Reload Game Function
  const reloadGame = () => {
    // Used Haptics Feedback for Button Touch Vibration
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // Reset All State
    setBoard(Array(9).fill(null));
    setUserTurn(null);
    setHasTossed(false);
    setWinner("");
    setIsDraw(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Tic Tac Toe</Text>

      {/* Underline View */}
      <View style={styles.headerUnderline}></View>

      {/* Player's Turn Container */}
      <View style={styles.playerTurn}>
        <Pressable onPress={handleToss} disabled={hasTossed}>
          <Text style={styles.playerTurnText}>
            {isDraw
              ? "Game Draw! Reload Again 🤷"
              : winner
                ? winner
                : userTurn
                  ? `Player ${userTurn}'s Turn`
                  : "Toss"}
          </Text>
        </Pressable>
      </View>

      {/* Tic-Tac-Toe Interface Container (For 0's & X's )*/}
      <View>
        <FlatList
          data={board}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={styles.cell}
                onPress={() => handleCellPress(index)}
              >
                {item !== null ? (
                  <Text
                    style={[
                      styles.symbol,
                      item === "0" ? styles.circle : styles.cross,
                    ]}
                  >
                    {item}
                  </Text>
                ) : (
                  <FontAwesome name="pencil" size={28} color="red" />
                )}
              </Pressable>
            );
          }}
          numColumns={3}
          contentContainerStyle={styles.board}
          columnWrapperStyle={styles.row}
        />
      </View>

      {/* Reload Game Button */}
      <Pressable style={styles.btn} onPress={reloadGame}>
        <Text style={styles.btnText}>
          {winner ? "Start New Game" : "Reload Game"}
        </Text>
      </Pressable>
    </View>
  );
};

export default TicTacToe;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 48,
    includeFontPadding: false,
  },
  headerUnderline: {
    alignSelf: "center",
    height: 2,
    width: "80%",
    marginTop: -5,
    backgroundColor: "red",
  },
  playerTurn: {
    marginVertical: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#48484A",
    borderRadius: 10,
    padding: 6,
    backgroundColor: "green",
  },
  playerTurnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  },
  board: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#48484E",
    borderRadius: 25,
    alignSelf: "center",
    padding: 24,
  },
  row: {
    gap: 18,
  },
  cell: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#48484A",
    borderRadius: 16,
    backgroundColor: "#2C2C2E",
    padding: 22,
    marginTop: 10,
    marginBottom: 16,
  },
  symbol: {
    fontWeight: "bold",
    fontSize: 48,
  },
  circle: {
    color: "#00C7BE",
  },
  cross: {
    color: "#FF453A",
  },

  btn: {
    marginVertical: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#48484A",
    borderRadius: 10,
    padding: 6,
    backgroundColor: "green",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  },
});
