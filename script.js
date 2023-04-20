const inputDia = document.getElementById("dia");
const inputMes = document.getElementById("mes");
const inputAño = document.getElementById("año");

const textErrorDia = document.querySelector(".input-text-error-dias");
const textErrorDias30 = document.querySelector(".input-text-error-dias30");
const textErrorMes30 = document.querySelector(".input-text-error-mes30");
const textErrorMes = document.querySelector(".input-text-error-meses");
const textErrorAño = document.querySelector(".input-text-error-años");
const textBotonError = document.querySelector('.text-error-btn');

const rayitaAño = document.getElementById("rayitas_años");
const rayitaMes = document.getElementById("rayitas_meses");
const rayitaDia = document.getElementById("rayitas_dias");


function validarDigitos (v,t,i){
    v.addEventListener('change', () =>{
        if(inputDia.value > 31 || inputMes.value > 12 ||inputAño.value > 2023){
            v.classList.add("input-error");
            v.classList.remove(i);
            v.classList.toggle('shake-horizontal');
            t.classList.add('active');
            campos[v.id] = null
        }
        else{
            if (inputMes.value == 4 && inputDia.value > 30) {
                v.classList.add("input-error");
                v.classList.remove(i);
                v.classList.toggle('shake-horizontal');
                textErrorDias30.classList.add('active');
                campos[v.id] = null
            }
            else{
                v.classList.remove('input-error');
                v.classList.remove('snake-horizontal');
                v.classList.add(i);
                textErrorDias30.classList.remove('active');
                campos[v.id] = v.value
                if (inputMes.value == 11 && inputDia.value > 30) {
                    v.classList.add("input-error");
                    v.classList.remove(i);
                    v.classList.toggle('shake-horizontal');
                    textErrorDias30.classList.add('active');
                    campos[v.id] = null
                }
                else{
                    v.classList.remove('input-error');
                    v.classList.remove('snake-horizontal');
                    v.classList.add(i);
                    textErrorDias30.classList.remove('active');
                    campos[v.id] = v.value
                    if (inputMes.value == 6 && inputDia.value > 30) {
                        v.classList.add("input-error");
                        v.classList.remove(i);
                        v.classList.toggle('shake-horizontal');
                        textErrorDias30.classList.add('active');
                        campos[v.id] = null
                    }
                    else{
                        v.classList.remove('input-error');
                        v.classList.remove('snake-horizontal');
                        v.classList.add(i);
                        textErrorDias30.classList.remove('active');
                        campos[v.id] = v.value
                        if (inputMes.value == 9 && inputDia.value > 30) {
                            v.classList.add("input-error");
                            v.classList.remove(i);
                            v.classList.toggle('shake-horizontal');
                            textErrorDias30.classList.add('active');
                            campos[v.id] = null
                        }
                        else{
                            v.classList.remove('input-error');
                            v.classList.remove('snake-horizontal');
                            v.classList.add(i);
                            textErrorDias30.classList.remove('active');
                            campos[v.id] = v.value
                        }
                        if (inputMes.value == 2 && inputDia.value > 28) {
                            v.classList.add("input-error");
                            v.classList.remove(i);
                            v.classList.toggle('shake-horizontal');
                            textErrorDias30.classList.add('active');
                            campos[v.id] = null
                        }
                        else{
                            v.classList.remove('input-error');
                            v.classList.remove('snake-horizontal');
                            v.classList.add(i);
                            textErrorDias30.classList.remove('active');
                            campos[v.id] = v.value
                        }
                    }
                }
            }

        v.classList.remove('input-error');
        v.classList.remove('snake-horizontal');
        v.classList.add(i);
        t.classList.remove('active');
        campos[v.id] = v.value
        }
    })
}

validarDigitos (inputDia,textErrorDia, "input1");
validarDigitos (inputMes,textErrorMes, "input2");
validarDigitos (inputAño,textErrorAño, "input3");

campos = {}

const btnCalcular = document.getElementById('btnCal');


function calcular (){
    if(campos.dia === undefined || campos.mes === undefined || campos.año === undefined ||
        campos.dia === Number || campos.mes === undefined || campos.año === undefined|| campos.dia === undefined || campos.mes === Number || campos.año === undefined||campos.dia === undefined || campos.mes === undefined || campos.año === Number){
        textBotonError.classList.remove('desactive');

        inputDia.classList.add('input-error');
        inputMes.classList.add('input-error');
        inputAño.classList.add('input-error');

        inputDia.classList.remove("input1");
        inputMes.classList.remove("input2");
        inputAño.classList.remove("input3");

        inputDia.classList.toggle('shake-horizontal');
        inputMes.classList.toggle('shake-horizontal');
        inputAño.classList.toggle('shake-horizontal');
        return;
    }else{
        textBotonError.classList.add('desactive');
        inputDia.classList.remove('input-error');
        inputMes.classList.remove('input-error');
        inputAño.classList.remove('input-error');

        inputDia.classList.add("input1");
        inputMes.classList.add("input2");
        inputAño.classList.add("input3");

    }

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    
    const diaIngresado = parseInt(campos.dia);
    const diferenciaDia = Math.abs(diaIngresado - dia);
    rayitaDia.innerText = diferenciaDia;
    
    const mesIngresado = parseInt(campos.mes);
    const diferenciaMes = Math.abs(mesIngresado - mes);
    rayitaMes.innerText = diferenciaMes;
    
    const añoIngresado = parseInt(campos.año);
    const diferenciaAño = Math.abs(añoIngresado - anio);
    rayitaAño.innerText = diferenciaAño;
}

btnCalcular.addEventListener('click', calcular)