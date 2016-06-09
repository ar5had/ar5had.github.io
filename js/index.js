function thanks(){
  var nameVal = document.getElementById('name').checkValidity();
  var emailVal = document.getElementById('email').checkValidity();
  var textareaVal = document.getElementById('message').checkValidity();
  if(nameVal && emailVal && textareaVal){
    document.getElementById('sendButton').style.width = "97px";
    document.getElementById('sendButton').setAttribute('value','thanks!');
  }
}
