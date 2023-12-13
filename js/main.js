

function validate(){
    var result = document.getElementById("result");

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirm").value;

        //Style Result
        result.setAttribute("class","text-center alert alert-danger p-2 ")
        result.style.transition = "all .5s linear"
        //Style Result

    if(user=="" && email=="" && password=="" && confirmpass==""){
        result.innerHTML = "*Enter Data In Form";
        return false;
    }else if (user.length <5 || user.length >15 ){
        result.innerHTML = "*Enter 5-15 Chra in User Name";
        return false;
    }else if (email.indexOf('@')==-1){
        result.innerHTML = "*Enter Valid Email";
        return false;
    }else if (password.length <8){
        result.innerHTML = "*Enter At Least 8 Char In Password";
        return false;
    }else if (password != confirmpass){
        result.innerHTML = "*Matching Password";
        return false;
    }else{
        return true;
    }
}