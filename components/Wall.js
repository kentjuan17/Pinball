import Matter from "matter-js";
import React from "react";
import { Dimensions, View } from "react-native";

const Wall = (props) => {
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
  const wall = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    angle: extraOptions.angle,
    isStatic: true,
    chamfer: { radius: 10 },
    render: {
      fillStyle: extraOptions.color,
    },
  });

  Matter.World.add(world, wall);
  return { body: wall, color, pos, extraOptions, renderer: <Wall /> };
};
