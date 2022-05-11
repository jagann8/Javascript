
// Object

// const obj=new Object();
// obj.name="jagan";
// obj.age=22;
// obj.sayName=function(){
//     console.log(`Im ${this.name}`);
// }
// console.log(obj.sayName)

// or literal style

// let obj2={
//     name:"jagn",
//     age:22,
//     sayName:function(){
//         console.log(`Im ${this.name}`)
//     }
// };

// obj2.sayName()


// Array // way-1

// const menu= new Array();

// menu[0]="food-1"
// menu[1]="food-2"
// menu[2]="food-3"


// way-2

// const menu=['idly','vada','sambar','biriyani']
// console.log(menu)

// Regular Expression

// const adharPattern=/^IND-\d{4}-\d{4}-\d{4}$/
// const adhar='IND-1212-1213-1314'
// console.log(adharPattern.test(adhar))

// var v = 12
// function f1() {
//     var v = 13
//     console.log(v)
// }
// console.log(v)
// f1()


// there are two types of functions

// 1.function declaration
// 2.function expression

// function makeAddition() {
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
//     console.log(arguments[3])
//     console.log(arguments[4])
//     console.log(arguments.length)
// }
// makeAddition(10,20,30,40,50)


// function addition(a,b){
//   let result=a+b;
//   return result;
// }

// let actulalResult=addition(2,3)
// console.log(actulalResult)

// A function can be stored into another variable or Value
// let greet= function greeting(){
//     console.log("Helo Dear Good....")
// }
// greet(s)

//===========================================================

// function with default parameters


// function f2(a = -1, b = 23) {

// if (!a)
//     a = 1
// if (!b)
//     b = 2

// or

// a = a || 1
// b = b || 2

// console.log(a)
// console.log(b)
// console.log(c)

// }
// f2()
//========================================================

//Quiz

// function makeFunction(a,b,...c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// makeFunction(1,2,3,4,5,6,7,8,9,0)
//========================================================

// function can pass in another function parameter...


// function greet(f){
//     console.log("---------------")
//     if(f)
//     f()
//     else
//     console.log("Welcome.....")
// }   

// function teluguGreet(){
//     console.log("Namaskar JAGA");
// }

// greet(teluguGreet)


// sorting

// let array=[9,6,4,2,3,5,1,7,0,8,11];


// let sortFunction=(x,y)=>{
//     return x-y;
// }
// console.log(array.sort(sortFunction))
//=============================================================
// function can also return a function
//=============================================================
// function teach(){
//     console.log("teaching javascript");
//     let learn=function(){
//         console.log("learning javascript");
//     }
//     return learn(   );
// }
// teach()

//------------------------------------------------------------------

// Without Higher Order Function

//------------------------------------------------------------------

// function hello() {
//     console.log("hello")
//     console.log(' 😆 ')
// }
// function hi() {
//     console.log('hi');
//     console.log(' 😆 ')
// }
// hello()
// hi()

//------------------------------------------------------------------
// with higher order function 
//------------------------------------------------------------------

// way-1

// function emoji(){
//     console.log('😆')
// }

// function hello(f){
//     f()
//     console.log("hello")
//     f()
// }
// function hi(f){
//     f()
//     console.log("hi")
//     f()
// }

// let greet=hi(emoji);
// greet

// way-2


// function withEmoji(f) {
//     return function () {
//         f()
//         console.log('😆')

//     }
// }
// function hello(){
//     console.log("hello")
// }
// function hi(){
//     console.log("hi")
// }
// let helloWithEmoji=withEmoji(hi)
// helloWithEmoji();

/*
    HoF:
   ------
   higher order function that accepts function parameter and returns function .

    HOF benifits:
    1.code is not hardcoded.
    2.code is reusability
    3.there is no duplicate code ....
*/

//=================================================================

/**
 // function closure

        function closure get the variable from outer scope.
         and that variable we can use inner function scope 
 * 
 *  when / where we need closure ?
 *  to abstract public behav of any module
 * 
 */
// var a=13;

// function query(){
//    var b=12;
//    function collect(){
//        var c=1;
//        return a+b+c;
//    }
//    return collect()
// }
// console.log(query())


// Nag Example

// const counter=(function(){
//     console.log("init()")
//     let count=0;

//     function increament(){
//         count++;
//     }
//     function get(){
//         return count;
//     }
//     return{
//         inc:increament,
//         get:get
//     }
// })()


