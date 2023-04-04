import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import Physics from "./Physics";
import React, { useEffect, useState } from "react";
import Constants from "./Constants";
import Images from "./Images";

export default function App() {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [gameEngine, setGameEngine] = useState(null);

  useEffect(() => {
    setRunning(true);
  }, []);

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
          if (e.type === "updateScore") {
            setScore(score + 10);
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

  watermark: {
    top: 300,
  },

  control: {
    elevation: 3,
    backgroundColor: "#e5a701",
    paddingVertical: 14,
    paddingHorizontal: 75,
  },
  /*controls:{
    position: "absolute",
    top: 400,
  },*/
  controlRow: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },

  centerText: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 29,
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
});
