const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

// ミドルウェアを使う場合は一番上で宣言しないといけない
// app.use(mylogger);

// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // console.log("hello express");
    // res.send("<h1>こんばんは</h1>");
    // res.sendStatus("404");
    // res.status(500).send("エラーです");
    // res.status(500).json({ msg: "エラー"});
    res.render("index", { text: "NodejsとExpressだお" });
});


//ルーティング
app.use("/user", userRouter);



app.listen(PORT, () => console.log("サーバーが起動しました"));