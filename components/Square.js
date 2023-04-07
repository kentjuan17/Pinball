import Matter from "matter-js";
import React from "react";
import { Dimensions, View } from "react-native";
import Color from "../Color";

const Square = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  return (
    <View
      style={{
        position: "absolute",
        left: xPos,
        top: yPos,
        width: width,
        height: height,
        backgroundColor: props.color,
      }}
    />
  );
};

export default (world, color, pos, size, extraOptions) => {
  const theSquare = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: extraOptions.label,
      isStatic: extraOptions.isStatic,
      render: {
        fillStyle: Color.BACKGROUND,
      },
    }
  );

  Matter.World.add(world, theSquare);
  return { body: theSquare, color, pos, extraOptions, renderer: <Square /> };
};
