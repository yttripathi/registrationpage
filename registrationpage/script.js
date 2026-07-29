function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  if (name == "" || email == "" || phone == "" || password == "") {
    document.getElementById("msg").style.color = "red";
    document.getElementById("msg").innerHTML = "Please fill all fields";
    return;
  }

  document.getElementById("msg").style.color = "green";
  document.getElementById("msg").innerHTML = "Registration Successful";
}
