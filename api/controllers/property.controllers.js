const Property = require("../models/Property");

const getProperties = async (req, res) => {
  try {
    const allProperties = await Property.findAll();
    res.status(200).json(allProperties);
  } catch (error) {
    res.status(500).json({ message: "Error getting all properties" });
  }
};

const getProperty = (req, res) => {
  const { id } = req.params;

  Property.findOne({ where: { id } })
    .then((property) => {
      if (!property) {
        res.status(404).json({ error: "Property not found" });
      } else {
        res.json(property);
      }
    })
    .catch(() => {
      res.status(500).json({ error: "Internal server error" });
    });
};

const editProperty = () => {};

const deleteProperty = () => {};

module.exports = { getProperty, getProperties };
