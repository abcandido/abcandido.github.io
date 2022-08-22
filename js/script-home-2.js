
//import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
//import {OrbitControls} from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

//obj loaders
//import { OBJLoader } from '/node_modules/three/examples/jsm/loaders/OBJLoader.js';

//dat.gui
// Debug
const gui = new dat.GUI();
dat.GUI.toggleHide();
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );


const cubeAg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeBg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeCg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeDg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeEg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeFg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeGg = new THREE.BoxGeometry( 1, 1, 1 );
const cubeHg = new THREE.BoxGeometry( 1, 1, 1 );



//20220713 cubi rgb test

//variabile per lunghezza cubo matrice
var cuboMatrixWidth = 2;

//lato cubo singolo
var cubeSide = 1;

//spazio tra i cubi
var cubeSpace = .000000000000000000001;

// dichiaro matrice cubi
var cuboMatrixGeometry = [];

// inizializzo matrice geometrie
for (let i=0; i < cuboMatrixWidth; i++) {
  cuboMatrixGeometry[i] = [];
  for (let j=0; j < cuboMatrixWidth; j++) {
    cuboMatrixGeometry[i][j] = [];
    for (let z=0; z < cuboMatrixWidth; z++) {
      cuboMatrixGeometry[i][j][z] = new THREE.BoxGeometry( cubeSide, cubeSide, cubeSide );
    }
  }
}

for (let i=0; i < cuboMatrixWidth; i++) {
  for (let j=0; j < cuboMatrixWidth; j++) {
    for (let z=0; z < cuboMatrixWidth; z++) {
      //console.log(cuboMatrixGeometry[i][j][z]);
    }
  }
}

//const geometry2 = new THREE.BoxGeometry( .5, .2, 1 );
//const geometry3 = new THREE.BoxGeometry( .2, 1.5, .2 );
const geometry2 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );
const geometry3 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );
const geometry4 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );
const geometry5 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );
const geometry6 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );
//new cubes here
const geometry7 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );
const geometry8 = new THREE.BoxGeometry( rndSizeCube(), rndSizeCube(), rndSizeCube() );

// Materials

const material = new THREE.MeshBasicMaterial();
const material2 = new THREE.MeshBasicMaterial();

// colors array

var colorArr = [
  "#ff3030", "#a7dfff",
  "#ff9a00", "#f44336",
  "#8ff991", "#e76ba9",
  "#40e0d0", "#d4ff00",
  "#e24848", "#fac420",
  "#88d8b0", "#94bcbf",
  "#428bca", "#5cb85c",
  "#ffaaa5", "#f37735",
  "#e86af0", "#4f5bd5",
  "#feda75", "#e3ac72",
  "#ff7f50", "#f4cccc",
  "#3aa9ae", "#2acaea",
  "#ffd700", "#00b2ee",
  "#7d6056", "#c89e8e",
  "#eb6d43", "#f5c551",
  "#8d8bb6", "#74c1b1",
  "#d88746", "#606bac",
  "#c56971", "#6b4e78",
  "#a4bf55", "#e1a849",
  "#479050", "#569b58",
  "#b5474e", "#e7ca42",
  "#bf669c", "#328ea5",
  "#2d52a6", "#e95175"];

//test material
const material3 = new THREE.MeshStandardMaterial();
material3.roughness = 1;
material3.metalness = 0;
material3.flatShading = true;
material3.color = new THREE.Color(0xfbb117);

const material4 = new THREE.MeshStandardMaterial();
material4.roughness = 1;
material4.metalness = 0;
material4.flatShading = true;
//material4.color = new THREE.Color(0xe24848);
let colTest = parseInt ( colorArr[3].replace("#","0x"), 16 );
material4.color = new THREE.Color(colTest);

const materialX = new THREE.MeshToonMaterial();
materialX.roughness = 1;
materialX.metalness = 0;
//0xeaeaea
materialX.color = new THREE.Color(0xeaeaea);

gui.add(material3,'roughness').min(0).max(1).step(0.01);
gui.add(material3,'metalness').min(0).max(1).step(0.01);

material.color = new THREE.Color(0xCCDEDE);
material2.color = new THREE.Color(0xa8b6af);

