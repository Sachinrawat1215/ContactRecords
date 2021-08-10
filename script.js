let btn = document.getElementById('add-btn'); 
let addCrd = document.getElementById('AddCard'); 
let info = document.getElementById("info-line"); 
let ary = []; 
let obj = {name: "", 
           age: "", 
           gender: ""}; 
let name = document.getElementById("name"); 
let age = document.getElementById("age"); 
let short = document.getElementById("short");
 
show(); 
// Add card show 
btn.addEventListener("click", () => { 
    addCrd.style.visibility = "visible"; 
}); 
 
// Add card hide  
let hideBtn = document.getElementById('HideAdd'); 
hideBtn.addEventListener("click", () => { 
    addCrd.style.visibility = "hidden"; 
}) 
 
// Adding card information 
let addBtn = document.getElementById('addBtn'); 
addBtn.addEventListener('click', () => { 
    let nameVal = name.value; 
    let ageVal = age.value; 
    let genVal = gender.value; 
 
    obj.name = nameVal; 
    obj.age = ageVal; 
    obj.gender = genVal; 
 
    ary.push(obj); 
    localStorage.setItem("information", JSON.stringify(ary)); 
    info.innerText = "Contact added sucessfully..."; 
 
    show(); 
 
    name.value = ""; 
    age.value = ""; 
}); 
 
function show(){ 
 
    let detail = localStorage.getItem("information"); 
    // let main = obj[index].name; 
         
    if(detail == null){ 
        ary = []; 
    }else{ 
        ary = JSON.parse(detail); 
    }; 
    let html = ""; 
    ary.forEach((element, index) => { 
        html += `
        <div class="user-detail" >
        <div class="serial-number">${index + 1}</div> 
        <div class="user-name">${element.name}</div> 
        <div class="user-age">${element.age}</div> 
        <div class="user-gender">${element.gender}</div>
        </div>` 
    }); 
 
    let detailElm = document.getElementById("outer"); 
    if (ary.lenght != 0){ 
        detailElm.innerHTML = html; 
    }else{ 
        detailElm.innerHTML = "Nothing to show add contact first"; 
    }; 
 
};

// Short function Coding

function shorting(){

    // console.log(ary.obj.name);
    ary.forEach((element,index) => {
        let name = element.name;
        let nameAry = [];
        nameAry.push(name);
        console.log(nameAry);
    })
    
}

shorting();