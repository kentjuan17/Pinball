import Ball from "../components/Ball";
import Boundary from "../components/Boundary";
import Matter from "matter-js";
import Constants from "../Constants";
import Images from "../Images";
import RigidBody from "../components/RigidBody";
import Paths from "../Paths";
import Poly from "../Poly";
import Bumper from "../components/Bumper";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.001;

  return {
    physics: { engine, world },

    // Dome: RigidBody(world, "blue", { x: 239, y: 86 }, Paths.DOME),

    Pinball: Ball(
      world,
      "red",
      { x: Constants.SCREEN_WIDTH - 40, y: Constants.SCREEN_HEIGHT - 40 },
      14,
      {
        label: "pinball",
      }
    ),

    // Bumpers
    LeftBumper: Bumper(world, "blue", { x: 60, y: 90 }, 25),
    RightBumper: Bumper(
      world,
      "blue",
      { x: Constants.SCREEN_WIDTH / 2, y: 90 },
      25
    ),

    BoundaryB: Boundary(
      world,
      "orange",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 1.12 },
      { width: Constants.WINDOW_WIDTH, height: 10 },
      { isStatic: true, label: "BoundaryB" }
    ),

    BoundaryL: Boundary(
      world,
      "orange",
      { x: 0, y: Constants.SCREEN_WIDTH },
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 },
      { isStatic: true, label: "BoundaryL" }
    ),

    BoundaryR: Boundary(
      world,
      "orange",
      { x: Constants.SCREEN_WIDTH, y: Constants.SCREEN_WIDTH },
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 },
      { isStatic: true, label: "BoundaryR" }
    ),

    BoundaryT: Boundary(
      world,
      "orange",
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 20, width: Constants.WINDOW_WIDTH },
      { label: "BoundaryT" }
    ),
  };
};
