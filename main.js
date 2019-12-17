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




const item1 = document.querySelector ('.items');
const item2 = document.querySelector ('.items');
const item3 = document.querySelector ('.items');
const pa1 = document.querySelector ('.pa');
const pa2 = document.querySelector ('.pa');
const pa3 = document.querySelector ('.pa');

item1.addEventListener('click', data)
function data(){
    let test = prompt('jut testing');
    pa1.textContent = '  ' + test;

}

