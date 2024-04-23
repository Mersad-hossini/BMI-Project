// Variable
let $ = document
let weight = $.getElementById("weight")
let weightValueSpan = $.getElementById("weight-val")

let height = $.getElementById("height")
let heightValueSpan = $.getElementById("height-val")

let result = $.getElementById("result")
let category = $.getElementById("category")

// Function
function calculate() {
    let weightValue = weight.value
    let heightValue = height.value

    weightValueSpan.innerHTML = weightValue + 'kg'
    heightValueSpan.innerHTML = heightValue + 'cm'

    let bmi = (weightValue / (Math.pow(heightValue / 100, 2))).toFixed(1)
    
    result.innerHTML = bmi

    if(bmi < 18.5) {
        result.style.color = "rgb(255,196,77)" 
        category.innerHTML = "Underweight"
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        result.style.color = "rgb(11,232,129)" 
        category.innerHTML = "Normal weight"
    } else if(bmi >= 25 && bmi < 29.9) {
        result.style.color = "rgb(255,136,77)" 
        category.innerHTML = "Overweight"
    } 
    else {
        result.style.color = "rgb(255,94,87)" 
        category.innerHTML = "Obese"
    }
}

// add Event Listener
weight.addEventListener("input" , calculate) // We can use ochange event but value dosen't change until we we don't click
height.addEventListener("input" , calculate) 