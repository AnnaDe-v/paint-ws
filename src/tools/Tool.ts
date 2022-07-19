export default class Tool {
    ctx: CanvasRenderingContext2D
    canvas: HTMLCanvasElement

    constructor(canvas: any) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }

    removeEvents() {
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
    }

}