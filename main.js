const output_year = document.querySelector(".output-year"); 
const output_month = document.querySelector(".output-month"); 
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

const input_year = document.querySelector("#year"); 
const input_month = document.querySelector("#month"); 
const input_day = document.querySelector("#day");
// const submit_btn = document.querySelector(".submin-btn");


const error_year = document.querySelector(".error-year"); 
const error_month = document.querySelector(".error-month"); 
const error_day = document.querySelector(".error-day");

submit_btn.addEventListener('click' , CalculateDate)

input_day.addEventListener("input" , (e) => {
    if(+input_day.value > 31 ){
        error_day.textContent = "Must be a valid date"
        isValid = false ;
        return;
    } else {
        isValid  = true ;
        error_day.textContent = "";
    }
    if(+input_day.value ===  0){
        isValid = false;
        error_day.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_day.textContent = "";
    }
});

input_month.addEventListener("input" , (e) => {
    if(+input_month.value > 12 ){
        error_month.textContent = "Must be a valid date"
        isValid = false ;
        return;
    } else {
        isValid  = true ;
        error_month.textContent = "";
    }
    if(+input_month.value ===  0){
        isValid = false;
        error_month.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_month.textContent = "";
    }
});

input_year.addEventListener("input" , (e) => {
    if(+input_year.value > 2024 ){
        error_year.textContent = "Must be a valid date"
        isValid = false ;
        return;
    } else {
        isValid  = true ;
        error_year.textContent = "";
    }
    if(+input_year.value ===  0){
        isValid = false;
        error_year.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_year.textContent = "";
    }
});

function CalculateDate () {
    if(isValid){
        let date = new Date();
        let get_day = date.getDate();
        let get_month = 1 + date.getMonth();
        let get_year = date.getFullYear();
        let all_month = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if (day.value > get_day ){
        get_day = get_day + all_month[get_month - 1];
        get_day = get-day - 1 ;
        }
    if (month.value > get_month){
        get_month = get_month + 12 ;
        get_year = get_year - 1;
    
        }
        let d = get_day - day.value;
        let m = get_month - month.value;
        let y = get_year - year.value ;    
        output_day.textContent = d;
        output_month.textContent = m;
        output_year.textContent = y;

    }else{
        alert("error");
    }
}