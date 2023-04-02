import { Dimensions } from "react-native";

const Constants = {
  SCREEN_WIDTH: Dimensions.get("screen").width,
  SCREEN_HEIGHT: Dimensions.get("screen").height,
  WINDOW_WIDTH: Dimensions.get("window").width,
  WINDOW_HEIGHT: Dimensions.get("window").height,
  GRAVITY: 0.75,
  WIREFRAMES: false,
  BUMPER_BOUNCE: 1.5,
  PADDLE_PULL: 0.002,
  MAX_VELOCITY: 50,
};

export default Constants;
