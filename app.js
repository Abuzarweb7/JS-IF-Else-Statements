// Q1

// var age =prompt("Enter your age");
// if(age>=18){
//     alert("Your are adult");
// }
// else{
//     alert("Your are a minor");
//  }
// Q2
// var num =1;
// if(num>0){
//     console.log("Positive num");
// }
// else{
//     console.log("Not positive");
// }
// Q3
// var num =prompt("Enter your num");
// if(num%2===0){
//     alert("Even Number");
// }
// else{
//     alert("Odd Number");
// }
//Q4
// var admin =prompt("Enter your username");
// if(admin==="admin"){
//     alert("Welcome admin");
// }
// else{
//     alert("Access denied"); 
// }
//Q5
// var num1 = prompt("Ënter first num");
// var num2 =prompt("Ënter your second num");
// if(num1===num2){
//     console.log("Numbers are same");
// }
// else{
//     console.log("Numbers are not same");
// }
// Q6
// var num =prompt("Enter first num");
// var num2 =prompt("Enter second num");


// if(num>num2){
//     alert("First is larger");
// }
// else{
//     alert("Second is larger");
// }
// Q7
// var enterNum =prompt("Enter your Num");
// if(enterNum>=100){
//     alert("TO big");
// }
// else{
//     alert("Within range");
// }
//Q8
// var score =prompt("Enter your score");
// if(score>=50){
//     console.log("passed");
// }
// else{
//     console.log("failed");
// }
//Q9
// var temperature =prompt("Enter your temperature");
// if(temperature>=30){
// alert("Very hot");

// }
// else{
//     alert("Not hot");
// }
//Q10
// var enterZero =prompt("Enter zero num");
// if(enterZero<=0){
//     alert("Zero");

// }
// else{
//     alert("Not zero");
// }
// Q11
// var age = prompt("Enter your age");
// if(age>=60){
//     console.log("You are a senior citizen");

// }
// else{
//     console.log("You are not a senior");
// }
// Q12
// var nameAlice=prompt("Enter your name");
// if(nameAlice==="Alice"){
//     alert("Hi! Alice");
// }
// else{
//     alert("You're not Alice!");
// }
// Q13
// var enterPassword =prompt("Enter your password");
// if(enterPassword==="12345"){
//     console.log("Correct password");
// }
// else{
//     console.log("Wrong password");
// }
//Q14
    // var time = prompt("Enter your time");
    // if( time < 12){
    //     alert("Good morning");
    // }
    // else{
    //     alert("Good afternoon!");
    // }
    // Q15
    // var divisibleNum =prompt("Enter num");
    // if (divisibleNum%5==0) {
    //     console.log("Divisible by 5");
    // }
    // else{
    //     console.log("Not divisible by 5");
    // }
    //Q16
    // var yes =prompt("want to play a game (yes/no)");
    // if(yes >="yes"){
    //     alert("Let,s play")
    // }
    // else{
    //     alert("Maybe next time");
    // }
    // Q17
    // var blue = prompt("Enter your color");
    // if(blue =="blue"){
    //     console.log("Cool choice!");
    // }
    // else{
    //     console.log("Interesting color!");
    // }
    //Q18
    // var sunday = prompt("Enter Weekday");
    // if(sunday==="sunday"){
    //     alert("Weekend!");
    // } 
    // else{
    //     alert("Weekday");
    // }
// Q19
// var fruits =prompt("Enter fruits");
// if(fruits ==="banana apple"){
//     alert("We have that!");
// }
// else{
//     alert("Sorry, out of stock.");
// }
//Q20
// var start =prompt("Enter your type");
// if(start==="start"){
//     alert("Game started!");
// }
// else{
//     alert("Waiting for input...");

// }


// conditions
// Q1
// var marks =parseInt(prompt("Enter your marks"));
// if(marks>=80){
//     console.log("Distinction");
// }
// else if(marks>=50&&marks<=80){
// console.log("Pass");
// }
// else if(marks<50){
// console.log("Fail");
// }
// else{
//     console.log("Invalid Marks");
// }
// Q2

//   var age =parseInt(prompt("Enter your age"));
//   var userStatus=prompt("Membership status yes/no");
//   if(age>60 && userStatus === "yes")
//   {
//     console.log( "Senior Premium Discount");
//   }  


// else if(age<60 && userStatus==="no"){
// console.log("Senior Discount");
// }
// else if(userStatus ==="yes"){
// console.log("Premium Discount");
// }
// else{
//     console.log("No Discount");
// }


