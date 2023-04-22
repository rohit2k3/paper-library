const mongoose = require("mongoose");
const database = () => {
    try {
        mongoose.connect(process.env.DBSERVER)
        .then((res) => console.log(`db is connected`))
    } catch (error) {
        console.log(error);
    }
}
module.exports  = database