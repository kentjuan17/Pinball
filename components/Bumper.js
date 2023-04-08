import { Image } from "react-native";
import Matter from "matter-js";
import Images from "../Images";

const Bumper = (props) => {
  const width = props.radius * 2;

  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - width / 2;

  return (
    <Image
      style={{
        width: width,
        height: width,
        left: x,
        top: y,
        position: "absolute",
        borderRadius: props.radius,
        backgroundColor: props.color,
      }}
      resizeMode="stretch"
      source={Images.Bumper}
    />
  );
};

export default (world, color, pos, radius, extraOptions) => {
  const bumper = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: "bumper",
    isStatic: true,
    render: {
      fillStyle: color,
    },
    restitution: 1,
  });
  Matter.World.add(world, bumper);
  return { body: bumper, color, radius, extraOptions, renderer: <Bumper /> };
};
1;
