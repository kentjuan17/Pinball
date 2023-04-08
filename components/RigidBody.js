import Matter from "matter-js";
import React from "react";
import { View } from "react-native";

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
