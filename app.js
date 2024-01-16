const form = document.querySelector(".bmiInputs")
const weightInKG = document.getElementById("weight")
const displayBmi = document.querySelector(".displayBmi")
const foot = document.querySelector("#foot")
const inch = document.querySelector("#inch")




function formHandler(event){
    event.preventDefault()
    
    const weight = Number(weightInKG.value)
    const heightInInch = Number(foot.value) * 12 + Number(inch.value)
    const heightInCM = heightInInch * 2.54
    const heightInMeter = heightInCM / 100


    if(weight < 0){
        return alert("Enter Only Posive Values for weight")
    }

    let BMI = weight / (heightInMeter * heightInMeter)
    BMI = BMI.toFixed(2)

    displayBmi.innerHTML = `<h2>Your BMI is ${BMI}</h2>
    <p>You fall under ${checkRange(BMI)} Category</p>
    <button id="show-table">Show BMI Table</button>`
    displayBmi.querySelector("#show-table").addEventListener("click", showBMITable)
    
}

function checkRange(bmi){
    if(bmi < 16){
        return "Severe Thinness"
    } else if (bmi <= 17){
        return "Moderate Thinness"
    } else if (bmi <= 18.5){
        return "Mild Thinness"
    } else if (bmi <= 25){
        return "Normal	"
    } else if (bmi <= 30){
        return "Overweight"
    } else if (bmi <= 35){
        return "Obese Class I"
    }else if (bmi <= 40){
        return "Obese Class II"
    }else if (bmi > 40){
        return "Obese Class III"
    }
}


function showBMITable(e){
document.querySelector(".table-container").classList.toggle("hidden")
if(e.target.innerHTML === "Show BMI Table"){
    e.target.innerHTML = "Hide BMI Table"
}else{
    e.target.innerHTML = "Show BMI Table"
}
}

form.addEventListener("submit", formHandler)