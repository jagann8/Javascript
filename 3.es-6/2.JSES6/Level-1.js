

/**
  primitive data types:
  ========================
     1.string
     2.number
     3.bigint
     4.undefined
     5.boolean

  Reference data types:
  ========================
     Objects


 */

//    var v;
//    console.log(v)


//    string interpolation


// var name="jagan";
// var clgName="PEC";


// console.log(`My name is ${name} and my college name is ${clgName}`)

// number

// var value=5.2;
// console.log(typeof value);

// false values :

// false,0,"",NaN,null,undefined

// bigint


// const v=18n

// console.log(typeof v);
//===============================================
// async / await keyword in promises....
// async function f() {
//    console.log("employee asking a question....")
//    let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("done....")
//       }, 5000)
//    })
//    console.log("employee doing other work....")
//    let result = await promise;
//    alert(result);

// }
// f();

//-----------------------------------------------------

// before ES5 class declaration has a by using function

//-----------------------------------------------------


   //  function Person(name,age){
   //     this.name=name;
   //     this.age=age;

   //  }

   //  Person.prototype.sayName=function(){
   //     console.log(`Im ${this.name}`)
   //  }
   //  Person.prototype.sayAge=function(){
   //     console.log(`My age is ${this.age}`);
   //  }

   //  var p=new Person("jagan",28);
   //  p.sayAge();
   //  p.sayName();

   //  class constructor


   class Person{
      constructor(name,age){
         this.name=name;
         this.age=age;
      }
      sayName(){
         console.log(`Im ${this.name}`)
      }
      syaAge(){
         console.log(`My age is ${this.age}`)
      }
   }


   var person1=new Person("Nag",38 )
   var person2=new Person("Mani",26 )
   var person3=new Person("Jagan",38 )
   
   // seal object means we cannot add new object properties 

   // Object.preventExtensions(person1)
   // console.log(Object.isExtensible(person1))
   // person1.skill="teaching"
   // console.log(Object.isSealed(person1))
   // Object.seal(person1);
   // person1.hobbies="studying"
   // delete person1.skill
   // console.log(person1);

   // free object means we cannot change existing object properties 


//    Object.freeze(person1)
//    person1.name="nagu"
//    console.log(person1)

// console.log(person1['age'])  // square bracket notation 
// console.log(person1.name)  // dot notation


















