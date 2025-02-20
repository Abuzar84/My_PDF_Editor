// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Function to calculate the trigonometric value
function calculateTrig(type) {
    let angle = document.getElementById('angle').value;
    let unit = document.querySelector('input[name="unit"]:checked').value;

    // If the angle input is empty, do nothing
    if (!angle) {
        document.getElementById('result').innerText = "Please enter an angle!";
        return;
    }

    angle = parseFloat(angle); // Convert input to number

    // Convert angle to radians if it's in degrees
    if (unit === 'degrees') {
        angle = degreesToRadians(angle);
    }

    let result;
    let resultText = '';

    // Calculate the trigonometric value based on the selected type
    switch (type) {
        case 'sin':
            result = Math.sin(angle);
            resultText = 'Sin';
            break;
        case 'cos':
            result = Math.cos(angle);
            resultText = 'Cos';
            break;
        case 'tan':
            result = Math.tan(angle);
            resultText = 'Tan';
            break;
        case 'asin':
            if (angle < -1 || angle > 1) {
                result = "Invalid input for arcsin!";
            } else {
                result = radiansToDegrees(Math.asin(angle)); // arcsin returns radians, so convert to degrees
                resultText = 'Arcsin';
            }
            break;
        case 'acos':
            if (angle < -1 || angle > 1) {
                result = "Invalid input for arccos!";
            } else {
                result = radiansToDegrees(Math.acos(angle)); // arccos returns radians, so convert to degrees
                resultText = 'Arccos';
            }
            break;
        case 'atan':
            result = radiansToDegrees(Math.atan(angle)); // arctan returns radians, so convert to degrees
            resultText = 'Arctan';
            break;
        case 'sec':
            if (Math.cos(angle) === 0) {
                result = "Undefined (cos = 0)";
            } else {
                result = 1 / Math.cos(angle); // sec = 1 / cos
                resultText = 'Sec';
            }
            break;
        case 'csc':
            if (Math.sin(angle) === 0) {
                result = "Undefined (sin = 0)";
            } else {
                result = 1 / Math.sin(angle); // csc = 1 / sin
                resultText = 'Csc';
            }
            break;
        case 'cot':
            if (Math.tan(angle) === 0) {
                result = "Undefined (tan = 0)";
            } else {
                result = 1 / Math.tan(angle); // cot = 1 / tan
                resultText = 'Cot';
            }
            break;
        default:
            result = "Unknown operation";
    }

    // Display the result
    document.getElementById('result').innerText = `${resultText}(${document.getElementById('angle').value}) = ${result.toFixed(4)}`;
}
