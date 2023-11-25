const createUser = require("../../api/UsersController/createUser");
const User = require("../../models/User");

const router = require("express").Router();

router.post("/users", createUser);

router.patch("/users/:email", async (req, res) => {
  const email = req.params.email;
  const updatingUser = req.body;

  try {
    const filter = { email: email };
    const updateDoc = {
      $set: {
        premimiumExpire: updatingUser.premimiumExpire,
      },
    };

    const result = await User.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
