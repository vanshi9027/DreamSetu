const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const authUser = async (req, res, next) => {

    const token = req.cookies.token;
    console.log(token);

    if (token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }


    try {
        const decoded = await  jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })


    }


}

module.exports = authUser;