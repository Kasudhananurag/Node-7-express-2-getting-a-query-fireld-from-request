const experss = require("express");
const app = experss();

app.get("",(req,res) => {
    const user = req.query.name;
    res.send("Hello this is "+ user +" 's home page");
});

app.listen(3000)