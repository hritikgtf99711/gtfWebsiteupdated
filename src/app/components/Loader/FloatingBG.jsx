import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";

const FloatingBG = () => {
  return (
    <Canvas camera={{position : [0,0,5], fov : 75}}>
      <Experience />
    </Canvas>
  );
};

export default FloatingBG;
