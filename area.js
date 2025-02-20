function areacircle(){
    const circle_value = parseFloat(document.getElementById("circle").value);
    const unit = document.getElementById("unit_select").value;
   
    if (isNaN(circle_value) || circle_value <= 0) {
        document.getElementById("res_area").innerText = "Please enter a valid number.";
        return;
    }
    const result = Math.PI*circle_value*circle_value;
    const result_in_format = result.toLocaleString();
    document.getElementById("res_area").innerHTML = `Your Circle Area is ${result_in_format} ${unit}<sup>2</sup>`;  
    
}
function areasquare(){
    const square_side = parseFloat(document.getElementById("square_input").value);
    const unit_select_square = document.getElementById("unit_select_square").value;
    if (isNaN(square_side) || square_side <= 0) {
        document.getElementById("res_area_square").innerText = "Please enter a valid number.";
        return;
    }
    const res_square = square_side**2;
    const res_square_format = res_square.toLocaleString();
    document.getElementById("res_area_square").innerHTML = `Your Square Area is ${res_square_format} ${unit_select_square}<sup>2</sup>`; 
}
function arearectangle(){
    const rectangle_length = parseFloat(document.getElementById("rectangle_length").value);
    const rectangle_width = parseFloat(document.getElementById("rectangle_width").value);
    const unit_select_rectangle = document.getElementById("unit_select_rectangle").value;
    if(isNaN(rectangle_length) || rectangle_length<=0 || isNaN(rectangle_width) || rectangle_width<=0){
        document.getElementById("res_area_rectangle").innerText = "Please enter a valid number.";
        return;
    }
    const res_rectangle = rectangle_length*rectangle_width;
    const res_rectangle_format = res_rectangle.toLocaleString();
    document.getElementById("res_area_rectangle").innerHTML =`Your Rectangle Area is ${res_rectangle_format} ${unit_select_rectangle}<sup>2</sup>`;
}
function areatriangle(){
    const triangle_height = parseFloat(document.getElementById("triangle_height").value);
    const triangle_base = parseFloat(document.getElementById("triangle_base").value);
    const unit_select_triangle = document.getElementById("unit_select_triangle").value;
    if(isNaN(triangle_height) || triangle_height<=0 || isNaN(triangle_base) || triangle_base<=0){
        document.getElementById("res_area_triangle").innerText = "Please enter a valid number.";
        return;
    }
    const res_triangle = 1/2*triangle_base*triangle_height;
    const res_triangle_format = res_triangle.toLocaleString();
    document.getElementById("res_area_triangle").innerHTML =`Your Triangle Area is ${res_triangle_format} ${unit_select_triangle}<sup>2</sup>`;
}