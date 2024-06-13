javascript
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 79) { // 79 es el código que identifica al botón del auricular //
        // Trigger a function in Construct 3
        runtime.callFunction('BOTON_PRESIONADO');
		}
    if(event.keyCode === 25) { // 79 es el código que identifica al botón del auricular //
        // Trigger a function in Construct 3
        runtime.callFunction('VOLUMEN');
    	}
		});