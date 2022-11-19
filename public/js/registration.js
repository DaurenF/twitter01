var password = document.getElementById('password');
var password_confirm = document.getElementById('password_confirm');
var submit = document.getElementById('submit');
var error =  document.getElementById('error');
submit.addEventListener('click', validatePass);
function validatePass(){
    
    var check = true;
    if(document.getElementById('email').value.length < 2){
        document.getElementById('label_email').style.display = "block";
        check = false;
    }
    else{
        document.getElementById('label_email').style.display = "none";
        check = true;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value)) console.log('d');
    else document.getElementById('label_email').style.display = "block";check = false;

    
    
    if(document.getElementById('name').value.length < 2){
        document.getElementById('label_name').style.display = "block";
        check = false;
    }
    else{
        document.getElementById('label_name').style.display = "none";
        check = true;
    }
    if(document.getElementById('surname').value.length < 2){
        document.getElementById('label_surname').style.display = "block";
        check = false;
    }
    else{
        document.getElementById('label_surname').style.display = "none";
        check = true;
    }
    if((password.value != password_confirm.value) || password.value.length < 1 || password_confirm.value.length < 1){
        error.style.display = "block";
        check = false;
    }else{
        error.style.display = "none";
        check = true;
    }

    if(check){
        document.getElementById('sumbit_form').submit();
    }
}



