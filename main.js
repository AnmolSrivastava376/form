import {sampleData} from "./sampleData.js";
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  
  const splitString = (string)=>{
    var arr=string.split(',').map(item=>item.trim())
    return arr.filter(item=>item !=="");
  }
  let test = document.getElementById('hobby')
    test.addEventListener("input", (event) => {
        let sample=event.target.value;
        if(sample[sample.length-1]===','){
            var element = document.getElementById('hobbyarray')
            element.innerHTML=""
            splitString(sample).forEach((value)=>{
                var paragraph=document.createElement("p")
                paragraph.textContent=value
                element.appendChild(paragraph)
            })
        }
    })
    const fillResponse = (studentObj) => {
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = '';
        if(studentObj){
            for (const [key, value] of Object.entries(studentObj)) {
                const newDiv = document.createElement('div');
                newDiv.textContent= `${key} : ${value}`
                responseDiv.appendChild(newDiv)
            }
        }
        else{
            const newDiv = document.createElement('div');
            newDiv.textContent= `No such entry found!!!!`
            responseDiv.appendChild(newDiv)
        }
    }
    
const handleSearch=()=>{
    let rollno=document.getElementById('searchname').value
    const reqData = sampleData.find(student=> student.rollNumber==rollno)
    console.log(reqData)
    fillResponse(reqData)
}
const handleSwitch= ()=>{
    let cn = document.getElementById('formcont')
    if(cn.classList.contains('rotate')){
        cn.classList.remove('rotate')
    }else{
        cn.classList.add('rotate')
    }
}
const handleClick = ()=>{
    var fname = document.getElementById('fname')
    var lname = document.getElementById('lname')
    var roll = document.getElementById('roll')
    var age = document.getElementById('age')
    var gender = document.getElementById('gen')
    var hobby = document.getElementById('hobby')
    const studentObj = {
        firstName: fname.value,
        lastLame: lname.value,
        rollNumber: roll.value,
        age: age.value,
        gender: gender.value,
        hobby: splitString(hobby.value)
    }
    sampleData.push(studentObj)
    fname.value=""
    lname.value=""
    roll.value=""
    age.value=""
    gender.value=""
    hobby.value=""
    var element = document.getElementById('hobbyarray')
    element.innerHTML=""
}

document.getElementById('submit').addEventListener('click',handleClick)
document.getElementById('switch').addEventListener('click',handleSwitch)
document.getElementById('switchback').addEventListener('click',handleSwitch)
document.getElementById('go').addEventListener('click',handleSearch)
});