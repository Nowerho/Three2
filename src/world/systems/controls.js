import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.5;
  controls.tick = () => controls.update();
  // move the camera
  camera.position.set(10,0,0);

  // and/or rotate the camera
  camera.rotation.set(210.0, 90, 90);
  controls.listenToKeyEvents(window);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 10;
  // then tell the controls to update
  controls.update();
  return controls;
}
export { createControls };