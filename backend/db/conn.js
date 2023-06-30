require('dotenv').config()
const mongoose = require('mongoose')

const user = process.env.USER
const password = process.env.PASS

async function main(){
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.dtk7eue.mongodb.net/?retryWrites=true&w=majority`)
    console.log('Conectou ao Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose