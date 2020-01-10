/*const button = document.querySelector('button');

button.addEventListener('click', greeting);

function greeting(){
    let name = prompt('what is your name?');
    alert('hello ' + name + ' nice to meet you')
}
*/

/*const name = document.querySelector('h1');
const age = document.querySelector('h2');
const p1 = document.querySelector('.para1');
const p2 = document.querySelector('.para2');
const data = document.querySelector('h3')

const button = document.querySelector('button');
let count = 1;

data.addEventListener('click', greet)


function greet(){
    //questions
    let na = prompt('whats your name?');
    let em = prompt('whats your email?');
    let ag = prompt('what is your age?');
    // adding paragraph 
    let graph = document.createElement('p');
    let content = document.createTextNode('');
    graph.appendChild(content);
    let element = document.getElementById('div1');
    element.appendChild(graph);
    p1.textContent = ': ' +na;

    for (graph = 0; graph < ag.length; graph++){
        content += ag[graph];
    }
}


//console.log(greet);
/*p1.textContent = ' : ' + na;
p1.style.padding = '20px'
p1.style.fontSize = '20px'

let ag = prompt('whats your age?');
p2.textContent = ' : ' + ag;
p2.style.padding = '20px'
p2.style.fontSize = '20px'*/




// const item1 = document.querySelector ('.items');
// const item2 = document.querySelector ('.items');
// const item3 = document.querySelector ('.items');
// const pa1 = document.querySelector ('.pa1');
// const pa2 = document.querySelector ('.pa2');
// const pa3 = document.querySelector ('.pa3');

// item1.addEventListener('click', data)
// item2.addEventListener('click', data)
// item3.addEventListener('click', data)

// function data(){
//     let name = prompt('what is your name?');
//     pa1.textContent = '  ' + name;

//     let email = prompt('what is your email?');
//     pa2.textContent = '  ' + email;


//     let age = prompt('what is your age?');
//     pa3.textContent = '  ' + age;
// }



// let fruits = ['ornages', 'apples', 'watermelon', 'pineapple'];

// console.log(fruits.length);
// fruits.indexOf("pineapple");
// console.log(fruits.slice (0,3));
// let nag = 'test'
// console.log(nag.replace ('tes', '123'));
// console.log(fruits.pop());
// console.log(fruits.push('kiwi'));
// console.log(fruits.shift())
// console.log(fruits.unshift('og'));
// fruits.push ('pineapple')
// fruits.unshift('grapes');


// //loop;

// let emptyArray = [];
//  let add;

// for(i = 0; i < 10 ; i++){
//     emptyArray.push (i);
//     add = i + ' : ' + fruits.join(' and ');
//     fruits
//     console.log(add)
// }

// console.log(emptyArray);


// console.log(fruits);


// var age = prompt('what is your age?');

// if ( (age > 18) && (age < 35) ){
//     status = 'targeted age';
//     console.log(status);

// }

// else if ((age <18)){
//     status = 'not eligible';
//     console.log (status)
// }


// else {
//     status = 'non targeted age';
    
//     console.log(status)
// }



            //tests

// const button = document.querySelector('#button')

// button.onclick = function(){
//     let name  = prompt('what is your name?')
//     alert('welocme' + name)
// }


        // Arrays


// let arr = ['myname', 'myage', 'mygende']

// arr['myname'] = 'khalid'
// arr['myage'] = 20
// arr['mygender'] = 'male'

// console.log(arr['myname'], arr['myage'], arr['mygender'])

// function num(){

//     let na = prompt('what is you name?')
//     let ag = prompt('what is your age?')
//     let ge = prompt('what is your gender?')
//     let names = {name : na, age : ag, gender : ge }
//     console.log(names)
// }

// num()

        //numbers

// let name = '20'
// let num = 0
// let boo = 6 < 6;
// let un;

// console.log(typeof(un))

// let num1 = 50;
// let num2 = 10;

// let num3 = (num1 + num2) * (8 + 2);

// console.log(num1  /= num2)


//increment ++ , decrement-- /// Sometimes you'll want to repeatedly add or subtract one to or from a numeric variable value.;


            //comparison operators



// let btn = document.querySelector('#button')


// btn.addEventListener('click', update)

// function update(){

//     let p = document.createElement('p')
//     let txt = document.createTextNode('test')
//     p.appendChild(txt)

//     let element = document.getElementById('div')
//     element.appendChild(p)
        
//     if(btn.textContent === 'button'){
//         btn.textContent = 'button'
//         p.textContent = 'button started '
        
//     }

//     else if (btn.textContent !== 'button'){
//         btn.textContent = 'oops'
//         p.textContent = 'no the same'
//     }

//     else {
//         btn.textContent = 'button22'
//         p.textContent = 'button stopped'
//     }
    
//     // console.log(btn)
// }

            //strings


