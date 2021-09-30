const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("home");
});
app.post("/login", (req, res) => {
    console.log(req.body);
    // res.send("Successfully Login");
    // res.render("login");
    res.redirect("/login/submit");
});
app.get("/login/submit", (req, res) => {
    res.render("login");
});
app.listen(port, () => {
    console.log("Server running at port: " + port);
});
