window.onload = function() {

    function init(){

            // Fetch the HTML element
	    var body = document.querySelector("body");

	    // Assign Matter.js aliases to variables for easier usage
	    var Engine = Matter.Engine,
		    World = Matter.World,
		    Bodies = Matter.Bodies,
	            MouseConstraint = Matter.MouseConstraint;

	    // Create the simulation engine, describe parameters and sets the rendering options
	    var engine = Engine.create(body,{
	    	density: 0.0005,
	        frictionAir: 0.06,
	        restitution: 0.3,
	        friction: 0.06,
	    	render: {
		    	    options: {
		    		 showAngleIndicator: false,
		    		 isStatic: true,
		    		 wireframes: false,
		    		 width: 360,
		    		 height: 640,
		    		 background: 'images/bg.png',
		    		 visible: false
		            }
	    		}
	        });

	    // Static bodies - walls
	    var ceiling = Bodies.rectangle(0, -28, 720, 60, { isStatic: true, render: { visible: false} });
	    var ground = Bodies.rectangle(40, 650, 720, 60, { isStatic: true, render: { visible: false} });
	    var wallLeft = Bodies.rectangle(-28, 310, 60, 650, { isStatic: true, render: { visible: false} });
	    var wallRight = Bodies.rectangle(388, 310, 60, 650, { isStatic: true, render: { visible: false} });

	    // Dynamic bodies
	    var pencil = Bodies.rectangle(130, 200, 39, 227, {
	        render: {
	            sprite: {
	              texture: 'images/p1.png'
	            }
	          }
	        });

	    // Mouse constraint (touching and moving bodies)
	    var mouseConstraint = MouseConstraint.create(engine);

	    // add all of the bodies to the world
	    World.add(engine.world, [pencil, ceiling, ground, wallLeft, wallRight, mouseConstraint]);

	    // Fire up the 2D engine
	    Engine.run(engine);

	}

	init();

        // add eventListener for tizenhwkey
           document.addEventListener('tizenhwkey', function(e) {
                 if (e.keyName === "back") {
                   try {
                       tizen.application.getCurrentApplication().exit();
                   } catch (ignore) {}
                 }
           });
};
