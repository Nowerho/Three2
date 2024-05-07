import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();
  // цвет фона
  scene.background = new Color(0x49D3F2);

  return scene;
}

export { createScene };
