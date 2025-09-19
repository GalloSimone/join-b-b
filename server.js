const express = require("express");
const path = require("path");

const app = express();

// Servire i file statici dalla cartella dist
app.use(express.static(path.join(__dirname, "dist")));

// Tutte le route verso index.html (per React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server React in esecuzione su porta ${PORT}`);
});
