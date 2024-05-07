// Имипорт компонентов
import { createCamera } from './components/camera.js';
import { createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
// Импорт системных компонентов
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

// Типа приватные переменные
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    // Создали, закинули в луп
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    // добавили в контейнер канваса контекст который получили с WebGLRenderer
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    const meshGroup = createMeshGroup();

    loop.updatables.push(controls, meshGroup);
    scene.add(ambientLight, mainLight, meshGroup);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
  start() { 
    loop.start();
  }

  stop() { 
    loop.stop();
  }
}

export { World };
