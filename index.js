"use strict";
// var Arr:string[]=["Eric", "John", "Alex"];
// var newArr= Arr.forEach((data) =>{
//     console.log("Hello",data+",","would you like to learn Typescript today?");
// }
// )
// ------------------------------------------------------
// var Arr:string[]=["Eric", "john", "Alex"];
// var UpdatedArr= Arr.map((data) =>{
//  return data.toUpperCase();  
// })
// var UpdatedArr2= Arr.map((data) =>{
//  return data.toLowerCase();  
// })
// var UpdatedArr3= Arr.map((data) =>{
//  return data.charAt(0).toUpperCase()+data.substring(1).toLowerCase();  
// })
// console.log(UpdatedArr);
// console.log(UpdatedArr2);
// console.log(UpdatedArr3);
// -----------------------------------------------------------
//console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);
//------------------------------------------------------------
// var famous_person:string = "Albert Einstein";
// var message:string = "A person who never made a mistake never tried anything new.";
// console.log(famous_person,"once said,", message);
//-----------------------------------------------------------
// var nam:string = "\t Alex Helax \n";
// console.log("With WhiteSpace:",nam);
// console.log("After Striping WhiteSpace:", nam.trim());
//-----------------------------------------------------------
// ----DATED: 06.09.2023   ------------
// console.log("___________\n",5+3);
// console.log("___________\n",4*2);
// console.log("___________\n",16/2);
// console.log("___________\n",16-8);
// -------------------------------------------------------------
//--------This program prints favorite number------
// var myFavNum:number = 26;
// var message:string = "My favorite number is: ";
// console.log(message,myFavNum);
// -------------------------------------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// for(let i=0; i<names.length; i++){
// console.log(names[i]);
// }
// --------------------------------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// var msgToNames= names.forEach((n)=>{
//     console.log("Hello Mr.",  n,"lets learn Typescript");
// })
// -------------------------------------------------------
// var myCar: string[] = ["Honda","black","2020"];
// console.log("Hy! I am using ",myCar[0],"car of",myCar[1],"color and",myCar[2],"model");
// ---------------------------------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// var msgToNames= names.forEach((n)=>{
//     console.log("Hello Mr.",  n,"you are invited for dinner tonight");
// })
// ---------------------------------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// console.log("Mr.",names[1],"is not coming");
// var msgToNames= names.forEach((n)=>{
//     names.splice(1,1);
//     names.push("Ali");
//     console.log("Hello Mr.",  n,"you are invited for dinner tonight");
// }
// )
// ------------------------------------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// console.log("Before",names);
// names.push("Ali","Mik","Ayan");
// console.log("After",names,"\n Invitation to Newly Added");
// for (var i=names.length-1; i>=3; i--){
//     console.log("Mr.",names[i], "you are invited for dinner");
// }
// ---------------------------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// console.log("Before:",names);
// names.unshift("Talha");
// console.log("After adding at first:",names);
// names.splice(names.length/2, 0, "Ahmad");
// console.log("After adding at center:",names);
// names.splice(2, names.length-2);
// console.log("Less Space for guest:",names);
// console.log("Sorry Mr.", names[0], "you are not invited");
// console.log("You are still invited Mr.",names.pop());
// names.splice(0,1);
// console.log("Empty List:",names);
// ----------------------------------------------
// var places:string[]=["Switzerland", "NiagraFall", "Paris","AlMadina","Hunza"];
// console.log("Orignal Order: ",places);
// console.log("Alphabatical Order: ",[...places].sort());
// console.log("Again Orignal Order: ",places);
// console.log("Alphabatical Reverse Order: ",[...places].sort().reverse());
// console.log("Again2 Orignal Order: ",places);
// console.log("Orignal Order reverse: ",[...places].reverse());
// console.log("Again3 Orignal Order: ",places);
// console.log("Alphabatical Changed Order: ",places.sort());
// console.log("Orignal Order reversed: ",places.reverse());
// --------------------------19---------------------------------
// var names:string[]=["Usman", "Asif", "Amir"];
// console.log("Total No. of guest:",names.length);
//-----------------------------20----------------------------
// var arr:string[]=["Mountains", "River", "Contries","Cities","Languages"];
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// ------------------------------21----------------------------
// var list: {color:string,type:string, model:number}= {
//     color:"white",
//     type:"Honda",
//     model:2006
// };
// console.log(list);
//--------------------------------22--------------------
// var arr:string[]=["Mountains", "River", "Contries"];
// console.log(arr[5]);  //ERROR
// console.log(arr[1]);
//------------------------------23---------------------
// let car= `subaru`;
// console.log("Is car  == `subaru`? I predict true.");
// console.log(car==`subaru`);
// let car2=`Honda`;
// console.log("Is car2  == `subaru`? I predict False.");
// console.log(car2==`subaru`);
// console.log("Is car2 != `subaru`? I predict True.");
// console.log(car2 !=`subaru`);
// let car2=`Honda`;
// console.log("Is car2  == `Honda`? I predict true.");
// console.log(car2==`Honda`);
//-------------------------24----------------------
// let nam1:string ="ALLAHDAD";
// let nam2:string ="allahdad";
// console.log("Nam1 is equal to nam2? I predict false.");
// console.log(nam1==nam2);
// console.log("Nam1 is not equal to nam2? I predict true.");
// console.log(nam1!=nam2);
// console.log("Nam1 lowercase is equal to nam2? I predict true.");
// console.log(nam1.toLowerCase()==nam2);
//------------------------------------------------------
// let a=10;
// console.log(`Number is equal to 10: ${a==10}`);
// console.log(`Number is less then 20: ${a<20}`);
// console.log(`Number is greater then 5: ${a>5}`);
// console.log(`Number is less then equal to 5: ${a<=5}`);
// console.log(`Number is less then equal to 5 && equal to 10: ${a<=5 && a==10}`);
// console.log(`Number is less then equal to 5 || equal to 10: ${a<=5 || a==10}`);
//-------------------------------------------------------
// var list:number[]=[1,2,3,4,5];
// console.log(list);
// console.log("list includes 5 its true:",list.includes(5));
// console.log("list not includes 8 its false:",list.includes(8));
//-----------------------------------25----------------
// var alien_color:string = "green";
// if (alien_color == "green"){
//     console.log("player just earned 5 points");
// }
//------------------------------------------------
// var alien_color:string = `yellow`;
// if (alien_color == `green`){
//     console.log("player just earned 5 points");
//}
//------------------------26---------------------------
// var alien_color:string = "yelow";
// if (alien_color == "green"){
//     console.log("player just earned 5 points");
// }
// else{
// console.log("player just earned 10 points");
// }
//-----------------27---------------------------------
// var alien_color:string = "red";
// if (alien_color == "green"){
//     console.log("player just earned 5 points");
// }
// else if (alien_color== "yellow"){
// console.log("player just earned 10 points");
// }
// else if (alien_color== "red"){
// console.log("player just earned 15 points");
// }
//-------------------28----------------------------
// var age:number = 12;
// if (age < 2){
//     console.log("person is baby");
// }
// else if (age == 2 || age < 4){
//     console.log("person is toddler");
// }
// else if (age == 4 || age < 13){
//     console.log("person is kid");
// }
// else if (age == 13 || age < 20){
//     console.log("person is teenager");
// }
// else if (age == 20 || age < 65){
//     console.log("person is adult");
// }
// else if (age == 65 || age > 65){
//     console.log("person is elder");
// }
//------------------29------------------------
// var favorite_fruits: string[]= ["banana", "apple", "mangoes"];
// if (favorite_fruits.includes("bananas")){
//     console.log("you really like bananas")
// }
// else{
//     console.log("you not have your favorite fruit")
// }
//-------------------30----------------------
// var hAdmin:string []= ["admin", "user1", "user2", "user3", "user4"];
// for (let i=0; i < hAdmin.length; i++){
//     console.log("Hello!",hAdmin[i], "your login is successful");}
//     console.log("\n");
//     for (let j=0; j < hAdmin.length; j++){
//     if (hAdmin[j]== "admin"){
//         console.log("Hello!",hAdmin[j], "would you like to see status report?");
//     }
//     else{
//         console.log("Hello!",hAdmin[j], "thank you for loggin again");
//     }
// }
//-----------------------31------------------------
// var hAdmin:string []= ["admin", "user1", "user2", "user3", "user4"];
// if (hAdmin.length !== 0){
//     console.log("List of users is not empty\n");
// }
// else{
//     console.log("We need to find some users\n"); 
// }
//By Removing all users--------------------------
// var hAdmin:string []= ["admin", "user1", "user2", "user3", "user4"];
// while(hAdmin.length>0){
//     hAdmin.pop();
// }
// if (hAdmin.length==0){
//     console.log("We need some users");
// }
//==============32==========================
// var current_users:string []= ["admin", "user1", "user2", "user3", "user4"];
// var new_users:string []= ["Eric", "Alex", "User2", "David", "user3"];
// for (let i=0; i< new_users.length; i++){
// for(let j=0; j< new_users.length; j++){
//     if (new_users[i].toLowerCase()== current_users[j].toLowerCase()){
//         console.log(`User ${new_users[i]} already used`);
//         new_users.splice(i,1);
//     }
//         }}
// console.log("Available User Names:",new_users);
//==========================33======================================
// var ordialNumber:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i=0; i< ordialNumber.length; i++){
//     if(ordialNumber[i]==1) {
//         console.log(ordialNumber[i]+"st");
//     }
//     else if (ordialNumber[i]==2){
//         console.log(ordialNumber[i]+"nd");
//     }
//     else if (ordialNumber[i]==3){
//         console.log(ordialNumber[i]+"rd");
//     }
//     else {
//         console.log(ordialNumber[i]+"th");
//     }
// }
//====================34===========================
// var favPizza:string []= ["Pepperoni", "Fajita", "BBQ"];
// for(let i=0; i< favPizza.length; i++){
//          console.log(favPizza[i]);
//        }
//================================================
// var favPizza:string []= ["Pepperoni", "Fajita", "BBQ"];
// for(let i=0; i< favPizza.length; i++){
//          console.log(`I like ${favPizza[i]} pizza`);
//        }
//        console.log(`\n I like ${favPizza[0]} \n Taste of ${favPizza[1]} also good \n But,I love ${favPizza[2]} too much`)
//==================35===============================
// var animals:string []= ["Dog", "Cat", "lion"];
// for(let i=0; i< animals.length; i++){
//          console.log(animals[i]);
//        }
//        for(let i=0; i< animals.length; i++){
//         console.log("A",animals[i],"would have a great Pet");
//       }
//  console.log(`\n A ${animals[0]} \n have common with  ${animals[1]} both are faithful pets \n ${animals[2]} would be also great pet`);
//======================36================================
// function make_shirt(message:string, size:number){
// return console.log(`T-shir with messgae: ${message} & size of ${size}`);
// }
// make_shirt("BEING HUMAN", 42);
//========================37=============================
// function make_shirt(message:string, size:number){
//     return console.log(`T-shir with messgae: ${message} & size of ${size}`);
//     }
//     make_shirt("I love Typescript", 42);
//     make_shirt("I love Typescript", 20);
//     make_shirt("I love Typescript", 10);
//=====================38============================
// function describe_city(city:string, country:string="Pakistan"){
//     return console.log(`The "${city}" city is in "${country}"`);
//     }
//     describe_city("Karachi", );
//     describe_city("Peshawar",);
//     describe_city("Sharjah", "UAE");
//==================39====================================
// function city_country(city:string, country:string){
//     return console.log(`"${city},${country}"`);
//     }
//     city_country("Karachi","Pakistan");
//     city_country("Peshawar","Pakistan");
//     city_country("Lahore", "Pakistan");
//===================40=================================
function make_album(artist, title) {
    let album = {
        artist,
        title,
    };
    return album;
}
let album1 = make_album("Atif", "Zindgi");
let album2 = make_album("Jawad", "Azadi");
let album3 = make_album("Ali", "Janoon");
console.log("album1:", album1);
console.log("album2:", album2);
console.log("album3:", album3);
//===================41=================================
// var magi:string[] = ["Halex", "David", "Akasha"];
// function show_magicians(magi:any){
//     for(let i=0; i< magi.length; i++){
//     console.log(magi[i]);
//     }
//     return;
// }
// show_magicians(magi);
//====================42===============================
// var magi:string[] = ["Halex", "David", "Akasha"];
// function show_magicians(magi:any){
//     for(let i=0; i< magi.length; i++){
//     console.log("Great ",magi[i]);
//     }
//     return;
// }
// show_magicians(magi);
//===================43==========================
// var magi:string[] = ["Halex", "David", "Akasha"];
// function make_great(data:any){
//    let newMagi= magi.map((data) => {
//        return "Great "+data;
//     })
// return newMagi;
// }
// console.log("Orignal Array:",magi);
// console.log("Modified Array:",make_great(magi));
//===================44==========================
// function sandWiche(a:string[]){
//    return console.log("Sandwich Containing:",a);
// }
// sandWiche(["Paper","Vegetables","eggs"]);
// sandWiche(["Cheeze","Chicken","eggs"]);
// sandWiche(["Mayo","Beef","Tamato"]);
//=================45==========================
// function myCar(make:string,model:number){
//     let car: any ={
//         make,
//         model,
//         color:"Black",
//     }
// return car;
// }
// let car1= myCar("Honda",2021);
// let car2= myCar("Toyota",2022);
// let car3= myCar("Suziki",2023);
// console.log("Car1:",car1);
// console.log("Car2:",car2);
// console.log("Car3:",car3);
//============================================