//array Materials
let arrMaterials = [];
for (let i = 0; i <  8; i++) {
  arrMaterials[i] = new THREE.MeshToonMaterial();
  arrMaterials[i].roughness = 1;
  arrMaterials[i].metalness = 0;
  arrMaterials[i].color = new THREE.Color(0xf4f4f4);
  //prevent flickering on intersection
  arrMaterials[i].polygonOffset = true;
  arrMaterials[i].polygonOffsetFactor = -0.3;
  arrMaterials[i].polygonOffsetUnits = 1;
  //different faces colors
  arrMaterials[i].vertexColors = THREE.FaceColors;
}


// Mesh
const cubeA = new THREE.Mesh(geometry,arrMaterials[0]);
const cubeB = new THREE.Mesh(geometry2,arrMaterials[1]);
const cubeC = new THREE.Mesh(geometry3,arrMaterials[2]);
const cubeD = new THREE.Mesh(geometry4,arrMaterials[3]);
const cubeE = new THREE.Mesh(geometry5,arrMaterials[4]);
const cubeF = new THREE.Mesh(geometry6,arrMaterials[5]);
const cubeG = new THREE.Mesh(geometry6,arrMaterials[6]);
const cubeH = new THREE.Mesh(geometry6,arrMaterials[7]);



//
// dichiaro matrice cubi
var cuboMatrix = [];

// dichiaro array colore vertici
var colorArr = [
  "#ffffff", "#a7dfff",
  "#ff9a00", "#f44336",
  "#8ff991", "#e76ba9",
  "#40e0d0", "#000000"];


// inizializzo matrice geometrie
let posX = 0;
let posY = 0;
let posZ = 0;
for (let i=0; i < cuboMatrixWidth; i++) {
  cuboMatrix[i] = [];
  for (let j=0; j < cuboMatrixWidth; j++) {
    cuboMatrix[i][j] = [];
    for (let z=0; z < cuboMatrixWidth; z++) {
      // creo cubo
      //let colRnd = parseInt ( colArrShuffle[i].replace("#","0x"), 16 );
      let colorTemp = new THREE.MeshToonMaterial();
      colorTemp.color = new THREE.Color("#eb6d43");
      cuboMatrix[i][j][z] = new THREE.Mesh(cuboMatrixGeometry[i][j][z], colorTemp);
      // imposto la posizione
      cuboMatrix[i][j][z].position.set(posX, posY, posZ);

      // incremento Z
      posX = posX + 1 + cubeSpace;

      // aggiungo alla scena
      scene.add(cuboMatrix[i][j][z]);
    }
    // incremento Y
    posY = posY + 1 + cubeSpace;
  }
  // incremento X
  posZ = posZ + 1 + cubeSpace;
}

for (let i=0; i < cuboMatrixWidth; i++) {
  for (let j=0; j < cuboMatrixWidth; j++) {
    for (let z=0; z < cuboMatrixWidth; z++) {
      console.log(cuboMatrixGeometry[i][j][z]);
    }
  }
}





//change cubes position
//cube2.position.x = -1;
/*
cube1.position.set(0 + rndCoordinates(), 0 + rndCoordinates(), 0 + rndCoordinates());
cube2.position.set(-1 + rndCoordinates(), .2 + rndCoordinates(), -.4 + rndCoordinates());
cube3.position.set(.5 + rndCoordinates(), 1 + rndCoordinates(), -1 + rndCoordinates());
cube4.position.set(1.2 + rndCoordinates(), -1 + rndCoordinates(), 1 + rndCoordinates());
cube5.position.set(1.9 + rndCoordinates(), .8 + rndCoordinates(), 1.2 + rndCoordinates());
cube6.position.set(-2.4 + rndCoordinates(), -1 + rndCoordinates(), -0.4 + rndCoordinates());
cube7.position.set(-1 + rndCoordinates(), -.4 + rndCoordinates(), 1.2 + rndCoordinates());
cube8.position.set( -.2 + rndCoordinates(), 0.4 + rndCoordinates(), 1.2 + rndCoordinates());

let arrCube = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8];*/
//const posCub6 = gui.addFolder('Pos Cube 6');

//posCub6.add(cube6.position,'x').min(-50).max(50).step(0.1);
//posCub6.add(cube6.position,'y').min(-50).max(50).step(0.1);
//posCub6.add(cube6.position,'z').min(-50).max(50).step(0.1);

//scene.add(cube1);
//scene.add(cube2);



// Lights

