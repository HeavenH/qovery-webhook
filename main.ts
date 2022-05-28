import express from "express";

const app = express()

const port = 3000

app.post("/notifications", (request, response) => {
    console.log("requet", request.body)
})

app.listen(port, () => {
    console.log("listening on port")
})