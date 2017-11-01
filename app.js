const h1 = document.querySelector("h1");

h1.addEventListener("click", alertClick);

function alertClick() {
    alert("this is the first feature");
}

const feature1 = document.querySelector(".feature1");
feature1.addEventListener("click", changeBackground);

function changeBackground() {
    const body = document.querySelector("body");
    body.style.background = "#333";
}

const feature2 = document.querySelector(".feature2");

feature2.addEventListener('click', doSomething);

function doSomething() {
    console.log("its dammnn gooddddddd");
    console.log("add more to feature 2");
    sdkfhskjdf
}