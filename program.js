// number->Any values from positive , negative,fractional,decimal
// to create a variable(temporary storage)
// var variableName = value;   <-syntax
// variable_name-> any valid Text,it should contains a-z,A-Z,0-9,_,$
// runtime output will done in console 
var score = 400 ;
console.log(score) ;
var temperature = -2;
console.log(temperature);
// string->any text value which is typed inside '' or ""  '' for characters " "for words
//   ; -> is to say that line is finished 
var email="deepika@gmail.com";
console.log(email);
// boolean ->either true or false
var result_status = true;
console.log(result_status);
// already i used score variable name as 400 if i use same score variable name for another it rewrite the 400 (deleted) so use unique name for variable names
// undefined-> if we not type the value for variable name it is said as undefined variable
var future_name;
console.log(future_name);
// for next line in console shift+enter
var first_name = "deepika";
var last_namae = "j";
var father_name = "jayapal";
var age = 23;
// object->it is collection of key and value  it doesn't need each var to show the student info by using single var it shows all info about the student ,,it reduces maixmum space that each var contain
// syntax
// var variable_name={
//     key1:Value,
//     key2:value
// }
// key->should contain a-z,A-Z,0-9,_,$
// value->Number,string,boolean,object,array,function
var student_info={
    first_name : "deepika",
    last_name : "j",
    father_name : "xyz",
    age : 23,
    status : true
}
console.log(student_info);
// object->4operations->Read value,insert new value,edit eisting value,delete
// to read a value ->object_variable_name.key;
console.log(student_info.age);
console.log(student_info.status);
// to insert a new value ->object_variable_name.newkey=value;
student_info.blood_group="o +ve";
console.log(student_info);
// to edit/updated an existing value-> object_variable_name.existing_key=new_value;
student_info.father_name="jayapal";
// to delete a existing record-> delete object_variable_name.key
delete student_info.status;
console.log(student_info);
// array ->it is a collection of list DataTransfer(list of data)   displayed in o/p-->inde or postion: objects
// syntax of creating Array  -> var variable_name=[value_1,value_2,.......,value_n];  
// var variable_name=[{object},{object}]; object-->{key:value}
// value -> Number,string,boolean,object,array,function
// if the value is string every values should be in string format ,if it is boolean everything will be boolean need not to combine datatypes
var list_of_mark=[70,60,90,100,78];
console.log(list_of_mark);
var greeting_list=["hi","hello","bye"];
console.log(greeting_list);
var student_list=[
    {name:"deepika",age:23},
    {name:"sowmiya",age:28},
    {name:"aswini",age:22}
];
console.log(student_list);
// array->4operations->Read value,insert new value,edit the eisting value,delete the value
// insert a new value into array
// Push() = insert a new value at the end of array record      push()--> it is said as predefined function   able to give multiple datas
student_list.push({name:"haree",age:24},{name:"pavi",age:30});
// unshift()--> insert a new value at start of the record 
student_list.unshift({name:"chitra",age:35});
// to read a value synta--> array_variable_name[inde]   array storing variable is called array variable name 
console.log(student_list[1].name);
// to edit a eisting value from array
// synta--> array_variable_name[index]=value;
student_list[2].name="pari";
// to delete a value
// array_variable_name.splice(index,deletecount);  if delete count 1 it delete that index if it is moethan 1 the upcoming inde also deleted
student_list.splice(2,1);
student_list.splice(2,2);
console.log(student_list);
// function->block of code
// synta for creating a function(function definition) it has two synta function definition and function invocation
// function function_nmae(){
//    coding
//  }
// function name it has proper text value of a-z,A-Z,0-9,_,$
// syntax for eecuting/running the function(function invocation)
// function_name();
// event driven program,event handlers refer at js ppt
function onSubmitForm(){
    var output="the form has been submitted succesfully";
    console.log(output);
;}
function onLogin(){
    var result="you have login to the application";
    console.log(result);
}
// operators
// 1.arithmetic operator->+,-,*,/,++,--
// 2.assignment operator->=
// 3.comparison operator-> <,>,<=,>=,==,===,!=,!==
// 4.logical operator->&&,||,!
// var number_1=200;
// var number_2=300;
// number_1 + number_2
// number_1 - number_2
// number_1 * number_2
// number_1 / number_2
// number_1 ++  ->increment value by plus 1 like this var number_1 +1
// 100=="100" ->true check only value
// 100 ==="100" ->false check value and format use always this ===
// true && true o/p->true  true&&false o/p->false both sides should be true says by&&
// true || true  o/p->true  true ||false o/p->true any one sides should be true says by ||
// !true o/p-> false !false o/p->true
/*synta -> if else condition
if(condition){
    code block will eecuxte if the condition is true
}
else{
    code block will eecuxte if the condition is falsy
// } */
/*problem statement
1.we need ro provide age(number- data type)as input for a Program
2.if the given age is greater than or equal to 18 output has the given age is eligible for vote
3.if the given age is less than  18 output has the given age is not eligible for vote  */
// prompt keyword for getting input console keyword for getting output 
function check_voting_status(){
    // var age = 24;
    var age= prompt("enter your age");
    if(age>=18){
        console.log("the user is eligible for vote")
    }
    else{
        console.log("the user is  not eligible for vote")
    }
}
/*synta -> multiple ifelse condition
if(condition){
    code block will eecuxte if the condition is true
}
else if(condition){
    code block will eecuxte if the condition is true
}
else{
    code block will eecuxte if the condition is falsy
// } */
/*problem statement 
1.to give person age as input->number
2.identify->less than 18-> person is minor
3.identify->greater than or equal to 18 and less than 60-> person is major
4.identify->greater than or equal to 60-> person is super citizen */
function check_person_category(){
    var age=prompt("enter the age");
    if (age < 18){
        console.log("person is minor");
    }
    else if(age >= 18 && age < 60){
        console.log("person is major")
    }
    else{
        console.log("person is super citizen")
    }
}
/*synta-> for loop
for(initialization;condition;increment/decrement){
    code block
}*/
for (var count=0;count<=10;count++){
    console.log("loop is running on count",count);
}
/*find even number for given N number of limit
solution:
1.get number(Nth number limit)value from user while running the code.
2.logic for finding even number ->number %2->0
3.repeat this logic till n number */
function check_even_number(){
    var Nth_number = prompt("enter the number limit");
    for(var count=1;count<=Nth_number;count++){
        if(count%2===0){
            console.log(count, " is even number");
        }
    }
}
/*synta - for in loop - used to iterate object properties
for(var key in object_variable_name){
    coding
} */
// used in case of objects
function iterateForLoop(){
    var employee = {
        first_name : "deepika",
        last_name : "j",
        father_name : "jayapal",
        age : 23,
        status : true 
    }
    for(var key in employee){
        // console.log(key); ->for key
        console.log(employee[key])
        // it display the value of the key
    }
}
/*syntax->for of loop - used to iterate list of array
for(var value of array_variable_name){
    coding
}*/
// used in the case of array
function iterationArray(){
    var student_list=[
        {name:"deepika",age:23},
        {name:"sowmiya",age:28},
        {name:"aswini",age:22}
    ];
    for(var value of student_list){
        console.log(value.name)
        // it display the values of name
    }
}
/*synta->while loop-entry level check
while(condition){
    code
}*/
function whileLoop(){
    var count=0;
    while(count<=5){
        console.log("the count is",count);
        count=count+1;
    }
}
/*synta ->do while loop-exit level check
do{
    code
}while(condition)*/
function dowhileLoop(){
    var count=6;
    do{
        console.log("the count is",count);
        count=count+1;
    }while(count<=5);
}
/*syntax->switch case
switch(epxression){
    case value:
        code 
        break;
    case value:
        code 
        break;
    default:
        code 
}  */
// debugging topic covered inspect->source->selectfile->debug   ->refer js ppt
function findDay(){
    var day=prompt("enter a number from 0 to 6");
    switch(day){
        case "0":
            console.log("sunday");
            break;
        case "1":
            console.log("monday");
            break;
        case "2":
            console.log("tuesday");
            break;
        default:
            console.log("out of range");
    }
}
function display(){
  /*local scope - defining a variable inside a function
  accesibility-within the function */
  var name="deepika";
  console.log(name);
  /*global scope - defining a variable outside a function
  accesibility-inside any function 
  here the eample email is present in the same file search it line 12 */
  console.log(email);
  /*automatic global scope - defining a variable declaration outside a function,but assigning a value inside a function
  accesibility-inside any function 
  line no.19 search in same file */
  future_name="xyz"; 
}
function printName(){
    console.log(name);  
    // does not print value
    console.log(email);
    // print value
    console.log(future_name);
    // print value
}
/* error handling
3-types 1.synta error->it shows error during typing or in browser when you refresh page
2.logical error->unepected output shown error while assigning values should find error with help of debugging 
3.runtime error->unepected key value assigned error shown after assigning values while during runtime only it recover using try , catch method     note: better use it for every function /////advised/////    */

