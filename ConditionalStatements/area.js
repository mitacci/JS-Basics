function area(input){
    let shape = input[0];
    
    if (shape === "square") {
        let side = Number(input[1]);
        let squareArea = side * side;
        console.log(squareArea.toFixed(3));
    } else if (shape === "circle"){
        let radius = Number(input[1]);
        let circleArea = Math.PI * radius * radius;
        console.log(circleArea.toFixed(3));
    } else if (shape === "rectangle") {
        let length = Number(input[1]);
        let width = Number(input[2]);
        let rectangleArea = length * width;
        console.log(rectangleArea.toFixed(3));
    } else if (shape === "triangle") {
        let height = Number(input[1]);
        let base = Number(input[2]);
        let triangleArea = 0.5 * base * height;
        console.log(triangleArea.toFixed(3));
    }



}
