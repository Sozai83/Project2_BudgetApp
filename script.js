const add = document.getElementById('submit');
const descriptionValue = document.getElementById('item');
const amountValue = document.getElementById('item_amount');
const deleteButtons = document.querySelectorAll('.delete');

//Get what's in the textbox when Add is clicked
const getValue = (el)=>{
    return el.value;
}

console.log(add);

add.addEventListener('click', ()=>{
    let description = getValue(descriptionValue);
    let amount = getValue(amountValue);
    console.log('test', description, amount);
});

// //Add todo list item in the DOM when Add is clicked
// const addHTML = (text)=>{
//     let html = '<li class="list-item"><span class="list-text">'+text+'</span><i class="fas fa-trash-alt delete"></i></li>';
//     list.insertAdjacentHTML("afterbegin", html);
// }

// //Remove the value from the text 
// const emptyInput = ()=>{
//     input.value="";
// }

// //Create a function
// const addToDoItem = ()=>{
//     let text = getToDoItem(input);
//     if(text.length > 0){
//         addHTML(text);
//         emptyInput();
//     }
// }

// // Remove element
// const removeToDoItem = el =>{
//     let item = el.parentNode;
//     item.remove();
// }

// //When Add button is clicked, add a todo Item
// add.addEventListener('click',addToDoItem);

// //When Enter button is pressed in input, trigger clicking Add button
// input.addEventListener('keypress',e =>{
//     if(e.key === "Enter"){
//         e.preventDefault();
//         add.click();
//     }
// });
// // When delete button is clicked, remove the todo item from the list
// list.addEventListener('click', (e) =>{
//     let target = e.target;
//     if(target.classList.contains('delete')){
//         removeToDoItem(e.target);
//     }
// });
