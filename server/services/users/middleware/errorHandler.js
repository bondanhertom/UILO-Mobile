module.exports = {
    errorHandler(error, req, res, next) {
        console.log(error);
        let status = 500;
        let msg = "Internal Server Error";

        switch (error.name) {
            case "BSONTypeError":
                status = 404;
                msg = "User not found";
                break;
            case "Username Empty":
                status = 400;
                msg = "Username is required";
                break;

            case "Email Empty":
                status = 400;
                msg = "Email is required";
                break;

            case "Password Empty":
                status = 400;
                msg = "Password is required";
                break;

            case "Invalid Email Format":
                status = 400;
                msg = "Format must be email";
                break;

            case "Invalid Min Password":
                status = 400;
                msg = "Password min 5 characters";
                break;

            case "Email Unique":
                status = 400;
                msg = "Email must be unique";
                break;

            case "DocumentNotFound":
                status = 404;
                msg = "User Not Found";
                break;
        }

        res.status(status).json({ msg });
    },
};
