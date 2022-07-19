import Tool from './Tool'

type mouseMoveType = {

}

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
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseMove(e: any): any {
        if(this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x: number, y: number) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }


}