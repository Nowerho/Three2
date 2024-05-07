import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'three';

function createLights() {
  const mainLight = new DirectionalLight('white', 4);
  // const ambientLight = new AmbientLight('white', 0.1);
  const ambientLight = new HemisphereLight(
    0xffFFff, // bright sky color
    'gray', // dim ground color
    5, // intensity
  );
  // const light = new PointLight(0xff0000, 2000);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };