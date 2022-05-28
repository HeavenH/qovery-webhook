import express from "express";

const app = express()

app.use(express.json())

const port = 3000

app.post("/notifications", (request, response) => {
    // @ts-ignore
    console.log("request", request.body.request)

    response.json({ok: true})
})

app.listen(port, () => {
    console.log("listening on port")
})