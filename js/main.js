//Screen Share Pseudocode
const taskInput = document.querySelector('#enterToDo');
const itemList = document.querySelector('#toDoList');
//user can enter text and click a button
    //add eventListener to call a function addToList    
document.querySelector('#sub').addEventListener('click', addToList)
//function addToList
    //Get the text out from the input
    //Create li
    //Add text from input into li
    //Note: Create ul or ol in HTML
    //Append li to list element, (Display text from li)
    //clear input
function addToList(){
    const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${taskInput.value}`));
        itemList.appendChild(li);
        taskInput.value = '';
}

document.querySelector('ol').addEventListener('click', addStrike)

function addStrike(){
    let el = document.querySelector('li');
    el.style.setProperty('text-decoration', 'line-through');
}

//user can expect user text added to list

//user can see a list of all things they added





















//PSEUDOCODE: TABLE PRACTICE
//Create a To Do List

//Add/Write things to do
    //Create a HTML form or section with an input to type your tasks into

//Submit or send things to do on a list
    //Create a HTML button in DOM
    //Create an event listener with the event Click to run a function
    //Create a HTML ordered list that is empty for now in the DOM

//We can expect to have our To-Dos appear below
    //Create a function that when button is clicked, it creates Element with new List Items which our texts

//We can see them crossed out when completed
//We can expect our list to have a reset or clear all button

/* Code from Traversty Media YouTube Class HW Video, Sign Up Form Box

document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = ''; */
