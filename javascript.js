// let a = 10
// function x(){
//     let b=55
//     console.log(a);
//     function y(){
//         return b
//     }
//     return y
// }

// let b= x()//
// console.log(b());

// let a=(x,y)=> x+y
// let b=(x,y)=>{
//     return x+y
// }
// let value1= a(2,2)
// let value2= b(5,5)
// console.log(value1, value2);

// let z=function(x,y){
//     console.log(x+y);
// }

// function x(){
//     console.log("hhhhh");
// }

// let arr = ["hi","hello","bye"]


// let b = arr.map((x)=>{
//     return x
// })

// console.log(b);

// let [a,b,d] = [1,2,3,4]
// console.log(a);
// console.log(b);
// console.log(d);
// -------------------------------------------
// let arr = [10,"hi","hello"]
// let [x,y,z] = arr

// var [a,b] = [1,2]
// var [b,a] = [a,b]

// console.log(a);
// console.log(b);
// ------------------------------------------
// let [p,q,...r] = [10,20,30,40,50,60]
// console.log(p);//10
// console.log(q);//20
// console.log(r);//[30,40,50,60]



// function fun1(){
//     console.log("function 1 executed");
// }
// fun1()

// setTimeout(()=>{console.log("function 2 executed");},5000)

// setInterval(()=>document.write("fun 2 executed"),2000)

// function fun3(){
//     console.log("function 3 executed");
// }
// fun3()

// let students = [{name:"Ram",id:1},{name:"Sita",id:2}]
// function enrollStudent(newStudent, callback){
//     setTimeout(()=>{
//         students.push(newStudent)
//         callback()
      
//     },3000)
// }
// function getStudents(){
//     console.log(students);
// }
// enrollStudent({name:"Hanuman",id:3},getStudents)

// -----------------------------Spread------------
// let arr = [10,20,30,40]
// let arr2 = [...arr,50,60]
// console.log(arr2);

//------------------------------Rest-----------------
// function a(p,...z){
//    console.log(z);
// }

// a(2,2,5,5,8,5)
// ---------------------------------------------------------

// let obj1 = {
//     id:123,
//     company:"Google",
//     salary:"3lpa"
// }
// let obj2 = {
//     name:"Rakesh",
//     ...obj1
// }

// console.log(obj2);
// -------------------------------------------------------------------

// let [a,b,...c] = [10,20,30,40]
// console.log(a);//10
// console.log(b);//20
// console.log(c);//[30,40]

// let a=[10,20,30]
// let b= Math.max(...a)
// console.log(...a);//10,20,30
// console.log(b);
// let c = Math.min(...a)
// console.log(c);
     


// laptop1.storage = "50k"
// console.log(laptop1);

// function Laptop(name, Ram , processor){
//     this.name = name
//     this.Ram = Ram
//     this.processor = processor
// }

// let laptop1=new Laptop("lenovo","4gb","i5")
// let laptop2=new Laptop("dell","8gb","i3")

// let laptop1 = {
//     name:"HP",
//     Ram:"16gb",
//     processor:"i7"
// }

// let a = Object.keys(laptop1)
// console.log(a);
// let b = Object.values(laptop1)
// console.log(b);
// let c = Object.entries(laptop1)
// console.log(c);

// let a = "5"
// let b = 5
// console.log(a+b);//55
// console.log(a-b);//0
// console.log(a==b);//true
// console.log(a===b);//false

// let arr = [10,20,30,40]

// arr.forEach((x,y,)=>{
//     console.log(x,y);
// })

// let values=arr.map((x)=>{
//     return x
// })

// let values = arr.forEach((x)=>{
//     return x
// })

// console.log(values);

// Math methods

// let highValue = Math.max(10,20,52,85,5,10)
// console.log(highValue);

// let lowValue = Math.min(2,85,45,-5)
// console.log(lowValue);

// let roundup = Math.round(14.5)
// console.log(roundup);

// let ceilingValue = Math.ceil(14.1)
// console.log(ceilingValue);

// let FlooringValue = Math.floor(14.9)
// console.log(FlooringValue);



    

    