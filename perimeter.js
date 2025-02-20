function circlePer(){
    const r = parseFloat(document.getElementById("circle_r").value);
    const unit_circle = document.getElementById("unit_circle_select").value;
    if(isNaN(r) || r <= 0){
        document.getElementById("res_per_cir").innerText = "please enter valid number";
        return
    }
    const res_cir = 2*Math.PI*r;
    const res_cir_format = res_cir.toLocaleString();
    
    document.getElementById("res_per_cir").innerText = `Your Circle Perimeter is ${res_cir_format} ${unit_circle}`
}

function squarePer(){
    const a = parseFloat(document.getElementById("square").value);
    const unit_square = document.getElementById("unit_square_select").value;
    if(isNaN(a) || a <= 0){
        document.getElementById("res_per_sqr").innerText = "please enter valid number";
        return
    }
    const res_sqr = 4*a;
    const res_sqr_format = res_sqr.toLocaleString();
    
    document.getElementById("res_per_sqr").innerText = `Your Square Perimeter is ${res_sqr_format} ${unit_square}`
}
function rectanglePer(){
    const l = parseFloat(document.getElementById("rectangle_l").value);
    const w = parseFloat(document.getElementById("rectangle_w").value);
    const unit_rectangle = document.getElementById("unit_rectangle_select").value;
    if(isNaN(l) || l <= 0 || isNaN(w) || w <= 0){
        document.getElementById("res_per_rec").innerText = "please enter valid number";
        return
    }
    const res_rec = 2*(l + w);
    const res_rec_format = res_rec.toLocaleString();
    
    document.getElementById("res_per_rec").innerText = `Your Rectangle Perimeter is ${res_rec_format} ${unit_rectangle}`
}
function trianglePer(){
    const a = parseFloat(document.getElementById("triangle_a").value);
    const b = parseFloat(document.getElementById("triangle_b").value);
    const c = parseFloat(document.getElementById("triangle_c").value);
    const unit_triangle = document.getElementById("unit_triangle_select").value;
    if(isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0){
        document.getElementById("res_per_tri").innerText = "please enter valid number";
        return
    }
    const res_tri = a + b + c;
    const res_tri_format = res_tri.toLocaleString();
    
    document.getElementById("res_per_tri").innerText = `Your Triangle Perimeter is ${res_tri_format} ${unit_triangle}`
}