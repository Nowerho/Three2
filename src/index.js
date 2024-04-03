import './style/main.css';  // Подключаем стили
import ico from './images/favicon.svg'
import {
    BoxGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from 'three';


var link = document.createElement('link');
link.rel = 'icon';
link.href = ico;
document.head.appendChild(link);



// Получите ссылку на элемент-контейнер, который будет содержать нашу сцену.
const container = document.querySelector('#scene-container');

// Создаем сцену
const scene = new Scene();

// Устанавливаем фоновый цвет
scene.background = new Color('skyblue');

// Создаем камеру
const fov = 35; // Поле зрения
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // Ближайшая плоскость отсечения
const far = 100; // дальняя плоскость отсечения

const camera = new PerspectiveCamera(fov, aspect, near, far);

// каждый объект изначально создается в (0, 0, 0)
// переместите камеру назад, чтобы мы могли рассмотреть сцену
camera.position.set(0, 0, 50);

// создаем геометрию
const geometry = new BoxGeometry(2, 2, 2);

// создать базовый материал по умолчанию (белый)
const material = new MeshBasicMaterial();

// создать сетку, содержащую геометрию и материал
const cube = new Mesh(geometry, material);

// добавить сетку на сцену
scene.add(cube);

// создать рендерер
const renderer = new WebGLRenderer();

// затем установите рендерер того же размера, что и наш элемент контейнера.
renderer.setSize(container.clientWidth, container.clientHeight);

// наконец, установите соотношение пикселей так, чтобы наша сцена хорошо выглядела на дисплеях HiDPI.
renderer.setPixelRatio(window.devicePixelRatio);

// добавить на страницу автоматически созданный элемент <canvas>
container.append(renderer.domElement);

// визуализировать или «создать неподвижное изображение» сцены
renderer.render(scene, camera);