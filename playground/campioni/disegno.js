// dichiaro variabili iniziali
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;

var mondo = init();

function init(){


//window.addEventListener("load",init);

    // create engine
    //var engine = Engine.create(),
    //        world = engine.world;
    engine = Engine.create();
    world = engine.world;


    //chiamo body la classe body del html
    //var body = document.querySelector("body");
    var contenitore = document.getElementById("containerMatter");
    console.log(contenitore);

    // dimensioni del blocco di testo in basso
    var widthBasso = document.getElementById('inBasso').offsetWidth;
    var heightBasso = document.getElementById('inBasso').offsetHeight;
    console.log("misure del blocco di testo inBasso");
    console.log(widthBasso);
    console.log(heightBasso);




   //test setBounds
   //Matter.World.setBounds(0, 0, 1800, 1800, 15);

    //provo a fare una versione fullscreen
    var larghezza = contenitore.clientWidth;
    var altezza = contenitore.clientHeight;

    // create renderer
    var render = Render.create({
        element: contenitore,
        engine: engine,
        options: {
            width: larghezza,
            height: altezza,
            showVelocity: true,
            background: 'transparent', // imposto uno sfondo
            wireframes: false, // non mostro i wireframes ma i colori
            showVelocity: false, // non mostro le freccette quando trascino oggetti
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    //variabile spessore bordo
    var spessore = 80;
    console.log("larghezza");
    console.log(larghezza);
    console.log("altezza");
    console.log(altezza);
    console.log("spessore");
    console.log(spessore);

    // add bodies
    World.add(world, [
        // falling blocks
        /*
        Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
        Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
        Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),
        Bodies.rectangle(0, 0, 70, 70, { frictionAir: 0.1 }),
        */

        //provo a disegnare dei bordi dinamici
        //sx
        Bodies.rectangle(-spessore/2, altezza/2, spessore, altezza, { isStatic: true }),
        //dx
        Bodies.rectangle(larghezza + spessore/2, altezza/2, spessore, altezza, { isStatic: true }),
        //superiore
        Bodies.rectangle(larghezza/2, - spessore/2, larghezza, spessore, { isStatic: true }),
        //bottom
        Bodies.rectangle(larghezza/2, altezza + spessore/2, larghezza, spessore, { isStatic: true })
    ]);

    // ordine orario da alto sx
    /*
    var angolo1 = Bodies.rectangle(0, 0, 100, 100, { isStatic: true });
    var tempx = larghezza - 100;
    var tempy = 0
    var angolo2 = Bodies.rectangle(tempx, 0, 100, 100, { isStatic: true });
    tempy = altezza - 100;
    var angolo3 = Bodies.rectangle(0, tempy, 100, 100, { isStatic: true });
    tempx = larghezza - 100;
    var angolo4 = Bodies.rectangle(tempx, tempy, 100, 100, { isStatic: true });
    var cerchio = Bodies.circle(0, 0, 250, { isStatic: true });
    */
    // li aggiungo al mondo
    //World.add(world, [angolo1, angolo2, angolo3, angolo4, cerchio]);
    //console.log(angolo1);
    //console.log(angolo2);

    //creo coppa
    var worldCup = Bodies.rectangle(larghezza/2, altezza-150, 160, 296, {
                isStatic: true,
                render: {
                    sprite: {
                        texture: '/playground/campioni/cup-min.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
            });
    World.add(world, [worldCup]);


    //provo mouse constraint
    //var canvasMouse = Mouse.create(worldCup);

    //var mConstraint = MouseConstraint.create(engine, { mouse: canvasMouse });

    //Events.on(worldCup, "mouseup", function(event) {
      //console.log("cliccata coppa");
    //});

    //creo i palloni
    var pallone1 = Bodies.circle(50, -10, 57, {
                density: 0.5,
                frictionAir: 0.0006,
                restitution: 0.8,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: './imgs/fevernova-min.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
            });
    var pallone2 = Bodies.circle(20, -20, 57, {
              density: 0.8,
              frictionAir: 0.0007,
              restitution: 0.9,
              friction: 0.04,
              render: {
                sprite: {
                  texture: './imgs/teamgeist-min.png',
                  xScale: 0.5,
                  yScale: 0.5
                            }
                        }
                    });
    var pallone3 = Bodies.circle(20, -20, 57, {
                              density: 0.9,
                              frictionAir: 0.0006,
                              restitution: 0.9,//rimbalzo della palla
                              friction: 0.01,
                              render: {
                                sprite: {
                                  texture: './imgs/tricolore-min.png',
                                  xScale: 0.5,
                                  yScale: 0.5
                                            }
                                        }
                                    });

    World.add(world, [pallone1, pallone2, pallone3]);
    console.log("pallone3");
    console.log(pallone3);

    //set bounds
    //World.setBounds(0, 0, 1800, 1800, 15);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: larghezza, y: altezza }
    });

    // context for MatterTools.Demo

    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };

}

var btnClick = document.getElementById('btn-reseto');
btnClick.addEventListener('click', function(){
  //event.preventDefault();
  //World.clear(world);
  //Engine.clear(engine);
  //Render.stop(render);
  //Runner.stop(runner);
  console.log(mondo);
  window.location.reload();
  //Matter.Composite.remove(world, pallone1);
  //Matter.Composite.remove(world, pallone2);
  //Matter.Composite.remove(world, pallone3);
  //init();
  //creo i palloni
  /*
  var pallone1new = Bodies.circle(50, -10, 50, {
                density: 0.05,
                frictionAir: 0.006,
                restitution: 0.8,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: './imgs/ball-1-min.png'
                    }
                }
            });
    var pallone2new = Bodies.circle(20, -20, 50, {
              density: 0.0005,
              frictionAir: 0.0007,
              restitution: 0.9,
              friction: 0.5,
              render: {
                sprite: {
                  texture: './imgs/ball-2-min.png'
                            }
                        }
                    });
    var pallone3new = Bodies.circle(20, -20, 50, {
                              density: 0.9,
                              frictionAir: 0.0006,
                              restitution: 0.9,//rimbalzo della palla
                              friction: 0.01,
                              render: {
                                sprite: {
                                  texture: './imgs/ball-5-min.png'
                                            }
                                        }
                                    });

    World.add(world, [pallone1new, pallone2new, pallone3new]);
    */
});

var btnClickAdd = document.getElementById('inBasso');
btnClickAdd.addEventListener('click', function(){
  //aggiungo pallone
  var arrayTexture = ['./imgs/teamgeist-min.png','./imgs/tricolore-min.png','./imgs/teamgeist-final-min.png','.imgs/fevernova-min.png'];
  var textureBall = Math.floor(Math.random() * 4) + 0;
  //console.log("è uscito il numero: "+ textureBall);
  var larghezzaSchermo = window.innerWidth;
  var xBall = Math.floor(Math.random() * larghezzaSchermo) + 0;
  var yBall = Math.floor(Math.random() * 3) + 0;
  var palloneNew = Bodies.circle(xBall, -10, 57, {
                density: 0.9,
                frictionAir: 0.0006,
                restitution: 0.9,//rimbalzo della palla
                friction: 0.01,
                render: {
                    sprite: {
                        texture: arrayTexture[textureBall],
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
            });

    World.add(world, [palloneNew]);
});
