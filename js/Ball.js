export default class Ball {
  constructor(canvas, x, y, radius, color) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.dx = 2;
    this.dy = -2
    this.radius = radius;
    this.color = color;
  };

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  };

  update() {
    if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) this.dx = -this.dx;
    if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
};