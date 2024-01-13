function awan(e){
    document.getElementById('inp').value += e
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    document.getElementById('inp').value = ''
}

function myclr() {
    var inputElement = document.getElementById('inp');
    var inputValue = inputElement.value;

    // Check if there is anything to clear
    if (inputValue.length > 0) {
        // Remove the last character from the input value
        inputElement.value = inputValue.substring(0, inputValue.length - 1);
    }
}

