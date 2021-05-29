class GeometricObject {
    constructor(color, filled, dateCreated){
        this.color = color;
        this.filled = filled;
        this.dateCreated = dateCreated;
    }
    getColor() {
        return this.color;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(fill) {
        this.filled = fill;
    }
    getDateCreated() {
        return this.dateCreated;
    }
}

class Circle extends GeometricObject {
    constructor(color, filled, dateCreated, radius) {
        super(color, filled, dateCreated);
        this.radius = radius;
        pi = 3.14;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    getArea() {
        return pi * this.radius ** 2;
    }
    getPeremeter() {
        return 2 * pi * this.radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
}
class Rectangle extends GeometricObject {
    constructor(color, filled, dateCreated, width, height) {
        super(color, filled, dateCreated);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    getHight() {
        return this.height;
    }
    setHight(newHight) {
        this.height = newHight;
    }
    getArea() {
        return this.width * this.height;
    }
    getPeremeter() {
        return 2 * (this.width + this.height);
    }
}
