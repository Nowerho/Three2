import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  // Физически корректный свет?? в учебнике написано что он рсчитывает удаление от
  // источника света, нужно проверить это с точечным источником, с амбиентом изменений нет
  renderer.physicallyCorrectLights = true;
  
  return renderer;
}

export { createRenderer };
