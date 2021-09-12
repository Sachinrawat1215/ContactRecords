let btn = document.getElementById('add-btn');
let addCrd = document.getElementById('AddCard');
let info = document.getElementById("info-line");
let name = document.getElementById('name');
let ary = [];
let obj = {
    name: "",
    age: "",
    gender: ""
};

show();

// Add card show 
btn.addEventListener("click", () => {
    addCrd.style.visibility = "visible";
});

// Add card hide  
let hideBtn = document.getElementById('HideAdd');
hideBtn.addEventListener("click", () => {
    addCrd.style.visibility = "hidden";
    info.innerText = '';
})

// Adding card information 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    let nameVal = name.value;
    let ageVal = age.value;
    let genVal = gender.value;

    if (nameVal === "") {
        info.innerText = "Enter name...";
    } else if (ageVal === "") {
        info.innerText = "Enter age..."
    } else {
        obj.name = nameVal;
        obj.age = ageVal;
        obj.gender = genVal;

        ary.push(obj);
        localStorage.setItem("information", JSON.stringify(ary));
        info.innerText = "Contact added sucessfully...";
    }
    show();
    name.value = "";
    age.value = "";
});

function show() {
    let detail = localStorage.getItem("information");
    if (detail == null) {
        ary = [];
    } else {
        ary = JSON.parse(detail);
    };
    
    let html = "";
    function common(){
        ary.forEach((element, index) => {
            html += `
            <div class="user-detail" >
            <div class="serial-number">${index + 1}</div> 
            <div class="user-name">${element.name}</div> 
            <div class="user-age">${element.age}</div> 
            <div class="user-gender">${element.gender}</div>
            </div>`
        })
    };

    if (short.value == "A - Z") {
        ary.sort((firstElement, secondElement) => (firstElement.name > secondElement.name ? 1 : -1));
        common();
    } else if (short.value == "Z - A") {
        ary.sort((firstElement, secondElement) => (firstElement.name > secondElement.name ? -1 : 1));
        common();
    } else if (short.value == "Age") {
        ary.sort((firstElement, secondElement) => (firstElement.age > secondElement.age ? 1 : -1));
        common();
    } else {
        common();
    }

    let detailElm = document.getElementById("outer");
    if (ary.lenght != 0) {
        detailElm.innerHTML = html;
    } else {
        detailElm.innerHTML = "Nothing to show add contact first";
    };
};

short.addEventListener('change', show);