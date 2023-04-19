const inputDia = document.getElementById("dia");
const inputMes = document.getElementById("mes");
const inputAño = document.getElementById("año");

const textErrorDia = document.querySelector(".input-text-error-dias");
const textErrorMes = document.querySelector(".input-text-error-meses");
const textErrorAño = document.querySelector(".input-text-error-años");

const rayitaAño = document.getElementById("rayitas_años");
const rayitaMes = document.getElementById("rayitas_meses");
const rayitaDia = document.getElementById("rayitas_dias");


function validarCampo (v,t,i){
    v.addEventListener('change', () =>{
        if(inputDia.value > 31 || inputMes.value > 12 ||inputAño.value > 2023){
            v.classList.add("input-error");
            v.classList.remove(i);
            v.classList.toggle('shake-horizontal');
            t.classList.add('active');
            campos[v.id] = null
        }else{
            v.classList.remove('input-error');
            v.classList.remove('snake-horizontal')
            v.classList.add(i);
            t.classList.remove('active');
            campos[v.id] = v.value
        }
    })
}

campos = {}

validarCampo (inputDia,textErrorDia, "input1");
validarCampo (inputMes,textErrorMes, "input2");
validarCampo (inputAño,textErrorAño, "input3");


const btnCalcular = document.getElementById('btnCal');

btnCalcular.addEventListener('click', () =>{
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
/* console.log(`${dia}/${mes}/${anio}`); */

const diaIngresado = parseInt(campos.dia);
const diferenciaDia = Math.abs(dia - diaIngresado);
rayitaDia.innerText = diferenciaDia;

const mesIngresado = parseInt(campos.mes);
const diferenciaMes = Math.abs(mes - mesIngresado);
rayitaMes.innerText = diferenciaMes;

const añoIngresado = parseInt(campos.año);
const diferenciaAño = Math.abs(anio - añoIngresado);
rayitaAño.innerText = diferenciaAño;
})


