var emailArray=[];
var passwordArray=[]
var regBox = document.getElementById("register")
var loginBox = document.getElementById("login")
var forgetBox = document.getElementById("forgot")
var otpBox = document.getElementById("loginWithOtp")
var loginTab = document.getElementById("lt")
var regTab = document.getElementById("rt")



function logintab(){
    event.preventDefault()
    loginBox.style.visibility ="visible";
    otpBox.style.visibility="hidden";
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    loginTab.style.backgroundColor="#3066be"
    regTab.style.backgroundColor="#28C2FF"
}
function registertab(){
    event.preventDefault()
    loginBox.style.visibility ="hidden";
    forgetBox.style.visibility="hidden";
    otpBox.style.visibility="hidden";
    regBox.style.visibility="visible";
    loginTab.style.backgroundColor="#28C2FF"
     regTab.style.backgroundColor="#3066be"
}
function fortab(){
    event.preventDefault()
    loginBox.style.visibility ="hidden";
    regBox.style.visibility="hidden";
    otpBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    loginTab.style.backgroundColor="#28C2FF"
    regTab.style.backgroundColor="#28C2FF"
}
function otptab(){
    event.preventDefault()
    loginBox.style.visibility ="hidden";
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    otpBox.style.visibility="visible";
    loginTab.style.backgroundColor="#28C2FF"
    regTab.style.backgroundColor="#28C2FF"
}

function login(){
    event.preventDefault()
    var email=document.getElementById("se").value
    var password=document.getElementById("sp").value
    var i=emailArray.indexOf(email)

    if(emailArray.indexOf(email)==-1){
        if(email==""){
            alert("Email required")
            return
        }
        alert("Email does not exist.")
        return
    }
    else if(passwordArray[i]!=password){
        if(password==""){
            alert("Password required")
            return
        }
        alert("Password does not match.")
    }
    else{
        alert(email+" Login successfull Welcome..")
        document.getElementById("se").value=""
        document.getElementById("sp").value=""
    }
}
function register(){
    event.preventDefault()
    var email=document.getElementById("re").value
    var password=document.getElementById("rp").value
    var passwordRetype=document.getElementById("rrp").value
    if(email==""){
        alert("Email required")
        return
    }
    else if(password==""){
        alert("Password required")
        return
    }
    else if(passwordRetype==""){
        alert("Retype Password required")
        return
    }
    else if(password!=passwordRetype){
        alert("Password doesn't match \nRetype your password")
        return
    }
    else if(emailArray.indexOf(email)==-1){
        emailArray.push(email)
        passwordArray.push(password)

        alert(email+"  Thanks for registration. \nTry to login now")
        document.getElementById("re").value=""
        document.getElementById("rp").value=""
        document.getElementById("rrp").value=""
    }
}
function forgot(){
    event.preventDefault()
    var email=document.getElementById("fe").value
    if(emailArray.indexOf(email)==-1){
        if(email==""){
            alert("Email required")
            return
        }
        alert("Email does not exist.")
        return
    }
    else{
        alert("Your new password is send to your email check it.\nThanks")
        document.getElementById("fe").value=""
    }
}
// login with otp
inputOtp = document.getElementById("inputOtp")
let otpNo = Math.floor(Math.random()*9000)+1000
function generateOtp(){
    alert(otpNo+" is your One time password to login to your account. Please enter the OTP to proceed.")
   
}
function loginSuccess(){
    if(inputOtp.value==""){
        alert("Enter the One time password!")

    }
    else if(inputOtp.value==otpNo){
        alert("Login with OTP is Successfully")
        inputOtp.value=""
    }
    else{
        alert("Incorrect One time password!")
        inputOtp.value=""
    }
}