/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: RedBlueChaos (https://sketchfab.com/kamerentorrence)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/game-res-shirt-for-male-character-629d138b40054e01b82af4541e2bc16c
title: Game Res Shirt for Male Character
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/scene.gltf",
    draco("/draco-gltf/")
  );
  return (
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.lambert1}
            material-color={props.color}
            geometry={nodes.UV_d_lambert1_0.geometry}
          />
        </group>
      </group>
    </group>
  );
}
