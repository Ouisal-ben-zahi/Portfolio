function sendEmail(){
    var parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        object:document.getElementById("object").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_iug5gzi","template_ur1khqs",parms).then(alert("Email sent!!"))

}





