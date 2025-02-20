
function insertvalue(val) {
    const inputfield = document.getElementById("input_pick");
    
    if (val === '*') {
        inputfield.value += '×';
    }else {
        inputfield.value += val;
    }
    calculate();
}

function clearinput(){
    const inputfield = document.getElementById("input_pick");
    inputfield.value = "";
    calculate();
}
function clearlast(){
    const inputfield = document.getElementById("input_pick");
    inputfield.value = inputfield.value.slice(0,-1);
    calculate()
}
function calculate() {
    const inputfield = document.getElementById("input_pick");
    let input = inputfield.value.replace(/×/g, '*'); 
    input = input.replace(/%/g, '/100');
    let inputformat = inputfield.toLocaleString();

    try {
        if(input.trim() === ""){
            document.getElementById("answer").innerText = "";
        }else{
            const result = math.evaluate(input);
            document.getElementById("answer").innerText = result.toLocaleString();
        } 
    } catch (error) {
        document.getElementById("answer").innerText = ""; 
    }
}
