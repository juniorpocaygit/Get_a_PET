const multer = require ('multer')
const path = require('path')

//Destination to store the images
const imageStorage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = ""

        if (req.baseUrl.includes("user")) {
            folder = 'users'
        } else if (req.baseUrl.includes("pet")) {
            folder = 'pets'
        }
        cb(null, `public/images/${folder}`)


    },
    filename: function (req, file, cb){
      cb(null, Date.now() + path.extname(file.originalname))  
    },
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error("Por favor, envie apenas arquivos com extensão em jpg ou png!"))
        }
        cb(undefined, true)
    }
})
module.exports = { imageUpload }