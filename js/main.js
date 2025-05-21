import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

const canvas = document.getElementById('pong');
const ctx    = canvas.getContext('2d');

const ball   = new Ball(canvas, canvas.width / 2, canvas.height - 90, 10, '#0095DD');
const paddle = new Paddle(canvas, (canvas.width - 100) / 2, canvas.height - 50, 10, 100, '#FFFFFF');

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.update();
  paddle.draw();
};

setInterval(draw, 10)