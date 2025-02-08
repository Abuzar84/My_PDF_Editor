const dropArea = document.getElementById("drop_area");
const fileInput = document.getElementById("file_input");


fileInput.addEventListener("change", (event) =>{
    event.preventDefault();
    console.log(fileInput.name);
});
dropArea.addEventListener("drop", (event) =>{
    event.preventDefault();
    dropArea.classList.remove("hover");
    const file = event.dataTransfer.files;
    fileInput.files = file
    console.log(fileInput.file);
});
dropArea.addEventListener("dragover", (event) =>{
    event.preventDefault();
    dropArea.classList.add("hover");
});
dropArea.addEventListener("dragleave",(event) =>{
    event.preventDefault();
    dropArea.classList.remove("hover");
});