// // // // // // //rest operator

// // // // // // // ES6 stands for ECMAScript 6
// // // // // // // function sum(...input){
// // // // // // //     console.log(input);
// // // // // // //     console.log(...input);
// // // // // // // }
// // // // // // // sum(1,2,3,4,5,6,7)


// function add(...input) {
//     let sum =0
//     for(var i of input){ 
//         sum+= i
//     }
//     console.log(sum);
// }
// add(1,2,3,4)

//spread operator
// 1.replace apply() method
function sum(a,b,c){
    console.log(a+b+c);
}
// sum(1,2,3)
//we want that arr elements replace a,b,c 
var arr = [1,2,3]
sum.apply(null,arr) //with the apply() method
// sum(...arr) //simply with spread operator 


// // // // // // // 2.replace concat()
// //  var arr1 = [1,2,3];
// //  var arr2 = [4,5,6];
// // //  arr1 = arr1.concat(arr2); 
// // //  console.log(arr1); //[1,2,3,4,5,6]
// // arr1= [...arr1,...arr2,7,8,9,10] //simply concat with spread method you can also add new element 
// // console.log(arr1);


// // // // // // // 3.replace copy()

// // // // // // arr3 =[1,2,3]
// // // // // // arr4 = arr3 //here we copy the element from arr3
// // // // // // // console.log(arr4);
// // // // // // //now we want 4,5 only in arr4 array
// // // // // // // arr4.push(4,5) //we can use this 
// // // // // // // console.log(arr4);// after pushing arr3 values are also changed we don't want this changes so we use spread operator
// // // // // // // console.log(arr3);

// // // // // // arr4=[...arr3,4,5,6,7]//adding element in arr4
// // // // // // console.log(arr4);
// // // // // // console.log(arr3);//so after adding element in arr4 with spread operator no changes in  arr3


// // // // // // //////////////////////
// // // // // // //forEach
// //  arr =["a","b","c",4]
// // arr.forEach(function(value,index,arr){
// //     console.log("value: "+value+" index: "+index+" arr :"+arr);
// // })
// // Output:
// // value: a index: 0 arr :a,b,c,4
// // value: b index: 1 arr :a,b,c,4
// // value: c index: 2 arr :a,b,c,4
// // value: 4 index: 3 arr :a,b,c,4



// // // // // //////////////
// // // // // // .reduce
// //
// //  /*
// // *accoumulator = acc
// // *currentValue = val
// // */
// //  let arr =[1,2,4,5,6]
// // function sum(acc,val){ 
// //    return acc+val   
// // }
// // let result = arr.reduce(sum) 
// // console.log(result);
// // //we can more reduce it
// // let result = arr.reduce((acc,val) => acc+val) 
// // console.log(result);

// // // // // //find maximum

// // // // // // var a =[7,6,8,9,1]

// // // // // // function max(acc,val) {
// // // // // //     if(val>acc){
// // // // // //       acc = val
// // // // // //     }
// // // // // //     return acc
// // // // // // }

// // // // // //  let b  = a.reduce(max)
// // // // // //  console.log(b);

// // // // //  //we can also do this with 

// // // // //  var a =[7,6,8,9,1]
// // // // // //  let b  = a.reduce((acc,val)=> { //using arrow function
// // // // // //     if(val>acc){
// // // // // //       acc = val
// // // // // //     }
// // // // // //     return acc
// // // // // // })

// // // // // let b  = a.reduce((acc,val)=> acc>val?acc:val) //using ternery operator

// // // // //  console.log(b);
 
// // // // //  //filter()


// // let arr= [2,3,4,5,6,7]
// // arr = arr.filter( x =>(x%2==0))
// // console.log(arr); //[2,4,6]

// // // // //map()

// // let a =  [1,2,3,4,5]    
// // function double(x){
// //     return  x*2
// // }
// // a = a.map(double)
// // console.log(a);
// // //we can also write like below
// // a= a.map(x=>(x*2))
// // console.log(a);


// // // //sett

// let Myset = new Set()
// Myset.add("Sandip")//add method
// console.log(Myset);
// // // let New = new Set([1,45,'Sandip',{a:4,b:5}]) // we can create with set constructor also
// // // console.log(New);
// // // let c = New.has(455)//has method
// // // console.log(c);
// // // New.delete(1);
// // // console.log(New);
// // // console.log(New.size);//get the size
// // // //iterating set with for-of loop
// // // for (let item of New){
// // //     console.log("items are: ",item);
// // // }
// // // //iterating setr with foreach loop
// // // New.forEach(item => {
// // //     console.log("items are with foreach loop: ",item);
// // // });


// /*
// *shadow copy
// */
// var person = {name:"Sandip",age:23}
// // console.log(person);
// var x = person
// x.name = "Kedia" //if you change in x then it will changes into person also
// console.log(x);
// console.log(person);
// //shallow copy assign
// // p1 = Object.assign({},person)//in targeObject we can assign value either we put empty targetObject 
// p1 = Object.assign({city:'Gurgaon'},person)// passing value with targetObject
// // console.log(p1);
// p1.name="Sandy" //we change on p1 but it will not effect on x and person
// console.log(person);
// console.log(p1); 
// console.log(x);


// // //deep copy
// // var person = {name:"Sandip",age:23,city:{name:"Kolkata"}}
// // // var x =Object.assign({},person)
// // // console.log(person);
// // // //here we copy person in x but its nested object still reference it
// // // x.city.name = "gurgaon" //we change nested object bit it still effect in person
// // // console.log(x);
// // // console.log(person); // this also changed nested object
// // // //so for ignore this problem we use deep copy
// // var x1 = JSON.stringify(person);  //convert as a string so it store into new memory space there are no references
// // // console.log(x1);/
// // x1 = JSON.parse(x1) //again it convert as a object
// // // console.log(x1);
// // //now if we change NAME in nested object it will not effect in person
// // x1.city.name = "Siliguri"
// // console.log(x1);
// // console.log(person);// no changes into person


// // // //function express

// // // const addition = function(a,b){
// // //     return sum = a+b
// // // }
// // // console.log(addition(5,5));

// // add age property in userList Array Object
// let userList = [{ name:'sandip',address:'kolkata' }]
// userList.forEach(function(value) {
//     value.age = 23;
//     console.log(value);

// })
    
// var x = new Date('2013-06-23');
// var y = new Date('2013-05-23');
// if(x>y){
//     console.log(x);
// }
// else{
//     console.log(y);
// }




// // function add(...input) {
// //     let sum =0
// //     for(var i of input){ 
// //         sum+= i
// //     }
// //     console.log(sum); //10
// // }
// // add(1,2,3,4)

    
