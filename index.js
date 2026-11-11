// const URL="http://localhost:3000/products";
// fetch(URL).then((res)=>res.json())
// .then((res)=>console.log(res))

// const URL1="http://localhost:3000/products";
// let options={
//     method:"POST",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify(
//         {
//         id:"6",
//         name:"Varshika",
//         branch:"CSE"
//         })
// };
// fetch(URL1,options).then((res)=>res.json())
// .then((res)=>console.log(res));

// const URL1="http://localhost:3000/products/4";
// let options={
//     "method":"PUT",
//   "headers":{
//         "content-type":"application/json"
//     },
//    "body":JSON.stringify(
//         {
//        "name":"Varsha",
//     "branch":"CSE"
//         })
// }
// fetch(URL1,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// })




const URL1="http://localhost:3000/products/4";
let options={
    method:"DELETE"
}
fetch(URL1,options).then((res)=>{
       if(res.ok){
    console.log(res.status,res.statusText)
    }
})

// const URL="http://localhost:3000/products/4"
// let options={
//     "method":"PUT",
//     "headers":{
//      "content-type":"application/json"
//     },
//     "body": JSON.stringify({
//         "name":"divya",
//         "Branch":"ECE"
//     }) 
// }
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// }).catch((res)=>console.log(res))