import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
import entities from "./entities";
import launchPinball from "./functions/launchPinball";

const Physics = (entities, { touches, events, dispatch, time }) => {
  let engine = entities.physics.engine;

  // Put code here
  // Pinball Launch
  launchPinball(entities.Pinball.body);

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
