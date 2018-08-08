const appFactory = require("./app");
const config = require("./config");

(async function main() {
    const app = await appFactory();

    app.listen(config.port, () => {
        console.log(`App listening on port ${config.port}!`);
    });
})();
