function calculateexp() {
    const base = parseFloat(document.getElementById("input_number").value);
    const exponent = parseFloat(document.getElementById("input_exponent").value);

    if (!base || !exponent && exponent !== 0) {
        document.getElementById("res").innerText = "Please enter valid numbers for both base and exponent.";
        return;
    }

    let formatbase = base.toLocaleString();  // Formatting base with commas
    const result = base ** exponent;
    let formatresult = result.toLocaleString(); // Formatting result with commas

    document.getElementById("res").innerText = `${formatbase} to the power of ${exponent} is ${formatresult}`;
}
