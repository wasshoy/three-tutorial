window.addEventListener('load', init);

const width = 960;
const height = 540;

function init() {
  // renderを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'),
  });
  renderer.setSize(width, height);

  // sceneを作成
  const scene = new THREE.Scene();

  // cameraを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, +1000);

  // 球体を作成

  // 球体のgeometryを作成
  const geometry = new THREE.SphereGeometry(300, 30, 30);

  // // 通常のmaterialを作成
  // const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

  // 画像読み込み
  const loader = new THREE.TextureLoader();
  const texture = loader.load('moonmap1k.jpg');
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  // mesh を作成 : Mesh(物体) = geometry(形) + material(質感)
  const mesh = new THREE.Mesh(geometry, material);
  // sceneに追加
  scene.add(mesh);

  // 平行光源を作成
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  // sceneに追加
  scene.add(directionalLight);

  // 自分で追加
  // 環境光を追加
  const ambientLight = new THREE.AmbientLight(0x888888); // ちょうどよくなった
  ambientLight.position.set(1, 40, 200);
  scene.add(ambientLight);

  tick();

  function tick() {
    // 毎フレームごとに実行されるイベント
    mesh.rotation.y += 0.01;
    // レンダリング = scene + camera
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}
