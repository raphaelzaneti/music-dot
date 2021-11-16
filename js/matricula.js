const checkBox = document.getElementsByName("curso")
const buttonConfirma = document.getElementById("button-confirma")
const totalCourses = document.getElementById("total-courses")
const totalHours = document.getElementById("total-hours")

console.log(totalHours)

function updateCourseHours(){
    let coursesCounter = 0
    
    const checkedBoxes = Array.from(checkBox).map(e => {
        if(e.checked === true){
            coursesCounter++
            return parseInt(e.value)
        }
        return 0
    })

    totalCourses.innerText = coursesCounter + " cursos"
    totalHours.innerText = sumArray(checkedBoxes)+"h"
}

function sumArray(array){
    return array.reduce((e, f) => e+f)
}


//checkBox.addEventListener('change', () => updateCourseHours())

buttonConfirma.onclick = () => updateCourseHours()