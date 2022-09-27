const {connect, connection} = require("mongoose")

connect("mongodb://localhost:27017/nftTracker").then(() => {
    console.log("DATABASE CONNECTION SUCCESSFUL: ")
})
connection.on("error", (err) => {
    console.log(`DATABASE CONNECTION ERROR: ${err.message}`)
})

// mongodb://localhost:27017/users