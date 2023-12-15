express = require("express")

const app = express()

app.set("port", process.env.PORT || 8000)


app.get("/", (req , res) => {
    res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})

app.listen(app.get("port"), () => {
    console.log(">>> Server running")
})