const jwt = require("jsonwebtoken");
function Userauth(req, res, next) {
    const token = req.headers.token
    try {
        const decodedData = jwt.verify(token, process.env.SECRET_KEY_User)
        if (decodedData) {
            const userid = decodedData.id
            req.userid = userid
            next()
        }
    }
    catch (err) {

        res.status(401).json({
            msg: "Invalid token "
        })

    }
}
module.exports={
    Userauth
}