function calculate(){
    try{
        var value_1=prompt("enter number value 1");
        var number_1=parseInt(value_1);
        var value_2=prompt("enter number value 2");
        var number_2=parseInt(value_2);
        var symbol=prompt("enter any math operator");
        switch(symbol){
            case "+":
                console.log(number_1 + number_3);
                break;
            case "-":
                console.log(number_1 - number_2);
                break;
            case "*":
                console.log(number_1 * number_2);
                break;
            case "/":
                console.log(number_1 / number_2);
                break;
            default:
                console.log("you have entered wrong math operator")
        }
    }
    catch(error){
        console.log(error);
        alert("server down,pls try again later");
    }
}
// storgae->local storage,session storage   
// inspect->applications->storage->local storage / session storage
//---jsppt--- json plays a main role of converting these code to bytes for a server and convert those bytes request into json code to machine---view js ppt---

/*local storage->in local storage the key:value in storage diappear when you clear it
set a value,read a value,delete particular value,clear every values
synta->set a new value
localStorage.setItem("key","value");  */
localStorage.setItem("username","deepika2gmail.com");
/*synta->read a value
localStorage.getItem("key"); */
localStorage.getItem("username")
/*synta->delete a particular value
localStorage.removeItem("key");  */
localStorage.removeItem("username");
// synta->to clear all values
localStorage.clear();

