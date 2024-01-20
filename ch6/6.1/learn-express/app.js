const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// true면 qs, false면 querystring

app.use('요청 경로',express.static('실제 경로'));
app.use('/',express.static(__dirname,'public'));

app.use(
  "/about",
  (req, res, next) => {
    console.log("1 모든 요청에 실행");
    next();
  },
  (req, res) => {
    try {
      console.log(dfasdf);
    } catch (error) {
      next(error);
    }
  }
);

app.post("/", (req, res) => {
  res.send("hello express");
});

app.get(
  "/",
  (req, res, next) => {
    // res.sendFile(path.join(__dirname, "index.html"));
    // res.json({ hello: "zerocho" });
    // console.log("hello zerocho");
    req.body
    next("route");
  },
  (req, res) => {
    console.log("실행되나요?");
  }
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
//   res.json({ hello: "zerocho" });
  console.log("hello zerocho");
});

app.get("/category/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.get("/about", (req, res) => {
  res.send("hello express");
});

app.use((req, res, next) => {
  res.status(404).send("404");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(200).send("에러입니다.");
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
