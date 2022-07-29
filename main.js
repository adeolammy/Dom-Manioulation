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