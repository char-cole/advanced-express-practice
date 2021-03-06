let express = require("express");
const router = express.Router();
let {list,show,create} = require("../controllers/CommentController");

router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);

module.exports = router;