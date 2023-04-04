import { View } from "react-native";
import Matter from "matter-js";

const Stopper = (props) => {
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
        //backgroundColor: props.color,
        //transform: [{ rotate: angle }],
        position: "absolute",
        borderRadius: props.radius,
        backgroundColor: props.color,
      }}
      resizeMode="stretch"
    />
  );
};

export default (world, color, pos, radius, extraOptions) => {
  const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius, {
    isStatic: true,
    render: {
      visible: false,
    },
    collisionFilter: {
      group: stopperGroup,
    },
    plugin: {
      attractors: [
        // stopper is always a, other body is b
        function (a, b) {
          if (b.label === attracteeLabel) {
            let isPaddleUp = side === "left" ? isLeftPaddleUp : isRightPaddleUp;
            let isPullingUp = extraOptions.position === "up" && isPaddleUp;
            let isPullingDown = extraOptions.position === "down" && !isPaddleUp;
            if (isPullingUp || isPullingDown) {
              return {
                x:
                  (a.extraOptions.position.x - b.extraOptions.position.x) *
                  PADDLE_PULL,
                y:
                  (a.extraOptions.position.y - b.extraOptions.position.y) *
                  PADDLE_PULL,
              };
            }
          }
        },
      ],
    },
  });
  Matter.World.add(world, theCircle);
  return {
    body: theCircle,
    color,
    radius,
    extraOptions,
    renderer: <Stopper />,
  };
};
1;
