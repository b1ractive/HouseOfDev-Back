const { User } = require("../models");
const { validateUser } = require("../middelwares/auth");

const getUsers = (req, res) => {
  User.findAll()
    .then((res) => res.json())
    .catch(() => res.json({ error: "No users found" }));
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findByPk(userId)
    .then((res) => res.json())
    .catch(() => res.status(404).json({ error: "User not found" }));
};

const editUser =
  (validateUser,
  (req, res) => {
    const { userId } = req.params;

    User.update(req.body, { where: { userId } }).then((result) => {
      const [user] = result;

      if (!user[0]) {
        return res
          .status(404)
          .json({ message: "The user was not found with that id" });
      }

      res.status(200).json(user[0]);
    });
  });

const deleteUser = (req, res) => {
  const { userId } = req.params;
  Pages.destroy({ where: { userId } }).then(() => res.json("User deleted"));
};

module.exports = { getUsers, getUser, editUser, deleteUser };
