const request = require("supertest");
const db = require("../database/dbConfig.js");
const joke = require("../api/server");

describe("jokes-router", function() {
  describe("GET /jokes", function() {
    // beforeEach(async () => {
    //   await db("jokes").truncate();
    // });
    it("should not get jokes", function() {
      return request(joke)
        .get("/api/jokes")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should get 401", function() {
      return request(joke)
        .get("/api/jokes")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});
