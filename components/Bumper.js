import { View, Image } from "react-native";
import Matter from "matter-js";
import Color from "../Color";
import Constants from "../Constants";
//import Images from "../Images";

const Bumper = (props) => {
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
  const bumper = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: "bumper",
    isStatic: true,
    render: {
      fillStyle: Color.BUMPER,
    },
    restitution: Constants.BUMPER_BOUNCE,
  });
  Matter.World.add(world, bumper);
  return { body: bumper, color, radius, extraOptions, renderer: <Bumper /> };
};
1;