/*to convert an object or array to string value
JSON.stringify(object pr array value);

to convert an string format object or array to actual value
JSON.parse(stringObject)  */

/*session storage->in session storage the key:value in storage disappear when you close the particular browser tab.
set a value,read a value,delete particular value,clear every values
synta->set a new value
sessionStorage.setItem("key","value");  */
sessionStorage.setItem("username","deepika2gmail.com");
/*synta->read a value
sessionStorage.getItem("key"); */
sessionStorage.getItem("username")
/*synta->delete a particular value
sessionStorage.removeItem("key");  */
sessionStorage.removeItem("username");
// synta->to clear all values
sessionStorage.clear();
/*timers
setTimeout->its used to delay the code eecuxtion
like  eample when the program run after 5seconds send me the alert message
-----those function is called as anonymous function or call back function---------
synta->    setTimeout(function(){
    code to time delay
},time_millisecond);
-------1000ms->1 second -------*/
var homePageTimeout = setTimeout(function(){
    alert("welcome to home page");
}, 1000 * 5);
/*clearTimeout->it will stop the setTimeout
clearTimeout(setTimeoutID) */
function clearSetTimeout(){
    clearTimeout(homePageTimeout);
}

/*setInterval->it is used to run a code on the given time interval
like it will call the alert for every particullar mentioned seconds
synta->setInterval(function(){
        cod eto be eexcuted on a time interval
},time_millisecond); */
var homePageTimeInterval = setInterval(function(){
   alert("it will call continously for every 4second") 
}, 4000);

/*clearInterval --->it will stop time interval
 clearInterval(setIntervalID); */

 function clearTimeInterval(){
     clearInterval(homePageTimeInterval);
 }

 class Authentication{
     login(){
         console.log("this is login code")
     }
     register(){
         console.log("this is register code")
     }
 }


var auth= new Authentication()
auth.login();

class HomePage extends Authentication{

}

var home = new HomePage();
home.login();
