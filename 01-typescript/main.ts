class Point {
    constructor(private _x: number,private _y:number) {
        
    }
    drawPoint(){
        console.log(`Draw a point  at X: ${this._x} and Y: ${this._y}`);
    }
    get X () {
        return this._x;
    }
    set X(value: number){
        if (value < 0 ){
            throw new  Error('Value cannot be less than 0');
        }

        this._x = value;
    }
}
let point = new Point(1,2);
console.log(`X is ${point.X}`);

point.X = 0;
point.drawPoint();





