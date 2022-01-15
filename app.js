const form = document.querySelector('.form');
const grocery = document.querySelector('.groc');
const groceryParent = document.querySelector('.grocery-container');
const items = document.querySelector('.items');
const clearAll = document.querySelector('.delete-btn');
const alertMes = document.querySelector('.alert')
const subBtn = document.querySelector('.btn');
// const editSub = document.querySelector('.editbtn')

let editFlag = false;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //create new grocery item
    const textVal = grocery.value;
    if(textVal == ''){
        displayAlert('Please input text', 'danger')
        
    }
    if(!textVal == '') {
        displayAlert('Item added!', 'success');
    const element = document.createElement('article');
    element.classList.add('groc-list');
    element.innerHTML = `<p class="par">${textVal}</p> <div><button class="del-btn">delete</button></div>`;
    groceryParent.appendChild(element)
    }
    //delete all items
    clearAll.addEventListener('click', clearFunc);

    //clear input
    grocery.value="";

    //delete an item
    const deleteBtn = document.querySelectorAll('.del-btn');
    deleteBtn.forEach(element => {
        element.addEventListener('click', deleteFunct);

        //edit cont
        if (editFlag){
            goatEdit;
        }
});
    // const editBtn = document.querySelectorAll('.edit-btn');
    // editBtn.forEach(e=> {
    //     e.addEventListener('click', editItem)
    // })
});
//show alert
const displayAlert = (text, action)=> {
    alertMes.textContent = text;
    alertMes.classList.add(action);
    setTimeout(() => {
        alertMes.textContent="";
         alertMes.classList.remove(action);
    }, 1000);
}
//clear all
const clearFunc = () => {
    const item = document.querySelectorAll('.groc-list');
    if(item.length > 0){
    displayAlert('Items Cleared!', 'clear')
        groceryParent.innerHTML = ``;
    };
}

//delete an item 
    const deleteFunct = e=> {
        displayAlert('Item deleted!', 'delete')
            const parent = e.currentTarget.parentElement.parentElement;
            groceryParent.removeChild(parent);
    };

    //local storage
    

//edit an item
// const editItem= (e)=> {
//     editFlag = true;
    
//     if(editFlag){
//         let parent = e.currentTarget.parentElement.parentElement;
//         let para =  parent.querySelector('.par');
//         console.log(para.innerHTML);
//         grocery.value = para.innerHTML;
//         subBtn.innerHTML = 'Edit';
//         editSub.style.visibility = 'visible';
//         subBtn.style.visibility = 'hidden';

//         form.addEventListener('submit', (e)=> {
//             parent = e.currentTarget.parentElement.parentElement;
//             para =  parent.querySelector('.par');
//             console.log('df');
//             para.innerHTML = grocery.value;
//         })
        
//     }
    
// }