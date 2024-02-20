import express from "express";


const PORT = 5050;
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to the API.");
  });
  

  // Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
  });
  