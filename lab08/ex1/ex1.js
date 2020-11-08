document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#button")
    button.addEventListener("click", () => {
      validate();
      document.querySelector("#input1").value = "";
      document.querySelector("#input2").value = "";
  })

function validate() {
  let txt1 = document.querySelector("#input1").value;
  let txt2 = document.querySelector("#input2").value;
  if(txt1 != txt2)
  {
    alert("Password does not match!");
  }
  if(txt1.length < 8)
  {
    alert("Password has to be at least 8 characters long!");
  }
  if(txt1 == txt2)
  {
    alert("Password validated.");
  }
}
})
