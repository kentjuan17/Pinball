import Matter from "matter-js";
import React from "react";
import { Dimensions, View } from "react-native";
import Color from "./../Color";

const RigidBody = (props) => {
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

export default (world, color, pos, path, extraOptions) => {
  let vertices = Matter.Vertices.fromPath(path);
  const rigidBody = Matter.Bodies.fromVertices(pos.x, pos.y, vertices, {
    isStatic: true,
    render: {
      fillStyle: "yellow",

      // add stroke and line width to fill gaps
      strokeStyle: Color.OUTER,
      lineWidth: 1,
    },
  });

  Matter.World.add(world, rigidBody);
  return {
    body: rigidBody,
    color,
    pos,
    path,
    extraOptions,
    renderer: <RigidBody />,
  };
};
