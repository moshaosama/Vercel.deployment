const express = require("express");
const { Product } = require("./Product");
const { LoginApi } = require("./Login");
const { MyStore } = require("./Store");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/Product", (req, res) => {
  res.json(Product);
});

app.get("/Product/:id", (req, res) => {
  const NewProduct = Product?.find((ele) => ele?.id == req.params.id);
  res.json(NewProduct);
});

app.post("/Product", (req, res) => {
  Product?.push({
    id: Product?.id + 1,
    title: req.body?.Title,
    price: req.body?.Price,
    images: req.body?.Image,
  });
  res.json(Product);
});

app.get("/LoginApi", (req, res) => {
  res.json(LoginApi);
});

app.post("/LoginApi", (req, res) => {
  LoginApi?.push({
    id: LoginApi[0].id + 1,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  res.json(LoginApi);
});

app.get("myStore", (req, res) => {
  res.json(MyStore);
});

app.post("myStore", (req, res) => {
  MyStore?.push({});
});

app.listen(5000, () => {
  console.log("listening on Port 5000");
});
