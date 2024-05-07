// это доп плагин Threejs для управления камерой
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Vector3 } from 'three';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  // движение камеры
  const target = new Vector3(0, 0, 0);
  controls.target = target;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = -6;
  // внутренний метод для обновления позиции
  controls.tick = (delta) => {
    controls.update(delta);
  }
  return controls;
}
export { createControls };