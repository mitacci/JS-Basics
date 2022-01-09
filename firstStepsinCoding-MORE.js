// 01. Trapeziod Area
function trapArea(input){
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let area = (b1 + b2) * h / 2;

    console.log(area.toFixed(2));

}
// 02. Triangle Area
function triangleArea(input){
    let side = Number(input[0]);
    let height = Number(input[1]);

    let area = side * height / 2;

    console.log(area.toFixed(2));

}

// 03. Celsius to Fahrenheit
function celsiusToFahrenheit(input){
    let celsius = Number(input[0]);
    let fahrenheit = celsius * 1.8 + 32;

    console.log(fahrenheit.toFixed(2));

}

// 04. Vegetable Market
function vegMarket(input){
    const EUR = 1.94;
    let veg = Number(input[0]);
    let fruit = Number(input[1]);
    let vegKg = Number(input[2]);
    let fruitKg = Number(input[3]);

    let total = (veg * vegKg + fruit * fruitKg) / EUR;

    console.log(total.toFixed(2));

}
// 05. Training Lab
function trainingLab(input){
    let length = Number(input[0]) * 100;
    let width = Number(input[1]) * 100 - 100;

    let tablesInRow = parseInt(width / 70);
    let rows = parseInt(length / 120);

    let seats = tablesInRow * rows - 3;

    console.log(seats);

}

// 06. Fishland
function fishland(input){
    let mackerelPrice = Number(input[0]); //скумрия
    let spratPrice = Number(input[1]); //цаца
    let bonitoKg = Number(input[2]); //паламуд 60% от скумрията
    let scadKg = Number(input[3]); //сафрид 80% от цацата
    let musselsKg = Number(input[4]); //миди = 7.50

    let bonitoPrice = mackerelPrice + (mackerelPrice * 0.6);
    let bonito = bonitoPrice * bonitoKg;
    let scadPrice = spratPrice + (spratPrice * 0.8);
    let scad = scadPrice * scadKg;
    let mussels = musselsKg * 7.5;

    let bill = bonito + scad + mussels;

    console.log(bill.toFixed(2));

}

// 07. House Painting
function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wall_area = ((x * x - 2 * 1.2) + x * x + 2 * (x * y - 1.5 * 1.5));
    let roof_area = 2 * x * y + 2 * x * h / 2;

    let greeen = wall_area / 3.4;
    let red = roof_area / 4.3;

    console.log(greeen.toFixed(2));
    console.log(red.toFixed(2));

}

// 08. Circle Area and Perimeter
function circleAreaPerimeter(input){
    let radius = Number(input[0]);
    let area = radius * radius * Math.PI;
    let perimeter = 2 * Math.PI * radius;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
    
}

// 09. Weather Forecast
function weatherForecast(input){
    let weather = input[0];

    if (weather == "sunny"){
        console.log("It's warm outside!");
    }else{
        console.log("It's cold outside!");
    }

}

// 10. Weather Forecast - Part 2
function weatherForecast2(input){
    let temp = Number(input[0]);

    if (5.00 <= temp && temp <= 11.9){
        console.log("Cold");
    }else if (12.00 <= temp && temp <= 14.9){
        console.log("Cool");
    }else if (15.00 <= temp && temp <= 20.00){
        console.log("Mild");
    }else if (20.1 <= temp && temp <= 25.9){
        console.log("Warm");
    }else if (26.00 <= temp  && temp <= 35.00){
        console.log("Hot");
    }else{
        console.log("unknown");
    }
}

// Function Calling ------------------------->
//trapArea(["8","13","7"]);
//=======================
/*triangleArea(["20","30"]);
triangleArea(["15","35"]);
triangleArea(["7.75","8.45"]);
triangleArea(["1.23456","4.56789"]);
*///================================ 
/*
celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);
*///=================================
//vegMarket(["0.194","19.4","10","10"]);
//vegMarket(["1.5","2.5","10","10"]);
//====================================
//trainingLab(["15", "8.9"]);
//trainingLab(["8.4", "5.2"]);
//============================
//fishland(["6.90","4.20","1.5","2.5","1"]);
//fishland(["5.55","3.57","4.3","3.6","7"]);
//fishland(["7.79","5.35","9.3","0","0"]);
//========================================
//housePainting(["6","10","5.2"]);
//housePainting(["10.25","15.45","8.88"]);
//=====================================
//circleAreaPerimeter(["3"]);
//circleAreaPerimeter(["4.5"]);
//==============================
/*weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);
*///==========================
/*weatherForecast2(["16.5"]);
weatherForecast2(["8"]);
weatherForecast2(["22.4"]);
weatherForecast2(["26"]);
weatherForecast2(["0"]);
*/