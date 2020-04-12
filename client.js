console.log('in JS');
$(document).ready(readyNow)

function readyNow() {
    $('#submitBtn').on('click',addToArray)
}//end of readyNow Function

let employeeArray = [];
// // creating a object where I can pass the information given for the employees
function addToArray(){
    let objectEmployeeInformation = {

    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber:$('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    annualSalary: $('#annualSalary').val()
}
employeeArray.push(objectEmployeeInformation); 
console.log('button is clicked');

}// end addToArray 

// end of Object Employee info



//append information to DOM
// function appendToDom() {
    
// }

// //function to calculate monthly costs

// function calculateMonthlyCosts() {
    
// }