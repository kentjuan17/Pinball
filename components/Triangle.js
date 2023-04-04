import { View } from "react-native";
import Matter from "matter-js";

const Triangle = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  return (
    <View
      style={{
        width: width,
        height: height,
        left: xPos,
        top: yPos,
        position: "absolute",
        borderLeftWidth: 60,
        borderRightWidth: 60,
        borderBottomWidth: 120,

        backgroundColor: props.color,
      }}
    />
  );
};

export default (world, color, pos, sides, radius, extraOptions, maxSides) => {
  const theTriangle = Matter.Bodies.polygon(
    pos.x,
    pos.y,
    sides,
    radius,
    {
      label: extraOptions.label,
      isStatic: true,
      chamfer: extraOptions.chamfer,
    },
    maxSides
  );
  Matter.World.add(world, theTriangle);
  return {
    body: theTriangle,
    color,
    sides,
    radius,
    extraOptions,
    maxSides,
    renderer: <Triangle />,
  };
};