//const pointLight = new THREE.PointLight(0xffffff, 0.1);
//pointLight.position.x = 2;
//pointLight.position.y = 3;
//pointLight.position.z = 4;
//scene.add(pointLight);


const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
//pointLight2.position.set(4.7, 6.21, 9.25);
pointLight2.position.set(0, 0, 50);
pointLight2.intensity = .1;

scene.add(pointLight2);

const light1 = gui.addFolder('Light1');

light1.add(pointLight2.position,'x').min(-50).max(50).step(0.01);
light1.add(pointLight2.position,'y').min(-50).max(50).step(0.01);
light1.add(pointLight2.position,'z').min(-50).max(50).step(0.01);
light1.add(pointLight2,'intensity').min(0).max(10).step(0.01);

const pointLight3 = new THREE.PointLight(0xffffff, 0.1);
//pointLight2.position.set(4.7, 6.21, 9.25);
pointLight3.position.set(-30, 30, 0);
pointLight3.intensity = .3;
scene.add(pointLight3);

const light2 = gui.addFolder('Light2');

light2.add(pointLight3.position,'x').min(-50).max(50).step(0.01);
light2.add(pointLight3.position,'y').min(-50).max(50).step(0.01);
light2.add(pointLight3.position,'z').min(-50).max(50).step(0.01);
light2.add(pointLight3,'intensity').min(0).max(10).step(0.01);

const pointLight4 = new THREE.PointLight(0xffffff, 0.1);
//pointLight2.position.set(4.7, 6.21, 9.25);
pointLight4.position.set(0, 0, 50);
pointLight4.intensity = .3;
scene.add(pointLight4);

const light3 = gui.addFolder('Light3');

light3.add(pointLight4.position,'x').min(-50).max(50).step(0.01);
light3.add(pointLight4.position,'y').min(-50).max(50).step(0.01);
light3.add(pointLight4.position,'z').min(-50).max(50).step(0.01);
light3.add(pointLight4,'intensity').min(0).max(10).step(0.01);

const pointLight5 = new THREE.PointLight(0xffffff, 0.1);
//pointLight2.position.set(4.7, 6.21, 9.25);
pointLight5.position.set(0, -50, 0);
pointLight5.intensity = .2;
scene.add(pointLight5);

const light4 = gui.addFolder('Light4');

light4.add(pointLight5.position,'x').min(-50).max(50).step(0.01);
light4.add(pointLight5.position,'y').min(-50).max(50).step(0.01);
light4.add(pointLight5.position,'z').min(-50).max(50).step(0.01);
light4.add(pointLight5,'intensity').min(0).max(10).step(0.01);

const pointLight6 = new THREE.PointLight(0xffffff, 0.1);
//pointLight2.position.set(4.7, 6.21, 9.25);
pointLight6.position.set(0, 10, 0);
pointLight6.intensity = .2;
scene.add(pointLight6);

const light5 = gui.addFolder('Light5');

light5.add(pointLight6.position,'x').min(-50).max(50).step(0.01);
light5.add(pointLight6.position,'y').min(-50).max(50).step(0.01);
light5.add(pointLight6.position,'z').min(-50).max(50).step(0.01);
light5.add(pointLight6,'intensity').min(0).max(10).step(0.01);


const pointLight7 = new THREE.PointLight(0xffffff, 0.1);
//pointLight2.position.set(4.7, 6.21, 9.25);
pointLight7.position.set(50, 50, 0);
pointLight7.intensity = .1;
scene.add(pointLight7);

const light6 = gui.addFolder('Light6');

light6.add(pointLight7.position,'x').min(-50).max(50).step(0.01);
light6.add(pointLight7.position,'y').min(-50).max(50).step(0.01);
light6.add(pointLight7.position,'z').min(-50).max(50).step(0.01);
light6.add(pointLight7,'intensity').min(0).max(10).step(0.01);


// group boxes
const group = new THREE.Group();
/*
group.add( cube1 );
group.add( cube2 );
group.add( cube3 );
group.add( cube4 );
group.add( cube5 );
group.add( cube6 );
group.add( cube7 );
group.add( cube8 );*/

// raggruppo i cubi
for (let i=0; i < cuboMatrixWidth; i++) {
  for (let j=0; j < cuboMatrixWidth; j++) {
    for (let z=0; z < cuboMatrixWidth; z++) {
      group.add( cuboMatrix[i][j][z] );
    }
  }
}


