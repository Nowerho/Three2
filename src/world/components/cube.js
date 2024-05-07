
import {
  CapsuleGeometry,
  BoxGeometry,
  Mesh,
  MathUtils,
  MeshBasicMaterial,
  TextureLoader,
  MeshStandardMaterial
} from 'three';
import THREE from "three";

function createMaterial() {

  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    './static/textures/uv-test-col.png',
    );
  // const material = new MeshStandardMaterial({ color: 'purple' });
  const material = new MeshStandardMaterial({
    map: texture,
    color: 'white',
  });
  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);
  // const geometry = new CapsuleGeometry( 1, 1, 4, 8 );

  // create a default (white) Basic material
  // const material = new MeshBasicMaterial();
  // const material = new MeshStandardMaterial({ color: "purple" });
  const material = createMaterial();
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
