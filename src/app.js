const app = require("express")();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "src/images",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/:dataimage", (req, res) => {
  res.sendFile(__dirname + "/images/" + req.params.dataimage);
});
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("IMAGEN A LA NUBE EXITOSAMENTE");
  console.log(req.file);
});
app.listen(4000, () => console.log("servidor vivo http://localhost:4000"));
