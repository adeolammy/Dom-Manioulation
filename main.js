//    QUESTION 1    QUESTION 1    QUESTION 1   QUESTION 1
//    QUESTION 1    QUESTION 1    QUESTION 1   QUESTION 1

// highlight every word greater that 8 with bckgdg red

// SOLUTION DAT WORKS WELL   // SOLUTION DAT WORKS WELL  // SOLUTION DAT WORKS WELL

let cont =  document.querySelector('p');
  cont.innerHTML = cont.innerText
.split(' ').map(ele => ele.length > 8  
    ?
      `<span style="background-color: red" > ${ele}</span>`    
    :
        ele
).join(' ');



// SOLUTION WAY NEVER WORK WELL // SOLUTION WAY NEVER WORK WELL

// let words =  document.querySelectorAll('p');
//     for (let i = 0; i < words.length; i++) {
//         const element = words[i];
//         // element.style.color = 'red'
//         if (element.length > 8) {
//             element.style.color = 'red'
//         } else {
//             element
//         }
//     }



// let contents =  document.getElementsByTagName('p');
//  contents.innerHTML = contents.innerText
// //  .split(' ') 
// for (let i = 0; i < contents.length; i++) {
//    let element = contents[i];
//    if (element.length > 8) {
//         `<span style="background-color: yellow" > ${element}</span>`
//     }else{
//         element
//     }
// }



// QUESTION 2   // QUESTION 2  // QUESTION 2  // QUESTION 2
// QUESTION 2   // QUESTION 2  // QUESTION 2  // QUESTION 2


// add a link to the source after the paragrph tag
// the source (www.fireman.com)

let link = document.createElement('a');
link.href = 'https//:fireman.com/'
link.innerText = "Here's  the link"
document.body.appendChild(link)
link.style.alignContent = 'center'
link.style.color = 'black'
link.style.textDecorationLine= 'none'
link.style.border = '2px solid black'
link.style.borderRadius = '8px'
link.style.padding = '4px'
link.style.background = 'grey'


// QUESTION 3   // QUESTION 3 // QUESTION 3   // QUESTION 3// QUESTION 3   // QUESTION 3
// QUESTION 3   // QUESTION 3 // QUESTION 3   // QUESTION 3// QUESTION 3   // QUESTION 3
// /    get to total numbers of word and insert above the text

let ans = cont.innerText.split(' ').length;
let h3 = document.createElement('h3')
h3.innerText = `${ans} words count`;
document.body.insertBefore(h3, cont).style.background = 'yellow'
document.body.insertBefore(h3, cont).style.display = 'inline'








// FAVOURITE MOVIES SECTION
// FAVOURITE MOVIES SECTION


const movie = document.querySelector('movies');

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText = 'Lord of the Rings';
li.classList.add('list')

const diva = document.querySelector('div');
const h2 = document.createElement('h2');
diva.append(h2)
// h2.innerText = 'latest movies'
h2.classList.add('movies')



const head = document.querySelector('.head');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const btnNew = document.querySelector('.btnNew');
const clear = document.querySelector('.clear');

btnNew.addEventListener('click', (e)=>{
  head.classList.add('border');
  p1.style.color = 'darkBlue';
  p1.style.fontSize = '1.3rem';
  p2.classList.add('adjust');
  p1.innerHTML = p1.innerText
  .split(' ').map(ele => ele.length > 8  
    ?
      `<span style="background-color: red" > ${ele}</span>`    
    :
        ele
).join(' ');
 
 e.preventDefault();

});


clear.addEventListener('click', (e)=>{
  head.classList.remove('border');
  p1.style.color = 'black';
  p1.style.fontSize = '16px';
  p2.classList.remove('adjust');

  
  e.preventDefault();

})

//TO CLONE FROM 1 ARRAY TO ANOTHER 
// function clone(x ,y) {
//     x = [1,2,3,4,5,6,7];
//     y = [];
//    //1  return y = [... x];
//   //2  return y = [... new Set(x)];
//   //3 return y = Array.from(x);
//   //4 return y = x.slice()
//   //5 return y = x;
//   //6 return y = x.map((i)=>i);
//   //7  return y = x.filter((i)=>i);
    
// };

// console.log(clone());

// TO GET THE 1ST ELEMENT OF AN ARRAY IN A FUNCTION

// const first = function(n) {
// // 1 return n.shift()
// // 2 return n.slice(0,1)
// // 3 return n.splice(0,1)
//  return n.splice(0,1)

 
// }
// console.log(first([7,9,0,-2]));
// console.log(first([],3));
// console.log(first([7,9,0,-2],[3]));
// console.log(first([7,9,0,-2],[6]));
// console.log(first([7,9,0,-2],[-3]));

// WRITE A SIMPLE JS PROG TO JOIN THE FOLLOWING ARRAY

// const myColor =['red', 'Green','white','Black'];
// let x = myColor.join(',')
// let r = myColor.join('+')
// console.log(x,r);


const result = document.querySelector('#result');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

 input.addEventListener('input', ()=>{
   return result.value = eval(input.value)

 
 });
 