//Q3

// var login =true;
// var varifyEmail = true;
// if(login&&varifyEmail){
//     console.log("Access granted");
// }
// else if(login&&varifyEmail ===false){
// console.log("Please verify your email");
// }
// else{
//     console.log("Please log in");
// }


// Q4
// var age =parseInt(prompt("Enter your age"));toLowerCase();
// if(age>=18 && age<=35){
//     console.log();
// }

// Q5

// var subcription =prompt("Plan free/pranium");
// var loginStatus =prompt("Logi status yes/no");

// if(loginStatus === "no"){
//     console.log("plzz login");
// }
// else if(loginStatus === "yes" && subcription ==="pranium" ){
// console.log("Welcome Premium User");
// }
// else if (loginStatus ==="yes" && subcription ==="free"){
//     console.log("Welcome Free User");
// }
// else{
//     console.log("Invalid subscription");
// }
//Q6
// var productCondition =parseInt(prompt("Enter your product"));
// var member =prompt("Enter yes/no"); 
// var stock =prompt("in stock yes/no")
// if(productCondition > 1000 && stock === "yes" && member ==="yes"){
// console.log("Buy now with discount");
// }
// else if(stock ==="yes"){
// console.log("Buy now");
// }
// else if(stock === "no"){
// console.log("Out of stock");
// }   
// else{
//     console.log( "Invalid product");
// }
//Q7 
// var hoursWorked = parseInt(prompt("Enter your time"));
// var isWeekand = prompt("Enter yes/no");
// if(hoursWorked>40&& isWeekand==="no"){
//     console.log("Overtime");
// }
// else if(hoursWorked>0 && isWeekand==="yes"){
//     console.log("Weekend work");
// }
// else if(hoursWorked<=40){
//     console.log("Regular hours");
// }
// else{
//     console.log("no work");
// }
//Q8
// var age =parseInt(prompt("Ënter your age"));
// var gender =prompt("Ënter your gender");
// if(age>13&&age<19 && gender==="male"){
//     console.log("Teen Male");
// }
// else if(age>13&&age<19 && gender ==="female"){
//     console.log("Teen Female");
// }
// else if(age>=20){
//     console.log("Adult");
// }
// else{
//     console.log("Child");
// }
//Q9
// var temperature =parseInt(prompt("Enter your temperature"));
// var  humidity =parseInt(prompt("Enter your humidity"));
// if(temperature>=40 && humidity>=60){
//     console.log("Heatwave Alert");
// }
// else if(temperature>=40 && humidity<60){
// console.log("Hot and Dry");
// }
// else if(temperature<=20){
// console.log("Cool weather");
// }
// else{
//     console.log("Moderate");
// }
// Q10
// var score =parseInt(prompt("Enter your score"));
// if(score>=90 &&score<=100){
// console.log("Excellent");
// }
// else if(score>=70 && score<=89){
//     console.log("Good");
// }
// else if(score>=50 && score<=69){
// console.log("Average");
// }
// else if(score>=30 && score<=49){
// console.log("Poor");
// }
// else if(score<30){
// console.log("Fail");
// }
// else{
//     console.log("Invalid Score");
// }
//Q11



























// Q12
// var userSpeed =parseInt(prompt("Enter your speed"));
// var userLicense = prompt("Licence yes /no");
// if(userSpeed>120) {
//     console.log("License suspended");

// }
// else if(userSpeed>100  &&  userSpeed <120 ){
//     console.log("Warning");

// }
// else if(userSpeed<100 && userLicense==="yes"){
// console.log("Normal driving");
// }
// else{
//     console.log("Driving without license");
// }
// Q13
//     var isPayment =prompt("payment is yes/no")
//     var isShiped =prompt("Enter the shiped status yes /no")
//         if(isPayment === "yes" && isShiped ==="yes"){
// console.log("Order on the way");
//         }
//         else if(isPayment==="yes"&& isShiped==="no" ){
//             console.log("Preparing your order");
//         }
//         else if(isPayment==="no"){
//             console.log("Awaiting payment");
//             }
//             else{
//                 console.log("Payment failed");
//             }
//   Q14  
// var userCharge =parseInt(prompt("Enter your charge"));
// if(userCharge === 100){
//     console.log("Fully Charged");
// }
// else if(userCharge<100){
// console.log("Charging...");
// }
// else if(userCharge<20){
// console.log("Low Battery");
// }
// else{
//     console.log("Battery OK");
// }