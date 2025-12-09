const el9 = document.getElementById("element9");

const el10 = document.querySelector(".element10");

let click9 = 0;
let click10 = 0;

function changeColors(elem, counter) {
    const state = counter % 3;

    if (state === 1) { 
        elem.style.backgroundColor = "yellow";
        elem.style.color = "red";
    } 
    else if (state === 2) { 
        elem.style.backgroundColor = "blue";
        elem.style.color = "white";
    } 
    else { 
        elem.style.backgroundColor = "white";
        elem.style.color = "black";
    }
}

el9.addEventListener("click", () => {
    click9++;
    changeColors(el9, click9);
});

el10.addEventListener("click", () => {
    click10++;
    changeColors(el10, click10);
});


const addBtn = document.getElementById("addImg");
const increaseBtn = document.getElementById("increaseImg");
const decreaseBtn = document.getElementById("decreaseImg");
const removeBtn = document.getElementById("removeImg");

let img = document.getElementById("myImage");

addBtn.addEventListener("click", () => {
    if (!img) {
        img = document.createElement("img");
        img.id = "myImage";
        img.src = "malaga.jpg";
        img.width = 400;
        document.body.appendChild(img);
    }
});

increaseBtn.addEventListener("click", () => {
    if (img) {
        img.width += 50;
    }
});

decreaseBtn.addEventListener("click", () => {
    if (img && img.width > 50) {
        img.width -= 50;
    }
});

removeBtn.addEventListener("click", () => {
    if (img) {
        img.remove();
        img = null;
    }
});
