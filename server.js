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
app.post("/uploads", upload.single("file"), (req, res) =>{
    if(!req.file){
        return res.status(400).json({message: "No file uploaded" });
    }
    res.json({message: "File uploaded successfully", fileurl:`http://localhost:3000/uploads/${req.file.filename}`});
});

app.get("/", (req, res) => {
    res.send("Welcome to the File Upload Server!");
});

// server upload file.
app.use("/uploads", express.static("uploads"));

app.listen(3000, () => console.log("Server running on port 3000"));
