const request = require("supertest")
const app     = require("../../app")
const expect  = require("chai").expect

describe("/", () => {
  it("returns a response when visiting '/'", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal("Hello from express!")
        done()
      })
  })
})
