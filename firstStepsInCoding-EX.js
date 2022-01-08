//01. USD to BGN
function convertor(input){
    const FIXING = 1.79549;
    let usd = Number(input[0]);
    let bgn = usd * FIXING;

    console.log(bgn);
}

//02. Radians to Degrees
function radiansToDegrees(input){
    let rad = Number(input[0]);
    let deg = rad * 180 / Math.PI;

    console.log(deg);
}

//03. Deposit Calculator
function deposit(input){
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterest = Number(input[2]);

    let interest = depositSum * annualInterest / 100 / 12;
    let totalSum = depositSum + depositTerm * interest;

    console.log(totalSum);

}

//04. Vacation Books List
function bookList(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let time = pages / pagesPerHour / days;

    console.log(time);
    
}

//05. Supplies for School
function supplies(input){
    const PEN = 5.80;
    const MARKER = 7.20;
    const CLEANER = 1.20;
    

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaners = Number(input[2]);
    let discount = Number(input[3]) / 100;
    

    let price = pens * PEN + markers * MARKER + cleaners * CLEANER;
    let totalPrice = price - price * discount;

    console.log(totalPrice);

}

//06. Repainting
function repaint(input){
    const N = 1.50;
    const P = 14.50;
    const D = 5;

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let deluent = Number(input[2]);
    let hours = Number(input[3]);

    let materials = ((nylon + 2) * N) + ((paint + paint * 0.1) * P) + (deluent * D) + 0.40;
    let labor = materials * 0.3 * hours;

    console.log(materials + labor);
}

//07. Food Delivery
function food(input){
    const C = 10.35;
    const F = 12.40;
    const V = 8.15;
    const D = 2.50;

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let veggie = Number(input[2]);

    let menu = chicken * C + fish * F + veggie * V;
    let dessert = menu * 0.2;
    let order = menu + dessert + D;

    console.log(order);

}

//08. Basketball Equipment
function Basketball(input){

    let annualFee = Number(input[0]);

    let sneakers = annualFee - annualFee * 0.4;
    let equipment = sneakers - sneakers * 0.2;
    let ball = equipment / 4;
    let accessoirs = ball / 5;

    let totalPrice = annualFee + sneakers + equipment + ball + accessoirs;

    console.log(totalPrice);

}

//09. Fish Tank
function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let pro = Number(input[3]) / 100;

    let volume = length * width * height * 0.001; //in liters
    let neededLiters = volume * (1 -pro);

    console.log(neededLiters);

}


// Functions Calling ------------------------------>
//===================
// convertor(["22"]);
// convertor(["100"]);
// convertor(["12.5"]);
//==============================
// radiansToDegrees(["3.1416"]);
// radiansToDegrees(["6.2832"]);
//==============================
// deposit(["200", "3", "5.7"]);
// deposit(["2350","6","7"]);
//==========================
// bookList(["212", "20", "2"]);
// bookList(["432", "15","4"]);
//=============================
// supplies(["2","3","4","25"]);
// supplies(["4","2","5","13"]);
//=============================
// repaint(["10","11","4","8"]);
// repaint(["5","10","10","1"]);
//==============================
// food(["2","4","3"]);
// food(["9","2","6"]);
//=====================
// Basketball(["365"]);
// Basketball(["550"]);
//=====================
fishTank(["85","75","47","17"]);
fishTank(["105","77","89","18.5"]);