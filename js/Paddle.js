export default class Paddle {
  constructor(canvas, x, y, height, width, color) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.dx = 2;
    this.height = height;
    this.width = width;
    this.color = color;
  };

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  };

  update() {
    
  }
};