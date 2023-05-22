if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 4001
const cors = require('cors')
const { connect } = require("./config/mongosConection")
const useRoutes = require("./routes")
const { errorHandler} = require("./middleware/errorHandler")


app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.use("/users", useRoutes)
app.use(errorHandler)

connect().then((database) => {
    app.listen(port, () => {
        console.log(`Example listening port ${port}`);
    })
})

