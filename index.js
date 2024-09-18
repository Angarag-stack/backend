import express from "express";

const app = express();
app.use(express.json());
const port = 8080;

app.get("/articles", (request, res) => {
  res.send("Hello response  from express ");
});

app.post("/addArticle", (req, res) => {
  const { title } = req.body;

  res.send(`Product successfully added ${title}`);
});

app.listen(port, () => {
  console.log(`response From Express ${port}`);
});
