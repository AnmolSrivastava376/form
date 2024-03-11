import {sampleData} from "./sampleData.js";

$(document).ready(function() {
    console.log("DOM fully loaded and parsed");

    const splitString = (string) => {
        var arr = string.split(',').map(item => item.trim());
        return arr.filter(item => item !== "");
    }

    $('#hobby').on("input", function(event) {
        let sample = $(this).val();
        if (sample[sample.length - 1] === ',') {
            var element = $('#hobbyarray');
            element.empty();
            splitString(sample).forEach(function(value) {
                var paragraph = $('<p>').text(value);
                element.append(paragraph);
            });
        }
    });

    const fillResponse = (studentObj) => {
        const responseDiv = $('#response');
        responseDiv.empty();
        if (studentObj) {
            for (const [key, value] of Object.entries(studentObj)) {
                const newDiv = $('<div>').text(`${key} : ${value}`);
                responseDiv.append(newDiv);
            }
        } else {
            const newDiv = $('<div>').text(`No such entry found!!!!`);
            responseDiv.append(newDiv);
        }
    }

    const handleSearch = () => {
        let rollno = $('#searchname').val();
        const reqData = sampleData.find(student => student.rollNumber == rollno);
        fillResponse(reqData);
    }

    const handleSwitch = () => {
        $('#formcont').toggleClass('rotate');
    }

    const handleClick = () => {
        var fname = $('#fname');
        var lname = $('#lname');
        var roll = $('#roll');
        var age = $('#age');
        var gender = $('#gen');
        var hobby = $('#hobby');
        if(fname.val()===""){
            let err=$('#firstname')
            err[0].style.display="block"
            return
        }
        if(lname.val()===""){
            let err=$('#lastname')
            err[0].style.display="block"
            return
        }
        if(age.val()==""){
            let err=$('#agemsg')
            err[0].style.display="block"
            return
        }
        if(roll.val()==""){
            let err=$('#rollno')
            err[0].style.display="block"
            return
        }
        
        const studentObj = {
            firstName: fname.val(),
            lastLame: lname.val(),
            rollNumber: roll.val(),
            age: age.val(),
            gender: gender.val(),
            hobby: splitString(hobby.val())
        }
        sampleData.push(studentObj);
        alert("Data submitted")
        fname.val("");
        lname.val("");
        roll.val("");
        age.val("");
        gender.val("Male");
        hobby.val("");
        $('#hobbyarray').empty();
    }

    $('#submit').click(handleClick);
    $('#switch').click(handleSwitch);
    $('#switchback').click(handleSwitch);
    $('#go').click(handleSearch);

    $('#fname').click(()=>{$('#firstname')[0].style.display="none"})
    $('#lname').click(()=>{$('#lastname')[0].style.display="none"})
    $('#age').click(()=>{$('#agemsg')[0].style.display="none"})
    $('#roll').click(()=>{$('#rollno')[0].style.display="none"})
});
