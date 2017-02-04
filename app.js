const express = require("express")
const posts   = require("./routes/posts")
const path    = require("path")

const router  = express.Router()
const app = express()

app.set("views", "views");
app.set("view engine", "ejs")

router.use("/posts", posts)
app.use(router)

app.get("/", (req, res) => {
  res.send("Hello from express!") 
})

app.listen(4000, () => {
  console.log("App listening on port 4000.");
})

module.exports = app
