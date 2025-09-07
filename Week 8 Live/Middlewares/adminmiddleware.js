const jwt = require("jsonwebtoken");
function Adminauth(req, res, next) {
    const token = req.headers.token
    try {
        const decodedData = jwt.verify(token, process.env.SECRET_KEY_Admin)
        if (decodedData) {
            req.adminid = decodedData.id;
            next()
        }
    }
    catch (err) {
        res.status(401).json({
            msg: "Invalid token"
        })
    }

}

module.exports = {
    Adminauth
}