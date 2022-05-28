import express from "express";

const app = express()

const port = 3000

app.post("/notifications", (request, response) => {
    // @ts-ignore
    const payload = JSON.parse(request)
    console.log("request", payload)
})

app.listen(port, () => {
    console.log("listening on port")
})