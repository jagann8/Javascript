

// function resolveAfter2Seconds(){
//     console.log("starting the slow promise")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Slow")
//             console.log("slow promise is done")
//         },2000)
//     })
// }
// function resolveAfter1Second(){
//     console.log("starting the fast promise")
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("Fast")
//             console.log("fast promise is done")
//         },1000)
//     })
// }
// async function sequentialStart(){
//     console.log("===SEQUENTIAL START ===");

//     const slow=await resolveAfter2Seconds();
//     console.log("slow")

//     const fast=await resolveAfter1Second();
//     console.log("fast");

// }
// async function concurrentStart(){
//     console.log('===CONCURRENT START with await');
//     const slow=resolveAfter2Seconds();
//     const fast=resolveAfter1Second();

//     console.log(await slow)
//     console.log(await fast)
// }
// function concurrentPromise(){
//   console.log("===CONCURRENT START with Promise.all=== ")  
//   return Promise.all([resolveAfter2Seconds(),resolveAfter1Second()]).then((message)=>{
//       console.log(message[0]);
//       console.log(message[1]);
//   })
// }

// async function parallel(){
//     console.log("===PARELLEL with await Promise.all===")

//     await Promise.all([
//         (async()=>console.log(await resolveAfter2Seconds()))(),
//         (async()=>console.log(await resolveAfter1Second()))()
//     ])
// }

// sequentialStart() // after 2 seconds ,excuted 

// setTimeout(concurrentStart,4000)

// setTimeout(concurrentPromise,7000)

// setTimeout(parallel,10000)



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function trainer(){
    console.log("trainer receives question")
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("trainer solved the question with succesfully")
        },5000)
    })
}
async function employee(){
    const trainerStaff= await trainer();
    console.log(trainerStaff)
}

employee()