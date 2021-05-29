// pi = 3.14;
class Circle {
    constructor(radius) {
        this.radius = radius;
        pi = 3.14;
    }
    getArea() {
        return pi * this.radius ** 2;
    }
    getPeremeter() {
        return 2 * pi * this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
}
const c1 = new Circle(5);
console.log(c1.getArea());
console.log(c1.getPeremeter());
c1.setRadius(7)
console.log(c1.getArea());
console.log(c1.getPeremeter());
