import Ball from "../components/Ball";
import Boundary from "../components/Boundary";
import Matter from "matter-js";
import Constants from "../Constants";
import RigidBody from "../components/RigidBody";
import Paths from "../Paths";
import Bumper from "../components/Bumper";
import Square from "../components/Square";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.5;

  return {
    physics: { engine, world },

    Dome: RigidBody(world, "", { x: 239, y: 86 }, Paths.DOME),

    Pinball: Ball(
      world,
      "",
      { x: Constants.SCREEN_WIDTH - 30, y: Constants.SCREEN_HEIGHT - 160 },
      14,
      {
        label: "pinball",
        restitution: 0.8,
      }
    ),

    // Rectangles
    RightRec: Square(
      world,
      "gray",
      { x: Constants.SCREEN_WIDTH - 10, y: 10 },
      {
        height: 40,
        width: 40,
      },
      {
        label: "rightRec",
        isStatic: true,
      }
    ),

    // Bumpers
    BumperUpperLeft: Bumper(world, "", { x: 70, y: 80 }, 20),
    BumperUpperRight: Bumper(world, "", { x: 240, y: 150 }, 20),
    BumperMiddleLeft: Bumper(world, "", { x: 120, y: 220 }, 20),
    BumperMiddleRight: Bumper(world, "", { x: 250, y: 300 }, 20),
    BumperLowerLeft: Bumper(world, "", { x: 80, y: 360 }, 20),
    BumperLowerRight: Bumper(
      world,
      "",
      { x: Constants.SCREEN_WIDTH / 2, y: 450 },
      20
    ),

    // Stopper
    Stopper: Square(
      world,
      "red",
      {
        x: Constants.SCREEN_WIDTH / 2,
        y: Constants.SCREEN_HEIGHT - 150,
      },
      {
        width: 100,
        height: 10,
      },
      {
        label: "stopper",
        isStatic: false,
      }
    ),
    StopperExit: Square(
      world,
      "white",
      {
        x: Constants.SCREEN_WIDTH - 30,
        y: Constants.SCREEN_HEIGHT - 150,
      },
      {
        width: 40,
        height: 10,
      },
      {
        label: "stopper-exit",
        isStatic: false,
      }
    ),

    // Wall
    WallExit: Square(
      world,
      "orange",
      { x: Constants.SCREEN_WIDTH - 60, y: Constants.SCREEN_HEIGHT - 330 },
      { width: 30, height: 800 },
      { label: "wall-exit", isStatic: true }
    ),

    // Edges
    BoundaryB: Boundary(
      world,
      "gray",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT - 30 },
      { width: Constants.WINDOW_WIDTH, height: 70 },
      { isStatic: true, label: "BoundaryB" }
    ),

    BoundaryL: Boundary(
      world,
      "gray",
      { x: 0, y: Constants.SCREEN_WIDTH },
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 },
      { isStatic: true, label: "BoundaryL" }
    ),

    BoundaryR: Boundary(
      world,
      "gray",
      { x: Constants.SCREEN_WIDTH, y: Constants.SCREEN_WIDTH },
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 },
      { isStatic: true, label: "BoundaryR" }
    ),

    BoundaryT: Boundary(
      world,
      "gray",
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 20, width: Constants.WINDOW_WIDTH },
      { label: "BoundaryT" }
    ),
  };
};
