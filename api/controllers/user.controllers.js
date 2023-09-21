const User = require("../models/User");

const getUsers = (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch(() => res.json({ error: "No users found" }));
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findByPk(userId)
    .then((user) => res.json(user))
    .catch(() => res.status(404).json({ error: "User not found" }));
};

const editUser = (req, res) => {
  const { userId } = req.params;

  User.update(req.body, { where: { userId }, returning: true })
    .then((result) => {
      const [user] = result;

      if (!user[0]) {
        return res
          .status(404)
          .json({ message: "The user was not found with that id" });
      }

      res.status(200).json(user[0]);
    })
    .catch(() => res.status(500).json({ error: "Error from system" }));
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  User.destroy({ where: { userId } })
    .then(() => res.json("User deleted"))
    .catch(() => res.status(404).json({ error: "Can't deleted user" }));
};

module.exports = { getUsers, getUser, editUser, deleteUser };
