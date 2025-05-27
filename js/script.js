let form=document.querySelector("#form")
let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let cPassword=document.querySelector("#cpassword")

form.addEventListener("submit",(e)=>
{
  
   if(!validationInp())
   {
        e.preventDefault()
   }
})
function validationInp()
{
    let userVal=username.value.trim()
    let emailVal=email.value.trim()
    let passwordVal=password.value.trim()
    let cPasswordVal=cPassword.value.trim()
    let succes=true

    if(userVal==="")
    {
        succes=false
        setError(username,"Username required")
    }else
    {
        setSucces(username)
    }

    if(emailVal==="")
    {
        succes=false
        setError(email,"Email required")
    }
    else if(!validateEmail(emailVal))
    { 
        succes=false
        setError(email,"Please enter a valid email")
    }
    else
    {
        setSucces(email)
    }

    if(passwordVal==="")
    {
        succes=false
        setError(password,"Password required")
    }
    else if(passwordVal.length<8)
    {
        succes=false
        setError(password,"Password must be atleast 8 character long")
    }
    else{
        setSucces(password)
    }

    if(cPasswordVal==="")
    { 
        succes=false
        setError(cPassword,"Confirm password required")
    }
    else if(cPasswordVal!==passwordVal)
    {
        succes=false
        setError(cPassword,"Password does not match")
    }
    else
    {
        setSucces(cPassword)
    }
  
    return succes
}
function setError(element,message)
{
   let inputgroup=element.parentElement
   let errorMsg=inputgroup.querySelector(".error")
   errorMsg.innerText=message

   inputgroup.classList.add("error")
   inputgroup.classList.remove("succes")
    
}
function setSucces(element)
{
   let inputgroup=element.parentElement
  let errorMsg=inputgroup.querySelector(".error")
  errorMsg.innerText=""

  inputgroup.classList.add("succes")
  inputgroup.classList.remove("error")

}
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

