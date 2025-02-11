const dropArea = document.getElementById("drop_area");
const fileInput = document.getElementById("file_input");
const fileName = document.getElementById("file_name");
let fileStoreForserver;
let file;

fileInput.addEventListener("change", (event) => {
    event.preventDefault();
    file = fileInput.files[0];
    fileStoreForserver = file;
    if(file){
        if(file.type === "application/pdf"){
            fileName.textContent = file.name;
        }
    }
});
dropArea.addEventListener("dragover",(event) => {
    event.preventDefault();
    dropArea.classList.add("hover");
    fileInput.style.display = "none";
});
dropArea.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropArea.classList.remove("hover");
    fileInput.style.display = "block";
});
dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("hover");
    fileInput.style.display = "block";
    file = event.dataTransfer.files;
    fileStoreForserver = file;
    if(file){
        const fileNameShow = file[0].name;
        if(file[0].type === "application/pdf"){
            fileName.textContent = fileNameShow;
            fileInput.files = file;
        }
        fileName.textContent = "Only PDF files are allowed. Please upload a valid PDF.";
    }

});

async function uploadFile() {
    if(!fileStoreForserver.files.lenth){
        alert("Please select a file!");
        return;
    }

    const dataStore = new FormData();
    dataStore.append("file",fileStoreForserver[0]);

    const response = await fetch("http://localhost:3000/upload", {
        method: "post",
        body: dataStore,
    });
    const result = await response.json();
    alert(result.message);// success or error message
}