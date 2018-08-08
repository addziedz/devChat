module.exports = async function routes() {
    const router = require("express").Router();

    router.get("/", (req, res) => {
        res.send(
            "<h1>HELLO KITOWCY! ZACNA PRZYGODA PRZED NAMI!</h1>" +
            "<br/>" +
            "<img src='https://nieprzywiedlny.files.wordpress.com/2015/11/kitowcy.jpg?w=640'/>"
        );
    });

    return router;
};
