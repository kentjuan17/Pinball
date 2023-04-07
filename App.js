import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from "./Physics";
import React, { useState } from "react";
import Constants from "./Constants";
import Images from "./Images";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [running, setRunning] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [score, setScore] = useState(0);
  const [gameEngine, setGameEngine] = useState(null);

  const startGame = () => {
    setRunning(true);
    setInitialLoad(false);
  };

  const toggleRunning = () => {
    setRunning(!running);
  };

  return (
    <View style={styles.container}>
      <Image
        source={Images.Background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <GameEngine
        ref={(ref) => setGameEngine(ref)}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          if (e.type === "gameOver") {
            setRunning(false);
            setInitialLoad(false);
          }
          if (e.type === "updateScore") {
            setScore(score + 10);
          }
          if (e.type === "restart") {
            setRunning(false);
            setInitialLoad(true);
          }
        }}
        style={styles.gameContainer}
      >
        {<StatusBar style="auto" hidden={true} />}
      </GameEngine>
      {/* Score */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          position: "absolute",
          left: 0,
          top: 0,
          backgroundColor: "gray",
          color: "white",
          padding: 10,
        }}
      >
        Score: {score}
      </Text>
      {/* Pause/Play button */}
      <TouchableOpacity
        style={styles.pausePlayButton}
        onPress={toggleRunning}
      >
        <FontAwesome
          name={running ? "pause" : "play"}
          size={30}
          color="white"
        />
      </TouchableOpacity>
      {!running && initialLoad && (
        <TouchableOpacity style={styles.startButton} onPress={startGame}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  pausePlayButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    padding: 10,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  startButton: {
    backgroundColor: "#e5a701",
    paddingVertical: 14,
    paddingHorizontal: 75,
    borderRadius: 5,
  },
  startButtonText: {
    fontWeight: "bold",
    fontSize: 29,
    color: "white",
    textAlign: "center",
  },
});
