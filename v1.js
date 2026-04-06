// console.log("Hello World");
// console.error("This is an error")
// console.log("This is a warning")
//var(globally scoped),let,const(block-level scope)
//reassignmnet also possible in let but not in const
// let age;
// age=32;
// console.log(age);
// const score;//if you are using const then assign the variable's value at the time of declaration only otherwise error will come ,but this is not valid for let
// score=10;
// console.log(score);
//Data Types-Primitive (data directly assigned to memory)
//String,Numbers,Boolean,null,undefined,Symbol(added in es6)
const name="John";//String
const age=34;//number
const isCool=true;//boolean
const rating=4.5;//no float or decimal data type in js its just a number
const x=null;//nothing inside this x its empty
const y=undefined;
let z;//undefined

// console.log(typeof x)
//null-this means the variable exists but it is intentionally empty,its type is object but its a bug in the history of js
//undefined-it means a variable exists but it has no value assigned yet,its type is also undefined
//STRINGS
//Concatenation(+)
// console.log('My name is '+ name + ' and I am '+ age);
// //Template string (Using backticks)
// const hello=`My name is ${name} and I am ${age}`;
// console.log(hello)
//Functions of strings
// const s='Hello World!';
// const s1="Blockchain,technology , is ,nice ,to ,learn";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''))//split by letters and split returns an array
// console.log(s1.split(','));//split by commas
//Arrays-variables that holds multiple values
const numbers=new Array(1,2,3,4,5);//here new keyword to create an array and Array is a constructor
console.log(numbers);
const fruits=["apple","mango","pears",10,true];
//In JS you have the freedom to have multiple datatype values in one single array 
fruits[5]="oranges";
// fruits=[];//reassignment not allowed but addition of elements even when you are using const

// fruits.push("grapes");//to insert value at last 
// fruits.unshift("strawberries");//to insert value at the beginning
// fruits.pop();//to delete value from the end 
// console.log(Array.isArray(fruits));//to check whether a given variable is an array or not
// console.log(fruits);
// console.log(fruits.indexOf("oranges"));
//OBJECT LITERALS
// const person={
//     firstName:'John',
//     lastName:'Doe',
//     age:30,
//     hobbies:['music','movies','sports'],
//     address:{
//         street:'50 main st',
//         city:'Boston',
//         state:'MA'

//     }

// }
// //adding properties in the object 
// person.email="ayushkumarsinghjsr@gmail.com";
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1])
// console.log(person.address.city)


// const {firstName, lastName, address:{city}} = person;//Object destructuring-Extracting values from an object and storing them in variables
// console.log(firstName)
// console.log(lastName)
// console.log(city)

//Objects as elements inside an array
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with Boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    },

];
// console.log(todos)
// console.log(todos[1].text)

//JSON-When you are sending data to server ,you send it in json format
// const todoJSON=JSON.stringify(todos);//to convert js code to json format
// console.log(todoJSON);

//For loops
// for(let i=0;i<10;i++)
// {
//     console.log(`For loop number:${i}`);
// }

// //While
// let i=0;
// while(i<10){
//     console.log(`While loop number:${i}`);
//     i++;
// }
// //Looping through arrays
// for(let i=0;i<todos.length;i++)
// {
//     console.log(todos[i].text);
// }
//Looping through arrays using for-of loop
// for(let todo of todos){
//     console.log(todo.id);
// }
// //forEach,map,filter-higher order array methods
// todos.forEach(function(todo){
//     console.log(todo.text)

// })
// //map-it returns an array in result
// const todoText=todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);
// const todoCompleted=todos.filter(function(todo){
//     return todo.isCompleted==true
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);

//CONDITIONAL STATEMENTS
// const x1=20;
// if(x1===10){ //=== checks the value as well as the data type but == only checks the value
//     console.log('x1 is 10');
// }
// else if(x1>10){
//     console.log("x1 is greater than 10")
// }
// else{
//     console.log('x1 is less than  10')
// }
// const x1=6;
// const y1=11;
 
// if(x1>5 && y1>10){
//     console.log("x1 is more than 5 and y1 is more than 10");
// }
//it is better than nesting if statements

//Ternary operator
// const x1=10;
// const color=x1>10?'red':'blue';
// console.log(color)

//Switch cases
// const color='green';
// switch(color){
//     case 'red':
//         console.log("color is red");
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is Not red or blue');
//         break;        
// }

//Functions
// function addNums(num1=1,num2=1){//default values being passed ,only used when no values are being passed during function call
//     console.log(num1+num2);
// }

// addNums(11,3);//higher priority than the default values

//Arrow functions
const addNums=num1=>num1+5;

console.log(addNums(5));
//no need to use return and no need of function keyword

//OOPS

//Constructor Function-It will be used to create multiple objects(no need of class ,constructor function is enough)
// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);//dob string is converted to js date object so that methods like getFullYear(),getMonth(),getDate() can be used along with the date
    // this.getBirthYear=function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName=function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }

// Person.prototype.getBirthYear=function(){//since we are creating multiple objects so same functions for multiple objects should not be created it will waste a lot of memory,so to avoid wastage of memory prototype is used ,once created and can be accessed and called by many objects
//     return this.dob.getFullYear();

// }
// Person.prototype.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`
// }

//Class
// class Person{
//     constructor(firstName,lastName,dob){//Syntactic sugar -doing same thing but in different ways
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);

//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// //Instantiate Object
// const person1=new  Person('John','Doe','4-3-1980');
// const person2=new Person('Mary','Smith','3-6-1970');

// // console.log(person2.dob.getFullYear());
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());

//DOM selection

// console.log(window);
// //window object is the parent object of the browser
// window.alert(1);
// //but since window is the topmost object ,so no need to write anywhere window.somefunction()
// //Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// //in byId you can only put id but in query selector you can put class name like'.container' or you can put any tag name like 'h1',if there are multiple h1 tags then it selects the first h1 tag appearing
// //Multiple Element
// console.log(document.querySelectorAll('.item'));// returns NodeList
// console.log(document.getElementsByClassName('item'));//HTML collection
// console.log(document.getElementsByTagName('li'));//HTML Collection

// const items=document.querySelectorAll('.item');
// items.forEach((item)=>console.log(item));

//DOM Manipulation
// const ul=document.querySelector('.items');//ul me ek node list return hokar aayga
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent='Hello';
// ul.children[1].innerText='Brad';
// ul.lastElementChild.innerHTML='<h1>Hello</h1>';
// const btn=document.querySelector('.btn');
// btn.style.background='red';

// //Events
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('click');
//});e-event parameter
// const btn=document.querySelector('.btn');
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();

//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'


//});
//diff events -click,mouseover,mouseout

//Form VAlidation
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();//
    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error');//
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(),3000);//
    }
    else{
        const li=document.createElement('li');//
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));//
        userList.appendChild(li);//
        //Clear fields
        nameInput.value='';//
        emailInput.value='';
        // console.log('success');
    }
}







