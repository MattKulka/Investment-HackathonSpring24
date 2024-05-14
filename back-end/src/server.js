const { PORT = 5001 } = process.env

const app = require("./app")
const knex = require("./db/connection")

function listener() {
    console.log(`Listening on Port ${PORT}!`)
}

// Temporary, doesn't have anything to serve as of Monday 5/13 but it at least spins up a server
app.listen(PORT, listener)

/* We can use this once we get the db set up
knex.migrate
    .latest()
    .then((migrations) => {
        console.log("migrations", migrations)
        app.listen(PORT, listener)
    })
    .catch((error) => {
        console.error(error)
        knex.destroy()
    })
*/