// let str = `i've khalid isn't the best " at football "`
// let str2 = "i've khalid isn't the best  at football "
// let str3 = 'i\'ve khalid isn\'t the best  at football'

// console.log(str)


// let string = 'just testing'

// console.log(string.length)
// console.log(string[] // get specific character)
// console.log(string[string.length-1 ]) // get the last character)
// console.log(string.indexOf('testing')) // finding a substring inside a string )
// console.log(string.indexOf('testing' !== -1)) // finding specefig quotes / or lines )
// console.log(string.slice(5, 12))//slicing or cutting strings using there index numbers
// console.log(string.replace('just', `i'am`)) // updating or replacing strings



// const list = document.querySelector('#div ul');
// list.innerHTML = '';
// let greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (let i = 0; i < greetings.length; i++) {
//   let input = greetings[i];
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greetings[i]) {
//     let listItem = document.createElement('li');
//     listItem.textContent = input;
//     list.appendChild(listItem);
//   }

  
//   if (greetings[i].indexOf('all') !== -1){
//       console.log(greetings[i])
//   }


// }


            //slicing and replacing strings

// const list = document.querySelector('#div ul');
// list.innerHTML = '';
// let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (let i = 0; i < cities.length; i++) {
//   let input = cities[i];
//   // write your code just below here

// let ip = input.toLowerCase();

// let ipu = ip[0];

// ipu = ipu.toUpperCase();

// // console.log(ip[0])

// let slice = ipu + ip.slice([1])

// console.log(slice)


//   let result = slice;
//   let listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }


// let code = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for(i = 0; i < code.length; i++){
//     let input = code[i]
    
//     let sem = input.slice(0 , 3)
//     let sem2 = input.indexOf(';')
//     sem3 = input.slice(sem2 +1)
//     let result = sem + ': ' + sem3
    
//     console.log(result)
// }


        //Arrays
    

// let arr = ['milk', 'eggs', ['yougurt','drink', 'cheese']  ]

// let arr2 = arr.splice(2)
// arr2[0][2] = 'potato'

// let code = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for(i = 0 ; i < code.length; i++){

//     let input = code[i]

//     let code2 = input.slice(0 , 3);
//     let cut = code2.slice(1)
//     let low = code2[0].toLowerCase() + cut

    
//     console.log(low)
// }


// let arr = [1 ,2 ,3 ,4, 5];

// arr.push(6 , 7, 8 , 9 )
// arr.pop()

// arr.unshift(1, 'one', 'two')
// arr.shift()
// // console.log(arr2[arr2.length -1] how to find the last item of an array
// console.log(arr)


// let product = ['Underpants:6.99',
// 'Socks:5.99',
// 'T-shirt:14.99',
// 'Trousers:31.99',
// 'Shoes:23.99',
// 'final'
// ]

// let tot = 0

// for( let i = 0 ; i < product.length ; i++){
//     let input = product[i]
//     let sep = product[i].split(':')
//     let name = sep[0]

//    let toNum =  sep[1] = Number(sep[1])
   
//    tot += toNum

//     let all = name + ' $ ' +  toNum

//     let final = sep[-1]

//     console.log(all)
//     // console.log(all)
   
// }


        //Quiz

// const list = document.querySelector('#uls');
// const searchInput = document.querySelector('#inp-field');
// const searchBtn = document.querySelector('#pa-btn');

// list.innerHTML = '';

// let myHistory= [];

// searchBtn.onclick = function() {
//     if(searchInput.value !== '') {
//         myHistory.unshift(searchInput.value);
       
//         list.innerHTML = '';
       

//  for(let i = 0; i < myHistory.length; i++) {
//  itemText = myHistory[i];
//  const listItem = document.createElement('li');
//  listItem.textContent = itemText;
//  list.appendChild(listItem);
//  }

//  if(myHistory.length >= 5) {
//  myHistory.pop();
//  }

//  console.log(itemText)
	
//  searchInput.value = '';
//  searchInput.focus();
 
// }
// }		


        //Assessment of modul 1


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}

//2. RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so : insertx : went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin',  'Big Daddy Father Christmas']

let insertY = ['the soup kitchen Disneyland', 'the White House']

let insertZ = ['spontaneously combusted melted into a puddle on the sidewalk', 'turned into a slug and crawled away']
//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText
    let xItem  = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY)
    let zItem = randomValueFromArray(insertZ)

    newStory = newStory.replace('insertx', xItem)
    newStory = newStory.replace('insertx', xItem)
    newStory = newStory.replace('inserty', yItem)
    newStory = newStory.replace('insertz', zItem)

if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name)
    
}

if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14,) + ' ' +  'stones';
    let temperature =  Math.round((94 - 32) * 5/9, ) + ' ' + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature)
    newStory = newStory.replace('300 pounds', weight)


}

story.textContent =newStory ;
story.style.visibility = 'visible';
}