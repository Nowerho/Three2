import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    90, // Поле зрения
    1, // соотношение сторон фективное? потом пересчитаем в зависимости от размера экрана
    0.1, // Ближайшая дистанция отсечения
    100, // Дальняя точка отсечения
  );
  camera.position.set(0,0,-4);
  return camera;
}

export { createCamera };
