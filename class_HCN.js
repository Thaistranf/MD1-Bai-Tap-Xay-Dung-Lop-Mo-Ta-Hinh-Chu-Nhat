class Rectangle {
    x;
    y;
    width;
    height;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return Math.random()*400;
    }
    getHeight() {
        return Math.random()*200;
    }
    getDienTich() {
        return this.getWidth() * this.getHeight();
    }
    getChuVi() {
        return (this.getWidth() + this.getHeight()) * 2;
    }
    createRectangle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        let width = this.getWidth();
        let height = this.getHeight();
        ctx.rect(this.x, this.y, width, height);
        ctx.fillStyle = "#891"
        ctx.fill();
        ctx.closePath();
    }
}
let rectangle = new Rectangle(675, 300, 50, 30);
alert(`Chu vi hình chữ nhật = ${rectangle.getChuVi()}`);
alert(`Diện tích hình chữ nhật = ${rectangle.getDienTich()}`);
rectangle.createRectangle();