group.add( pointLight2 );
group.add( pointLight3 );
group.add( pointLight4 );
group.add( pointLight5 );
group.add( pointLight6 );
group.add( pointLight7 );
scene.add( group );

//const pointLightHelper = new THREE.pointLightHelper(pointLight2, .3);
//scene.add(pointLightHelper);
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2.4
//add more distance on mobile
if(window.innerWidth < 600){
  camera.position.z = 4;
}
//fish eye lens
camera.fov = 50
camera.updateProjectionMatrix();

scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))





/**
 * Animate
 */

const clock = new THREE.Clock()


document.addEventListener("mousemove", onDocumentMouseMove);
let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function onDocumentMouseMove(e){
  mouseX = (e.clientX - windowX);
  mouseY = (e.clientY - windowY);
}

//scale variable
let scaleSize = 1;
let sBtn = document.querySelectorAll(".s-btn");
let mBtn = document.querySelectorAll(".m-btn");
let lBtn = document.querySelectorAll(".l-btn");
let xlBtn = document.querySelectorAll(".xl-btn");
let btnS = document.querySelectorAll(".scale-btn");

//click function
//document.getElementById("myBtn").addEventListener("click", changeCol);
document.querySelectorAll(".my-btn").forEach(trigger => {
  trigger.addEventListener('click',changeCol);
 });
 document.querySelectorAll(".w-btn").forEach(trigger => {
   trigger.addEventListener('click',restoreCol);
  });

  sBtn.forEach(trigger => {trigger.addEventListener('click',setSsize)});
  mBtn.forEach(trigger => {trigger.addEventListener('click',setMsize)});
  lBtn.forEach(trigger => {trigger.addEventListener('click',setLsize)});
  xlBtn.forEach(trigger => {trigger.addEventListener('click',setXLsize)});
//document.getElementById("wBtn").addEventListener("click", restoreCol);

function setSsize(){
    scaleSize = 0.5;
    btnS.forEach(trigger => {trigger.classList.remove("active-scale")});
    sBtn.forEach(trigger => {trigger.classList.add("active-scale")});
    for (let i = 0; i <  arrCube.length; i++) {
      arrCube[i].scale.set(scaleSize, scaleSize, scaleSize);
    }

}
function setMsize(){
  scaleSize = 1;
  btnS.forEach(trigger => {trigger.classList.remove("active-scale")});
  mBtn.forEach(trigger => {trigger.classList.add("active-scale")});
  for (let i = 0; i <  arrCube.length; i++) {
    arrCube[i].scale.set(scaleSize, scaleSize, scaleSize);
  }
}
function setLsize(){
  scaleSize = 2;
  btnS.forEach(trigger => {trigger.classList.remove("active-scale")});
  lBtn.forEach(trigger => {trigger.classList.add("active-scale")});
  for (let i = 0; i <  arrCube.length; i++) {
    arrCube[i].scale.set(scaleSize, scaleSize, scaleSize);
  }
}
function setXLsize(){
  scaleSize = 3.5;
  btnS.forEach(trigger => {trigger.classList.remove("active-scale")});
  xlBtn.forEach(trigger => {trigger.classList.add("active-scale")});
  for (let i = 0; i <  arrCube.length; i++) {
    arrCube[i].scale.set(scaleSize, scaleSize, scaleSize);
  }
}

