var displayInput = document.getElementById("displayInput")
function getval(val){
    displayInput.value += val;
}
function calculate(){
    displayInput.value = eval(displayInput.value);
}
function clearAll(){
    displayInput.value = "";
}