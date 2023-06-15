/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl = document.getElementById("convert")
let inputEl = document.getElementById("input-el")
let bottom = document.getElementById("bottom")

let conversion = {
    feet: 1,
    meter: 1,
    gallon: 1,
    liter: 1,
    pound: 1,
    kilogram: 1   
}

btnEl.addEventListener("click", function(){
    let calc = 0
    calc = inputEl.value * 3.281
    conversion.feet = calc.toFixed(3)
    calc = inputEl.value / 3.281
    conversion.meter = calc.toFixed(3)
    calc = inputEl.value * 0.264
    conversion.gallon = calc.toFixed(3)
    calc = inputEl.value / 0.264
    conversion.liter = calc.toFixed(3)
    calc = inputEl.value * 2.204
    conversion.pound = calc.toFixed(3)
    calc = inputEl.value / 2.204
    conversion.kilogram = calc.toFixed(3)
    
    bottom.innerHTML = 
    `
    <div class="box">
                <p class="subtitle"> Length (Meter/Feet) </p>
                <p> ${inputEl.value} meters = ${conversion.feet} feet | ${inputEl.value} feet = ${conversion.meter} meters </p>
            </div>
            <div class="box">
                <p class="subtitle"> Volume (Liters/Gallons) </p>
                <p> ${inputEl.value} liters = ${conversion.gallon} gallons | ${inputEl.value} gallons = ${conversion.liter} liters </p>
            </div>
            <div class="box">
                <p class="subtitle"> Length (Meter/Feet) </p>
                <p> ${inputEl.value} kilos = ${conversion.pound} pounds | ${inputEl.value} pounds = ${conversion.kilogram} kilos </p>
            </div>
        </div>
    `  
})