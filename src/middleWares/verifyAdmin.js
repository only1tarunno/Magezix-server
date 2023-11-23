const verifyAdmin = async (req, res, next) => {
  const email = req.user.email;
  //   add collection here
  const user = await userCollection.findById(email);
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "unauthorized" });
  }
  next();
};

module.exports = verifyAdmin;
