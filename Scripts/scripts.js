function sendForm(){
    const email = document.getElementById("email").value;
    const enquiry = document.getElementById("email").value;


    if(email === "" | enquiry === ""){
        if(email === ""){
            document.getElementById("emailError").innerHTML = "Please enter an email address.";
            console.log("emai")
        }
        if(enquiry === ""){
            document.getElementById("enquiryError").innerHTML = "Please enter your enquiry.";
            console.log("enq")
        }
    }
    else{
        document.getElementById("formSent").innerHTML = "Form successfully sent!";
        console.log("wokd")
    }
}