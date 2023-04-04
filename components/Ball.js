import { View, Image } from "react-native";
import Matter from "matter-js";
import Color from "../Color";

const Ball = (props) => {
  const width = props.radius * 2;

  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - width / 2;

  return (
    <View
      style={{
        width: width,
        height: width,
        left: x,
        top: y,
        position: "absolute",
        borderRadius: props.radius,
        backgroundColor: props.color,
      }}
    />
  );
};

export default (world, color, pos, radius, extraOptions) => {
  const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: extraOptions.label,
    restitution: extraOptions.restitution,
    collisionFilter: {
      // group: stopperGroup,
    },
    render: {
      fillStyle: Color.PINBALL,
    },
  });
  Matter.World.add(world, theCircle);
  return { body: theCircle, color, radius, extraOptions, renderer: <Ball /> };
};
1;
