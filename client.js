console.log('in JS');
$(document).ready(readyNow)

function readyNow() {
    $('#submitBtn').on('click', addToArray)
    $('#submitBtn').on('click', appendToDom)
    $('tbody').on('click','#deleteBtn', deleteFromArray)
    $('#submitBtn').on('click', calculateMonthly)
}//end of readyNow Function

let employeeArray = [];
// // creating a object where I can pass the information given for the employees
function addToArray() {
    let objectEmployeeInformation = {

        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    employeeArray.push(objectEmployeeInformation);
    // console.log('button is clicked');
}// end addToArray 





//append information to DOM and empty inputs
function appendToDom() {
    let el = $('table tbody')
    el.empty();
    for (let i = 0; i < employeeArray.length; i++) {
        el.append(
            `<tr>
            <td>${employeeArray[i].firstName}</td>
            <td>${employeeArray[i].lastName}</td>
            <td>${employeeArray[i].idNumber}</td>
            <td>${employeeArray[i].jobTitle}</td>
            <td>${employeeArray[i].annualSalary}</td>
            <td><button id= 'deleteBtn'>Delete</button></td>
          </tr>`
        )
            $('#firstName').val(''),
            $('#lastName').val(''),
            $('#idNumber').val(''),
            $('#jobTitle').val(''),
            $('#annualSalary').val('')

    }

}//end of appendToDom function

function deleteFromArray() {
    for (let i = 0; i < employeeArray.length; i++) {
        $(this).closest('tr').remove()
       //doesn't remove from array 
    }
    console.log('in Delete');
    
}//end of deleteFromArray function

function calculateMonthly() {
    let cost = 0;
    let el = $('#totalMonthly');
    for (let i = 0; i < employeeArray.length; i++) {
        cost += Number(`${employeeArray[i].annualSalary}`) / 12;
    //    cost += Number(employeeArray[i].annualSalary) / 12;
     //how to return and actually display the
     //target annualSalary using .annualSalary?
     el.empty()
     el.append(cost);
     if (cost > 20000) {
         $('#totalMonthly').addClass('monthlyWarning')
     }
}

}//end of calculateMonthly function

