import Matter, { Sleeping } from "matter-js";
import Constants from "../Constants";
import randomBetween from "./randomBetween";

export default function launchPinball(pinball) {
  Matter.Body.setPosition(pinball, {
    x: Constants.SCREEN_WIDTH - 30,
    y: Constants.SCREEN_HEIGHT - 115,
  });
  Matter.Body.setVelocity(pinball, {
    x: 0,
    y: -25 + randomBetween(-2, 2),
  });
  Matter.Body.setAngularVelocity(pinball, 0);
}
