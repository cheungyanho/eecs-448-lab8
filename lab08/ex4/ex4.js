document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#button")
    button.addEventListener("click", () => {
      colour();
      document.querySelector("#input1").value = "";
      document.querySelector("#input2").value = "";
      document.querySelector("#input3").value = "";
      document.querySelector("#input4").value = "";
      document.querySelector("#input5").value = "";
      document.querySelector("#input6").value = "";
      document.querySelector("#input7").value = "";
      document.querySelector("#input8").value = "";
  })

function colour(){
  let border1 = document.querySelector("#input1").value;
  let border2 = document.querySelector("#input2").value;
  let border3 = document.querySelector("#input3").value;
  let border4 = document.querySelector("#input4").value;
  let background1 = document.querySelector("#input5").value;
  let background2 = document.querySelector("#input6").value;
  let background3 = document.querySelector("#input7").value;
  let background4 = document.querySelector("#input8").value;
  var para = document.getElementById("paragraph");
  if(isNaN(border1)||isNaN(border2)||isNaN(border3)||border1>255||border1<0||border2>255||border2<0||border3>255||border3<0)
  {
    alert("Please enter a valid number for border colour! Number has to be between 0 and 255!");
  }else if(isNaN(border4)||border4<0)
  {
    alert("Please enter a valid number for border width!")
  }else if(isNaN(background1)||isNaN(background2)||isNaN(background3)||background1>255||background1<0||background2>255||background2<0||background3>255||background3<0)
  {
    alert("Please enter a valid number for background colour! Number has to be between 0 and 255!");
  }else if(isNaN(background4)||background4<0)
  {
    alert("Please enter a valid number for border width!")
  }else
  {
    para.style.borderColor = "rgb("+border1+"," +border2+"," +border3+")";
    para.style.backgroundColor = "rgb("+background1+"," +background2+"," +background3+")";
    para.style.borderWidth = border4 + "px";
    para.style.backgroundSize = background4 + "px " + background4 + "px";
    alert("You have successfully changed the colour of the border/background!");
    alert("Current border colour = " + border1 + ", " + border2 + ", " + border3 + "\nCurrent background colour = " + background1 + ", " + background2 + ", " + background3);
  }
}

})
