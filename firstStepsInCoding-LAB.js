//01. Hello SoftUni
function helloSoftUni(){
    console.log("Hello SoftUni")
}
//)02. Numbers from 1 to 10
function nums1To10(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
//03. Square Area
function squareArea(input){
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);
}
//04. Convertor: Inches to Centimeters
function inchesToCentimeters(input){
    let num = Number(input[0]);
    const inch = 2.54; // 1 inch = 2.54 centimeters
    result = num * inch;
    console.log(result);
}
//05. Greetings by Name
function greetings(input){
    let name = input[0];
    console.log(`Hello, ${name}!`);
}
//06. Concatenate Data
function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
//07. Projects Creation
function projects(input){
    let architectName = input[0];
    let projectsNumber = Number(input[1]);
    const projectTime = 3; //1 project needs 3 hours
    let hoursNeeded = projectsNumber * projectTime;

    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsNumber} project/s.`)

}
//08. Pet Shop
function petShop(input){
    let dogfoodNum = Number(input[0]);
    let catFoodNum = Number(input[1]);
    const DOG = 2.50;
    const CAT = 4;
    result = dogfoodNum * DOG + catFoodNum * CAT;

    console.log(`${result} lv.`);
}
//09 Yard Greening
function yardGreening(input){
    let squareMeters = Number(input[0]);
    const squarePrice = 7.61;
    const discount = 0.18;
    let price = squareMeters * squarePrice;
    let totalDiscount = price * discount;
    let totalPrice = price - totalDiscount;
    

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${totalDiscount} lv.`);
}


// Functions Calling stats here ----------------------------------->

//helloSoftUni();
//nums1To10();
//squareArea(["5"])
//inchesToCentimeters(["5"]);
//inchesToCentimeters(["7"]);
//greetings(["Niki"]);
//concatenateData(['Maria', 'Ivanova', 20, 'Sofia']);
//projects(["George", "4"]);
//projects(["Sanya ", "9 "]);
/*petShop(["5 ",
"4 "]
);
petShop(["13",
"9"]
);
*/
yardGreening(["550"]);
yardGreening(["150"]);
