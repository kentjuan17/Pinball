import Matter, { Sleeping } from "matter-js";
import launchPinball from "./functions/launchPinball";
import randomBetween from "./functions/randomBetween";

const Physics = (entities, { touches, events, dispatch, time }) => {
  let engine = entities.physics.engine;

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
      dispatch({ type: "updateScore" });
    }

    if (objALabel === "pinball" && objBLabel === "BoundaryB") {
      launchPinball(entities.Pinball.body);
      dispatch({ type: "gameOver" });
    }

    if (objALabel === "pinball" && objBLabel === "stopper") {
      Matter.Body.setVelocity(objA, {
        x: 0,
        y: randomBetween(-35, -20),
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
