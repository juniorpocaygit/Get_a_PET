require('dotenv').config()
const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res) =>{

    const secret = process.env.SECRET
    
    //create a token
    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, secret)

    //return token
    res.status(200).json({message: 'Você está autenticado!', 
    token: token,
    userId: user._id,
    })


}
module.exports = createUserToken