function changeCol() {
  //
  //console.log("cliccato");
  //cube1.material.color = new THREE.Color(0x4f48e2 * Math.random());
  //cube1.material.color = new THREE.Color(0x4f48e2);
  //cube1.material.needsUpdate = true;
  //let randX, randY, randZ;
  //randX = Math.floor(Math.random() * (1.5 - .5 + 1)) + .5;
  //randY = Math.floor(Math.random() * (1.5 - .5 + 1)) + .5;
  //randZ = Math.floor(Math.random() * (1.5 - .5 + 1)) + .5;
  //cube1.scale.set(randX, randY, randZ)

  //for loop change colors
  //let scale = scaleVar;

  let colArrShuffle = colorArr;
  shuffle(colArrShuffle);
  let cubeFcs = arrCube[0];

  for (let i = 0; i <  arrCube.length; i++) {
    let colRnd = parseInt ( colArrShuffle[i].replace("#","0x"), 16 );
    arrCube[i].material.color = new THREE.Color(colRnd);
    arrCube[i].material.needsUpdate = true;
    let randX, randY, randZ;
    //Math.random() * (max - min) + min;
    randX = Math.random() * (1.4 - .6) + .6;
    randY = Math.random() * (1.4 - .6) + .6;
    randZ = Math.random() * (1.4 - .6) + .6;
    arrCube[i].scale.set(randX * scaleSize, randY * scaleSize, randZ * scaleSize);
    arrCube[i].position.x += rndCoordinates();
    arrCube[i].position.y += rndCoordinates();
    arrCube[i].position.z += rndCoordinates();


    //test random faces FaceColors -- WORKS OK 20220102
    /*
    cubeFcs = arrCube[i];
    let colArrShuffleFcs = colorArr;
    shuffle(colArrShuffleFcs);
    console.log("lci sono " + cubeFcs.geometry.faces.length + " facce");
    let indexCol = 0;
    for (let fcs = 0; fcs < cubeFcs.geometry.faces.length; fcs = fcs + 2) {
      let colRndFcs = parseInt ( colArrShuffleFcs[indexCol].replace("#","0x"), 16 );
      cubeFcs.geometry.faces[fcs].color.setHex(colRndFcs);
      cubeFcs.geometry.faces[fcs + 1].color.setHex(colRndFcs);
      cubeFcs.material.needsUpdate = true;
      cubeFcs.geometry.colorsNeedUpdate = true;
      indexCol ++;
      console.log("la faccia " + fcs + "è: "+ colRndFcs);
    }
    */
  }

}

