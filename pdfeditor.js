const dropArea = document.getElementById("drop_area");
const fileInput = document.getElementById("file_input");
const fileArea = document.getElementById("file_area");


fileInput.addEventListener("change", (event) =>{
    event.preventDefault();
    const file = event.target.files[0];
    if(!file) return;
    const fileOpen = new FileReader();
    fileOpen.onload = function(event){
    const typedarray = new Uint8Array(fileOpen.result);

    pdfjsLib.getDocument(typedarray).promise.then(pdf =>{
        console.log("pdf loaded");
        pdf.getPage(1).then(page => {
            const scale = 0.5;
            const viewport = page.getViewport({scale});
            const canvas = fileArea;
            const context = canvas.getContext("2d");

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const rendercontext = {canvasContext: context, viewport: viewport};
            page.render(rendercontext);
            return page.getTextContent();
        }).then(textContent => {
            let text = textContent.item.map(item => item.str).join("");
            fileArea.textContent = text;
        });
    }).catch(err => console.error("error",err));
    };
    fileOpen.readAsArrayBuffer(file);
});
dropArea.addEventListener("drop", (event) =>{
    event.preventDefault();
    dropArea.classList.remove("hover");
    const file = event.target.files;
    fileInput.file = event.dataTransfer.files;
    document.getElementById("file_area").innerHTML = `Your File name is ${fileInput.file[0].name}`;
});
dropArea.addEventListener("dragover", (event) =>{
    event.preventDefault();
    dropArea.classList.add("hover");
});
dropArea.addEventListener("dragleave",(event) =>{
    event.preventDefault();
    dropArea.classList.remove("hover");
});