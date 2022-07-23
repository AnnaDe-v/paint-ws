import Tool from './Tool'


export default class Brush extends Tool {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmouseup = this.mouseUp.bind(this)
        this.canvas.onmousedown = this.mouseDown.bind(this)
        this.canvas.onmousemove = this.mouseMove.bind(this)
    }

    mouseUp(e) {
        this.mouseDown = false
    }
    mouseDown(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL()
    }

    mouseMove(e: any): any {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            this.width = currentX - this.startX;
            this.height = currentY - this.startY;
            this.draw(this.startX, this.startY, this.width, this.height)
        }
    }

    draw(x: number, y: number, w: number, h: number) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x, y, w, h)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }


}