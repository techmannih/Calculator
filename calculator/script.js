const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

const btns = document.querySelectorAll(".btn-operator,.btn-number") ;

const on = document.querySelector(".on")
const off = document.querySelector(".off")

on.onclick = () => onScreen()
off.onclick = () => offScreen()




let calculator = true;

const offScreen = () => {
  display.innerHTML = "";
  display.style.background = "#636361";
  display.style.border = "1px solid #636361";
  btns.forEach(btn => {
    btn.disabled =true
  });

  calculator = false;
};

const onScreen = () => {
  display.style.background = " rgb(27, 25, 25)";
  display.style.border = "2px solid #c0c0c0";
  btns.forEach(btn => {
    btn.disabled =false;

btns.forEach((item) => {
  if (calculator) return; // Check if the calculator is on before processing button click
  else{
    item.onclick = () => {
      if (item.id == "clear") {
        display.innerText = "";
      } 
      else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
      else {
        display.innerText += item.id;
    }
    }
  };
});
  });

};


offScreen();