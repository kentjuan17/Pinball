import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
import entities from "./entities";
import launchPinball from "./functions/launchPinball";
import randomBetween from "./functions/randomBetween";

const Physics = (entities, { touches, events, dispatch, time }) => {
  let engine = entities.physics.engine;

  if (events.length) {
    Sleeping.set(entities.Pinball.body, false);
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === "move-left") {
        Matter.Body.setVelocity(entities.Pinball.body, { x: -2, y: 0 });
      }
      if (events[i].type === "move-right") {
        Matter.Body.setVelocity(entities.Pinball.body, { x: 2, y: 0 });
      }
    }
  }

  // Tapping the ball
  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      // Pinball Launch
      launchPinball(entities.Pinball.body);
    });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
