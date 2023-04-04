import Ball from "../components/Ball";
import Boundary from "../components/Boundary";
import Matter from "matter-js";
import Constants from "../Constants";
import Images from "../Images";
import RigidBody from "../components/RigidBody";
import Paths from "../Paths";
import Bumper from "../components/Bumper";
import Square from "../components/Square";
import Wall from "../components/Wall";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.5;

  return {
    physics: { engine, world },

    Dome: RigidBody(world, "", { x: 239, y: 86 }, Paths.DOME),

    Pinball: Ball(
      world,
      "red",
      { x: Constants.SCREEN_WIDTH - 40, y: Constants.SCREEN_HEIGHT - 40 },
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
      }
    ),

    // Bumpers
    BumperUpperLeft: Bumper(world, "blue", { x: 70, y: 80 }, 20),
    BumperUpperRight: Bumper(world, "blue", { x: 240, y: 150 }, 20),
    BumperMiddleLeft: Bumper(world, "green", { x: 120, y: 220 }, 20),
    BumperMiddleRight: Bumper(world, "green", { x: 250, y: 300 }, 20),
    BumperLowerLeft: Bumper(world, "purple", { x: 80, y: 360 }, 20),
    BumperLowerRight: Bumper(
      world,
      "purple",
      { x: Constants.SCREEN_WIDTH / 2, y: 450 },
      20
    ),

    // Wall
    WallExit: Square(
      world,
      "orange",
      { x: Constants.SCREEN_WIDTH - 60, y: Constants.SCREEN_HEIGHT - 330 },
      { width: 30, height: 800 },
      { label: "wall-exit" }
    ),

    // Bottom Objects (Left and Right)
    BottomRectRight: Square(
      world,
      "gray",
      {
        x: Constants.SCREEN_WIDTH - 135,
        y: Constants.SCREEN_HEIGHT - 100,
      },
      { width: 120, height: 100 },
      { label: "rect-bottom-right" }
    ),
    BottomRectLeft: Square(
      world,
      "gray",
      {
        x: 65,
        y: Constants.SCREEN_HEIGHT - 100,
      },
      { width: 120, height: 100 },
      { label: "rect-bottom-left" }
    ),

    // Bottom Sticks Right
    BottomStickTallRight: Square(
      world,
      "gray",
      { x: Constants.SCREEN_WIDTH - 100, y: Constants.SCREEN_HEIGHT - 200 },
      { width: 10, height: 140 },
      { label: "stick-right-tall" }
    ),

    BottomStickMediumRight: Square(
      world,
      "gray",
      { x: Constants.SCREEN_WIDTH - 120, y: Constants.SCREEN_HEIGHT - 200 },
      { width: 10, height: 100 },
      { label: "stick-right-tall" }
    ),
    BottomStickShortRight: Square(
      world,
      "gray",
      { x: Constants.SCREEN_WIDTH - 140, y: Constants.SCREEN_HEIGHT - 200 },
      { width: 10, height: 60 },
      { label: "stick-right-tall" }
    ),
    BottomStickShortestRight: Square(
      world,
      "gray",
      { x: Constants.SCREEN_WIDTH - 160, y: Constants.SCREEN_HEIGHT - 180 },
      { width: 10, height: 60 },
      { label: "stick-right-tall" }
    ),

    // Bottom Sticks Left
    BottomStickTallLeft: Square(
      world,
      "gray",
      { x: 30, y: Constants.SCREEN_HEIGHT - 200 },
      { width: 10, height: 140 },
      { label: "stick-Left-tall" }
    ),

    BottomStickMediumLeft: Square(
      world,
      "gray",
      { x: 50, y: Constants.SCREEN_HEIGHT - 200 },
      { width: 10, height: 100 },
      { label: "stick-Left-tall" }
    ),
    BottomStickShortLeft: Square(
      world,
      "gray",
      { x: 70, y: Constants.SCREEN_HEIGHT - 200 },
      { width: 10, height: 60 },
      { label: "stick-Left-tall" }
    ),
    BottomStickShortestLeft: Square(
      world,
      "gray",
      { x: 90, y: Constants.SCREEN_HEIGHT - 180 },
      { width: 10, height: 60 },
      { label: "stick-Left-tall" }
    ),

    // Edges
    BoundaryB: Boundary(
      world,
      "gray",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT - 60 },
      { width: Constants.WINDOW_WIDTH, height: 20 },
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
