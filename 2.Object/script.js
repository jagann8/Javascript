
//===========================================================================================
//1.Creating object with a constructor:
//===========================================================================================

// function vehicle(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }
// let car = new vehicle("Jagan","BMW","2000CC")
// console.log(car.name);
// console.log(car.maker);
// console.log(car.engine);

//===========================================================================================
//Using Object literal
//===========================================================================================

// let vehicle={
//     name:"jagan",
//     maker:"BMW",
//     engine:"2000CC"
// }
// console.log(vehicle.name)
// console.log(vehicle.maker);
// console.log(vehicle['engine']);

//===========================================================================================
// Creating object with Object.create() method:
//===========================================================================================

// let audit={
//     isStudying:false,
//     printIntroduction:function(){
//         console.log(`My name is ${this.name} and iam studying ${this.isStudying}`)
//     }
// }
// let student= Object.create(audit);
// student.name="mani";
// student.age=26
// student.isStudying=true;
// student.printIntroduction();
// console.log(student)
//===========================================================================================
//  Using es6 classes:
//===========================================================================================
// class vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
// }
// let car = new vehicle("Kingjaga","RR",'1000cc');
// console.log(car.name);
// console.log(car.maker);
// console.log(car.engine);
//===========================================================================================
// Type conversion
//===========================================================================================
// number to string

// explicit coercion

// let number=28;
// let string=String(number); // way-1
// let string=toString(number); // way-2
// console.log(typeof string)

// implicit coercion

// let number=12;
// let string=""+number;
// console.log(typeof string);

// string to number
// let string="8";
// let number=Number(string) // way-1
// let  number=Number.parseInt(string); // way-2
// console.log(typeof number);


// javascript consider has a empty array and empty object consider has a true

//  let array={};

// if(array){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//===========================================================================================
//===========================================================================================



