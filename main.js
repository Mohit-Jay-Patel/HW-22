var shape = prompt("Enter Your Shape here (1 for triangle, 2 for square, 3 for rectangle.) - ");

if(shape == 1){
var b,h;
function TriArea(){
    b = prompt("Enter the Base : ");
    h = prompt("Enter the Height : ");

    var tri = (b*h)/2;
    return tri;
}
var areaTri = TriArea();
console.log(`Area of Triangle whose Base ${b} and Height ${h} is ${areaTri}`);
}

else if(shape == 2){
var s;
function SquareArea(){
    s = prompt("Enter the Side : ");

    var square = s*s;
    return square;
}
var areaSquare = SquareArea();
console.log(`Area of Square whose Side ${s} is ${areaSquare}`);
}

else{
var l,b;
function RectArea(){
    len = prompt("Enter the Length : ");
    bre = prompt("Enter the Breadth : ");

    var rect = len*bre;
    return rect;
}
var areaRect = RectArea();
console.log(`Area of Rectangle whose Length ${len} and Breadth ${bre} is ${areaRect}`);

}