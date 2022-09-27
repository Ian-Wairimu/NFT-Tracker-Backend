const app = require("../app")
require("dotenv").config({path: ".env"})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`server running: http://localhost:${port}/`)
});

process.on("SIGTERM", () => {
    server.close(() => {
        console.log("process terminated successfully")
    })
})