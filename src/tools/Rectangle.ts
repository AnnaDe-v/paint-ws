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

    }

    mouseMove(e: any): any {

    }

    draw(x: number, y: number, h: number, w: number) {

    }


}