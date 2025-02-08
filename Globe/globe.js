const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 2;
camera.rotation.z = 23.4 * Math.PI / 180;

const earthMesh = new THREE.Group();

const earthSurfaceGeometry = new THREE.IcosahedronGeometry(1, 12);
const earthSurfaceMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('8081_earthmap10k.jpg')
});
const earthSurface = new THREE.Mesh(earthSurfaceGeometry, earthSurfaceMaterial);

earthMesh.add(earthSurface);

const earthCloudsGeometry = new THREE.IcosahedronGeometry(1.008, 12);
const earthCloudsMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('earthcloudmap.jpg'),
    transparent: true,
    opacity: 0.35
});

const earthClouds = new THREE.Mesh(earthCloudsGeometry, earthCloudsMaterial);

earthMesh.add(earthClouds);

const light = new THREE.DirectionalLight("#FFFFFF", 1);
light.position.set(2, 5, 4);

scene.add(camera, earthMesh, light);

const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const clock = new THREE.Clock();
function animate() {
    const elapsedTime = clock.getElapsedTime();
    earthSurface.rotation.y = elapsedTime*0.05;
    earthClouds.rotation.y = elapsedTime*0.07;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();