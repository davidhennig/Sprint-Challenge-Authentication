const request = require("supertest");
const db = require("../database/dbConfig.js");
const auth = require("../api/server");

describe("auth-router", function() {
  describe("POST /register", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should create/register a new user", function() {
      return request(auth)
        .post("/api/auth/register")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should have username of test", function() {
      return request(auth)
        .post("/api/auth/register")
        .send({ username: "test2", password: "test2" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});

describe("auth-router", function() {
  describe("POST /login", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should login user", function() {
      return request(auth)
        .post("/api/auth/login")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should have invalid credentials", function() {
      return request(auth)
        .post("/api/auth/login")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});