function restoreCol() {
  //setMsize();
  for (let i = 0; i <  arrCube.length; i++) {
    arrCube[i].material.color = new THREE.Color(0xf4f4f4);
    arrCube[i].material.needsUpdate = true;
    let randX, randY, randZ;
    //Math.random() * (max - min) + min;
    randX = Math.random() * (1.4 - .6) + .6;
    randY = Math.random() * (1.4 - .6) + .6;
    randZ = Math.random() * (1.4 - .6) + .6;
    arrCube[i].scale.set(randX, randY, randZ);
    arrCube[i].position.x += rndCoordinates();
    arrCube[i].position.y += rndCoordinates();
    arrCube[i].position.z += rndCoordinates();
  }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function rndSizeCube(){
  var varRnd = Math.random() * (.7) + .2;
  //console.log("la coordinata di ridimensionamento è: " + varRnd );
  return varRnd;
}
function rndCoordinates(){
  //var varRnd = Math.floor(Math.random() * (.3)) - .15;
  var varRnd = Math.random() * (0.4) - 0.2;
  //console.log("la coordinata è: " + varRnd );
  return varRnd;
  //return Math.floor(Math.random() * (.15 - -.15 + 1)) + -.15;

}

const tick = () =>
{

    targetX = mouseX * .0015;
    targetY = mouseY * .0015;

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //cube1.rotation.y = .5 * elapsedTime
    //cube2.rotation.z = .8 * elapsedTime;
    //cube2.rotation.y = .8 * elapsedTime;
    //cube2.rotation.x = 3 * elapsedTime;

    // group rotation
    group.rotation.y = .3 * elapsedTime

    // interactive rotation
    group.rotation.y += .5 * (targetX - group.rotation.y);
    group.rotation.x += .5 * (targetY - group.rotation.x);

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


//hover hidden elements
//if desktop
let arrHiddenTexts = document.querySelectorAll(".h-text");
arrHiddenTexts.forEach(element => {
  element.addEventListener('mouseover', function(){
    this.classList.add('show-h-text');
  });
  element.addEventListener('mouseout', function(e){
     var checkVar = this;
      if(parentHasClass(checkVar,'note-ref')){
        this.parentNode.classList.add('hover-h-text');
        //this.classList.remove('h-text');
      } else {
        if(!this.classList.contains("no-link")){
          this.classList.add('hover-h-text');
        }
        //this.classList.remove('h-text');
      }
  });
 });



//hover notes
function parentHasClass(element, className) {
    if (!element || element.length == 0) {
      return false;
    }
    var parent = element;
    do {
      if (parent === document) {
        break;
      }
      if (parent.className.indexOf(className) >= 0) {
        return true;
      }
    } while (parent = parent.parentNode);
    return false;
  }

// add hover effect on notes on desktop - mouse interaction

let arrNoteRef = document.querySelectorAll(".note-ref");
let arrNoteContent = document.querySelectorAll(".note");
for(let i = 0; i < arrNoteRef.length; i++){
  //console
  // add hover effect on notes on desktop - mouse interaction
  if(window.innerWidth > 600){
    arrNoteRef[i].addEventListener('mouseover', function(){
      arrNoteContent[i].classList.add('show-note');
    });
    arrNoteRef[i].addEventListener('mouseout', function(){
      arrNoteContent[i].classList.remove('show-note');
    });
  } else {
    // add hover effect on notes on mobile - touch interaction
    arrNoteRef[i].addEventListener('click', function(){
      document.querySelector(".notes-section").classList.add('show-block-note');
      arrNoteContent[i].classList.add('show-mob-note');
    });

    //
    document.querySelectorAll('.note-ref').forEach(element => {
      element.addEventListener('click', function(){
        this.x = ((this.x || 0) + 1)%2;
        if(this.x){
          this.classList.add('note-active-mob');
          }
          else{
          this.classList.remove('note-active-mob');
          }
        });
     });

     //
     document.querySelector(".notes-section").addEventListener('click', function(){
       document.querySelector(".notes-section").classList.remove('show-block-note');
       arrNoteContent.forEach(element => {
         element.classList.remove('show-mob-note');
       });
     });
  }


}




//weather app

var tempContainer = document.querySelector('.weather');
var timeContainer = document.querySelector('.time');

fetch('https://api.openweathermap.org/data/2.5/weather?id=3181495&appid=bcaf9c31edd9e8921ce40801310ae53f')
.then(response => response.json())
.then(data => {
  //console.log(data)
  var temperatureMilan = data['main']['temp'];

    temperatureMilan = Math.round((temperatureMilan - 273.15) * 1) / 1;
    tempContainer.innerHTML = temperatureMilan;

    //time milanTime
    var milanTime = new Date(data.dt*1000+(data.timezone));
    //timeContainer.innerHTML = milanTime;
    console.log(milanTime);
    //console.log("ora: " + milanTime.getHours());

    //meteo emoji
    var weatherFace = document.querySelector('.weather-visualization');
    if(temperatureMilan < 10){
      weatherFace.innerHTML = '🥶';
    }else if (temperatureMilan < 20) {
      weatherFace.innerHTML = '😎';
    } else {
      weatherFace.innerHTML = '🥵';
    }
})
.catch(err => console.log(err))

//time milanTime
function addLeadingZero(n) {
    return n < 10 ? '0' + n : n;
}

function windTheClock(timeZoneOffset)
{
    var d = new Date();
    d.setHours(d.getUTCHours() + timeZoneOffset); // set time zone offset
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ampm = h >= 12 ? 'pm' : 'am';
    //h = h % 12;
    //h = h ? h : 12; // replace '0' w/ '12'
    h = addLeadingZero(h);
    m = addLeadingZero(m);
    s = addLeadingZero(s);

    //timeContainer.querySelector("").innerHTML = h + ':' + m + ':' + s + ' ' + ampm;
    let hrsVar = String(h);
    let minVar = String(m);
    let secVar = String(s);
    //+ ' <span class="ampm">' + ampm + '</span>'
    //timeContainer.querySelector(".hrs").innerHTML = h;
    //timeContainer.querySelector(".min").innerHTML = m;
    //timeContainer.querySelector(".sec").innerHTML = s;
    //timeContainer.querySelector(".hrs").querySelector(".unit").innerHTML = hrsVar.charAt(1);
    //timeContainer.querySelector(".min").querySelector(".dec").innerHTML = minVar.charAt(0);
    //timeContainer.querySelector(".min").querySelector(".unit").innerHTML = minVar.charAt(1);
    //timeContainer.querySelector(".sec").querySelector(".dec").innerHTML = secVar.charAt(0);
    //timeContainer.querySelector(".sec").querySelector(".unit").innerHTML = secVar.charAt(1);
    timeContainer.querySelector(".hh").innerHTML = h;
    timeContainer.querySelector(".mm").innerHTML = m;
    //timeContainer.innerHTML = 'Milan ' + h + '<span class="blinking-dots">:</span>' + m ;

    setTimeout(function(){ windTheClock(timeZoneOffset) }, 1000);
}

window.onload = function() {
    windTheClock(2);
}





/**/
