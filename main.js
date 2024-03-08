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
const handleClick = ()=>{
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var roll = document.getElementById('roll').value
    var age = document.getElementById('age').value
    var gender = document.getElementById('gen').value
    var hobby = document.getElementById('hobby').value
    const studentObj = {
        firstName: fname,
        lastLame: lname,
        rollNumber: roll,
        age: age,
        gender: gender,
        hobby: splitString(hobby)
    }
    console.log(studentObj)
}

document.getElementById('submit').addEventListener('click',handleClick)

});