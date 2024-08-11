//**********   SELECT ITEMS   **********// 

const alert=document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.querySelector("#grocery")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const submitBtn = document.querySelector(".submit-btn")
const clearBtn = document.querySelector(".clear-btn")



// *******  EDIT OPTION  *******// 
let editElement;
let editFlag = false;
let editId = "";


// *******  EVEN LISTENERS *******// 

form.addEventListener("submit",addItem);

clearBtn.addEventListener("click",clearAll)

// *******  FUNCTIONS *******// 



document.addEventListener("DOMContentLoaded", setupItems);

function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}


function addItem(e){
    e.preventDefault()

    const value = grocery.value
    const id  = new Date().getTime().toString()
    console.log(id);
    console.log(value);
    if (value  && !editFlag) {
        const element = document.createElement("article")

        element.classList.add("grocery-item")

        //setting up the attribute
        element.setAttribute("data-id",id)

        //creating whole line of item with delete and edit button
        element.innerHTML = `     <p class="title">${value}</p>
                        <div class="btn-container">
                            <button class="edit-btn"><i class="ri-edit-2-line"></i></button>
                            <button class="delete-btn"><i class="ri-delete-bin-6-line"></i></button>
                        </div>`


        //intialize edit delete button
        const editBtn  = element.querySelector(".edit-btn")
        const  deleteBtn  = element.querySelector(".delete-btn")

        editBtn.addEventListener("click",editItem)
        deleteBtn.addEventListener("click",deleteItem)
        
        
        
        //append the child in parent
        list.appendChild(element)
        
        //display item added alert
        showAlert("Item Added","success")


        addToLocalStorage(id,value)
        
        resetToDefault(id,value)

        
        

    }
    else if(value  && editFlag){
       

        editLocalStorage(editId,value)
        editElement.innerHTML=value
        resetToDefault(id,value)

        showAlert("Item Changed","success")

    }else{
       showAlert("invalid value","danger")
    }
    
}

// show alert
function showAlert(text,type){
    alert.textContent=text
    alert.classList.add(`alert-${type}`)

    setTimeout(function(){
        alert.textContent=""
        alert.classList.remove(`alert-${type}`)
    },1000)
}

//clear button 

function clearAll(){
    items = document.querySelectorAll(".grocery-item")
    console.log();
    if (localStorage.getItem("list").length>0) {
        items.forEach(item => {
            list.removeChild(item)
        });
        localStorage.removeItem("list")
        showAlert("All Cleared","success")
    }else{

        showAlert("Nothing To Clear","danger")

    }

}

function deleteItem(e){
    const deItem = e.currentTarget.parentElement.parentElement
    list.removeChild(deItem)
    showAlert("Removed","danger")
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement
    editElement = e.currentTarget.parentElement.previousElementSibling
    
    grocery.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id;
    submitBtn.textContent = "Edit"
}

//reset to defualt everything

function resetToDefault(id,value){
    // editID=false;

    editFlag = false
    grocery.value=""
    editId = ""
    submitBtn.textContent="+ Add"
}



// *******  LOCAL STORAGE *******// 

function addToLocalStorage(id,value){

    const grocObject = {id,value}
    
    let items = getLocalStorage()



    items.push(grocObject)

    localStorage.setItem("list",JSON.stringify(items))
}

function removeFromLocalStorage(id,value){
    
}

function editLocalStorage(id,value){

        let items = getLocalStorage()
        items = items.map(item=>{
            if(item.id === id){
                item.value=value
            }
            return item
        })

        localStorage.setItem("list",JSON.stringify(items));

}
// *******  SETUP ITEMS *******// 


function getLocalStorage() {

    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

}
localStorage.setItem("orange",JSON.stringify(["item1 , item2"]))

let orange = JSON.parse(localStorage.getItem("orange"))






function createListItem(id, value) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    element.setAttribute("data-id", id);
    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn"><i class="ri-edit-2-line"></i></button>
            <button class="delete-btn"><i class="ri-delete-bin-6-line"></i></button>
        </div>
    `;
    const editBtn = element.querySelector(".edit-btn");
    const deleteBtn = element.querySelector(".delete-btn");

    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);

    list.appendChild(element);
}
