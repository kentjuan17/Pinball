import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
import entities from "./entities";
import launchPinball from "./functions/launchPinball";
import randomBetween from "./functions/randomBetween";

const Physics = (entities, { touches, events, dispatch, time }) => {
  let engine = entities.physics.engine;

  // launchPinball(entities.Pinball.body);

  // Moving Left and Right Buttons
  if (events.length) {
    Sleeping.set(entities.Stopper.body, false);
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === "move-left") {
        Matter.Body.setVelocity(entities.Stopper.body, { x: -10, y: 0 });
      }
      if (events[i].type === "move-right") {
        Matter.Body.setVelocity(entities.Stopper.body, { x: 10, y: 0 });
      }
    }
  }

  Matter.Events.on(engine, "collisionStart", (event) => {
    let pairs = event.pairs;
    let objA = pairs[0].bodyA;
    let objB = pairs[0].bodyB;
    let objALabel = pairs[0].bodyA.label;
    let objBLabel = pairs[0].bodyB.label;

    if (objALabel === "pinball" && objBLabel === "bumper") {
      objB.render.fillStyle = "white";
      // console.log("A:", objALabel, "B:", objBLabel);
      // dispatch({ type: "updateScore" });
    }

    if (objALabel === "pinball" && objBLabel === "BoundaryB") {
      // console.log("GameOver. should prompt reset");
      launchPinball(entities.Pinball.body);
      dispatch({ type: "restart" });
    }

    if (objALabel === "pinball" && objBLabel === "stopper") {
      Matter.Body.setVelocity(objA, {
        x: 0,
        y: 25,
      });
    }
  });

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
