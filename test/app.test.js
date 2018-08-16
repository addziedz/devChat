const httpClient = require("supertest");
const appFactory = require("../src/app");

describe("Application test", () => {
  it("Should display simple answer from server", async () => {
    const app = await appFactory();

    return httpClient(app)
      .get("/")
        .expect(200);
  });
});
