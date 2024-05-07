import './style/main.css';  // Подключаем стили
import ico from './images/rock.svg' //Загружаем иконку

// import draw from './modules/loadDefaulCube.js'; 
import { World } from './world/world.js';

//#####################################################################################################################################
//Загружаем favico
//#####################################################################################################################################
var link = document.createElement('link');
link.rel = 'icon';
link.href = ico;
document.head.appendChild(link);

//#####################################################################################################################################
//Основная логика проекта
//#####################################################################################################################################
function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
  
    // 1. Create an instance of the World app
    const world = new World(container);
  
    // 2. Render the scene
    world.render();
  }
  
  main();


