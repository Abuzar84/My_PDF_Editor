function rootcalc(){
    const num = parseFloat(document.getElementById("root_number").value);
    const root = parseFloat(document.getElementById("root_number_value").value);
    const result_root = Math.pow(num, 1/root);

    if(isNaN(num) || isNaN(root) || root ===0){
        document.getElementById("res_root").innerText = "Invalid Number";
        return;
    }
    let formatresultnum = result_root.toLocaleString();
    document.getElementById("res_root").innerText = `${formatresultnum}`;
}