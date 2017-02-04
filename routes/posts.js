const router = require("express").Router()
const Post   = require("../models").Post

router.get("/:id", (req, res) => {
  console.log(`Id is ${req.params.id}`)
  Post.findOne({
    where: {
      id: parseInt(req.params.id)
    }
  }).then((post) => {
    res.locals.post = post
    
    res.render("posts/show")
  })
})

module.exports = router
