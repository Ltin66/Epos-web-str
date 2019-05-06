var count= 2;
function validate()
{
  var un = document.login.username.value;
  var pw = document.login.password.value;
  var valid = false;
  var usernameArray = ["Test1", "Test2"];
  var passwordArray = ["12345", "54321"];
  for (var i = 0; i < usernameArray.length; i++)
  {
    if ((un == usernameArray[i]) && (pw == passwordArray[i]))
    {
      valid = true;
      break;
    }
  }
  if (valid)
  {
    alert("Login was successful");
    window.history.go(0); //Povratak na stranicu
    return false;
  }
  var again = " tries";
  if (count ==1)
  {
    again = " try"
  }
  if (count >= 1)
  {
    alert("Wrong password or username")
    count--;
  }
  else
  {
    alert("Incorrect password or username you are now blocked");
    document.login.username.value = "You are now Blocked";
    document.login.password.value = "ne";
    document.login.username.disabled = true;
    document.login.password.disabled = true;
    return false;
  }
}