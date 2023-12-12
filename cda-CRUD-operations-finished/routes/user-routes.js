const router = require("express").Router();
const userController = require("../controllers/user-controller");

// same code as line 8 but different syntax
// ----------------------------------------
// router.get("/", userController.index);
// router.post("/", userController.add);
router.route("/").get(userController.index).post(userController.add);

router
  .route("/:id")
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.remove);

router.route("/:id/posts").get(userController.posts);

module.exports = router;
