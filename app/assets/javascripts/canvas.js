$( document ).ready(function() {

	var canvas =  document.querySelector('canvas');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var c = canvas.getContext('2d');

	console.log(canvas);

	var mouse = {
		x: undefined,
		y: undefined,
	}

	var maxRadius = 60;
	var minRadius = 15;

	var colorArray = [
	'#FAE3BA',
	'#F1523E',
	'#F27B35',
	'#FCA521',
	'#429953',
	];

	window.addEventListener('mousemove', function(event) {
			mouse.x = event.x;
			mouse.y = event.y;
	})

	window.addEventListener('resize', function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		init();
	})

	function Circle(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius
		this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

		this.draw = function() {
				
			if (this.radius < 15) {

				var line_wdth = window.innerWidth + window.innerHeight;
				c.beginPath;
				c.moveTo(this.x, this.y);
				c.lineTo((this.x + 8000), -(this.y + 8000));
				c.stroke();
			};

			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fillStyle = this.color;
			c.stroke();
			c.fill();
		}


		this.update = function() {
			if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
				this.dx = -this.dx;	
			}

			if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
				this.dy = -this.dy;	
			}

			this.x += this.dx;
			this.y += this.dy;

			//interactivity
			if (mouse.x - this.x < 50 && mouse.x - this.x > -50
				&& mouse.y - this.y < 50 && mouse.y - this.y > -50) {
				if (this.radius < maxRadius) {
					this.radius += 15; 
				}
			} else if (this.radius > this.minRadius) {
				this.radius -= 1;
			}

			this.draw();
		}
	}

	var circleArray = [];

	function init() {
		circleArray = [];
		for (var i = 0; i < 150; i++) {
			var radius = Math.random() * 3 + 1;
			var x = Math.random() * (innerWidth - radius * 2) + radius;
			var y = Math.random() * (innerHeight - radius * 2) + radius;
			var dx = (Math.random() * 1 - 0.5);
			var dy = (Math.random() * 1 - 0.5);
			circleArray.push(new Circle(x, y, dx, dy, radius));
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
	}

	init();
	animate();
});