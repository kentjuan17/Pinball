import { Image } from "react-native";
import Matter from "matter-js";
import Images from "../Images";

const Ball = (props) => {
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
        borderWidth: 0,
        backgroundColor: props.color,
      }}
      resizeMode="stretch"
      source={Images.Pinball}
    />
  );
};

export default (world, color, pos, radius, extraOptions) => {
  const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: extraOptions.label,
    restitution: extraOptions.restitution,
  });
  Matter.World.add(world, theCircle);
  return { body: theCircle, color, radius, extraOptions, renderer: <Ball /> };
};
