function validateEmail(mail){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value)){
        return (true)
    }
    alert("Invalid Input")
    return (false)
}