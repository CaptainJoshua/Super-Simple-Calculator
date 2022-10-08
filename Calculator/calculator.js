function display(val) {
    document.getElementById("id1").value += val
}

// Function that evaluates the digit and return result  
function solve() {
    let x = document.getElementById("id1").value
    let y = eval(x)
    document.getElementById("id1").value = y
}

function clr() {
    document.getElementById("id1").value = ""
}