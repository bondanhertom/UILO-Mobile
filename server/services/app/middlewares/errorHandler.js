module.exports = (error, req, res, next) => {
    let status, message;
    console.log(error);

    switch (error.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstainError":
            status = 400
            message = error.errors[0].message
            console.log(error);
            break;

        case "Product Not Found":
            status = 404;
            message = "Product Not Found";
            break;
        case "Category Not Found":
            status = 404;
            message = "Category Not Found";
            break;
        case "email_required":
            status = 400
            message = "email is required"
            break;
        case "password_required":
            status = 400
            message = "password is required"
            break;

        case "invalid_email/password":
            status = 401
            message = "invalid_email/password"
            break;
        case "InvalidToken":
        case "JsonWebTokenError":
            status = 401
            message = "Invalid Token"
            break;
        case "Forbidden":
            status = 403
            message = "You are not authorized"
            break;
        default:
            status = 500
            message = "Internal Service Error"
            break;
    }
    res.status(status).json({ message: message })
}