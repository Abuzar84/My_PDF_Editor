const express = require("express");
const multer = require("multer");
const cors = require("cors")

const app = express();
app.use(cors());//allow request from frontend.

//set multer for file storage.
const storage = multer.diskStorage({
    destination: "uploads", // save file in upload folder.
    filename: (req, file, cb) =>{
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({storage: storage});

// handle file upload.
app.post("/upload", upload.single("file"), (req, res) =>{
    if(!req.file){
        return res.status(400).json({message: "No file uploaded" });
    }
    res.json({message: "File uploaded successfully", fileurl:`http://localhost:3000/upload/${req.file.filename}`});
});

// server upload file.
app.use("/upload", express.static("uploads"));

app.listen(3000, () => console.log("Server running on port 3000"));
