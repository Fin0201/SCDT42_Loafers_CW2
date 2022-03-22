function sendForm(){
    const email = document.getElementById("email").value;
    const enquiry = document.getElementById("email").value;


    if(email === "" | enquiry === ""){
        if(email === ""){
            document.getElementById("email-error").innerHTML = "Please enter an email address.";
        }
        if(enquiry === ""){
            document.getElementById("enquiry-srror").innerHTML = "Please enter your enquiry.";
        }
    }
    else{
        document.getElementById("form-sent").innerHTML = "Form successfully sent!";
    }
}

//weather api