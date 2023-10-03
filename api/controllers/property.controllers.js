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
  const { propertyId } = req.params;

  Property.findByPk(propertyId)
    .then((property) => res.json(property))
    .catch(() => res.status(404).json({ error: "Property not found" }));
};

const editProperty = () => {};

const deleteProperty = () => {};

module.exports = { getProperty, getProperties };
