function acao(){
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    const texto = document.querySelector("h1");
    texto.innerHTML = `Bem vindo ${name.value}. Você tem ${age.value} anos.`;
    texto.id = "ativo";
}

function sum(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    const result = document.querySelector("h3");
    result.innerHTML = `${Number(num1.value)+Number(num2.value)}`
}
function sub(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    const result = document.querySelector("h3");
    result.innerHTML = `${Number(num1.value)-Number(num2.value)}`
}
function mul(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    const result = document.querySelector("h3");
    result.innerHTML = `${Number(num1.value)*Number(num2.value)}`
}
function div(){
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    const result = document.querySelector("h3");
    result.innerHTML = `${Number(num1.value)/Number(num2.value)}`
}