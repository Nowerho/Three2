import {
  SphereGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from 'three';

function createMeshGroup() {
  // a group holds other objects
  // but cannot be seen itself
  const group = new Group();

  const geometry = new SphereGeometry(0.25, 16, 16);

  const material = new MeshStandardMaterial({
    flatShading: false,
    color: '#A4BF41',
  });

  const protoSphere = new Mesh(geometry, material);

  // add the protoSphere to the group
  group.add(protoSphere);

  // create twenty clones of the protoSphere
  // and add each to the group
  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();

    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);

    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  // every sphere inside the group will be scaled
  group.scale.multiplyScalar(2);

  const radiansPerSecond = MathUtils.degToRad(30);

  // each frame, rotate the entire group of spheres
  group.tick = (delta) => {
    const mayatnic = new Date().getTime() / -500
    // console.log((mayatnic));
    const X = Math.sin(mayatnic)
    const Y = Math.cos(mayatnic)
    group.rotation.z -= delta * radiansPerSecond;
    group.children[0].position.x = X * 2
    group.children[0].position.y = Y * 2
    // for (let i = 1; i < group.children.length; i++) {
    //   group.children[i].position.y += Y /20;
    // }
  };
  return group;
}

export { createMeshGroup };
