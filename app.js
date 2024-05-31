const fahrenheitField = document.getElementById('t-fahrenheit');
const kelvinField = document.getElementById('t-kelvin');
const celsiusInput = document.getElementById('t-celsius');


function convertTemperature(){
  const celsius = document.getElementById('t-celsius').value;
  console.log(celsius);
  if(checkIfNumber(celsius)){
    let celsiusNumber = Number(celsius);
    let fahrenheit = (celsiusNumber *9/5) + 32;
    let kelvin = celsiusNumber + 273.15;  
    fahrenheitField.innerHTML = fahrenheit +"°F <br>";
    kelvinField.innerHTML = kelvin + "K";
    fahrenheitField.style.display = "block";
    kelvinField.style.display = "block";
  }else{
    alert('Please enter a number');
    resetFields();
    document.getElementById('t-celsius').value = "";
  }
}

function checkIfNumber(n){
  let floatN = parseFloat(n);
  if(isNaN(n) || floatN === NaN){
    return false;
  }else if (n === ""){
    return false;
  }
  return true;
}

function resetFields(){
  fahrenheitField.innerHTML = "";
  kelvinField.innerHTML = "";
  fahrenheitField.style.display = "none";
  kelvinField.style.display = "none";
}

const calculateB = document.getElementById('calculateB');
calculateB.addEventListener('click', convertTemperature);
