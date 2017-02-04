const request  = require("supertest")
const Bluebird = require("bluebird")
const app      = require("../../app")
const expect   = require("chai").expect
const models   = require("../../models")

describe("/posts", () => {
  before(() => {
    models.sequelize.sync()
  })

  beforeEach(() => {
    this.models = models
    return Bluebird.all([
      this.models.Post.destroy({
        truncate: true
      })
    ])
  })

  it("/:id returns a post", (done) => {
    this.models.Post.create({
      title: "Title",
      content: "Content"
    }).then(() => {
      request(app)
        .get("/posts/1")
        .expect(200, /Title/)
        .expect(200, /Content/)
        .end(done)
    })
  })
})
