import { ThreeCircles } from "react-loader-spinner";
import { Backdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <Backdrop>
      <ThreeCircles
        height="100"
        width="100"
        radius="48"
        color="rgba(30, 97, 255, 0.7)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClassName=""
        visible={true}
      />
    </Backdrop>
  );
};

export default Loader;
