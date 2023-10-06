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

const filterProperties = async (req, res) => {
  try {
    const { category } = req.params; // Obtén la categoría desde la consulta en la URL

    if (category !== "venta" && category !== "alquiler") {
      return res.status(401).json({
        error: 'El parámetro "category" debe ser "venta" o "alquiler".',
      });
    }

    const propiedades = await Property.findAll({
      where: { category },
    });

    return res.json(propiedades);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

const editProperty = () => {};

const deleteProperty = () => {};

module.exports = { getProperty, getProperties, filterProperties };
