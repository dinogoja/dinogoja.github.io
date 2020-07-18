var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

            var geometry = new THREE.PlaneBufferGeometry( 5, 20, 32 );
            var material = new THREE.MeshBasicMaterial( {color: 0x2ac8b8, side: THREE.DoubleSide} );
            var plane = new THREE.Mesh( geometry, material );
            scene.add( plane );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				plane.rotation.x += 0.01;
				plane.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();