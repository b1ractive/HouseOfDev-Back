const Property = require("../models/Property");

//  añadir una propiedad como administrador
const adminAddProperty = async (req, res) => {
  try {
    const {
      location,
      price,
      description,
      tipe,
      availability,
      image,
      category,
    } = req.body;

    // Crea una nueva propiedad 
    const newProperty = await Property.create({
      location,
      price,
      description,
      tipe,
      availability,
      image,
      category,
    });

    res.status(201).json(newProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al añadir la propiedad" });
  }
};

//  editar una propiedad como administrador
const adminEditProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const {
      location,
      price,
      description,
      tipe,
      availability,
      image,
      category,
    } = req.body;

    // Actualiza la propiedad en la base de datos 
    const [updatedRow, updatedProperty] = await Property.update(
      {
        location,
        price,
        description,
        tipe,
        availability,
        image,
        category,
      },
      {
        where: { id: propertyId },
        returning: true, // objeto actualizado
      }
    );

    if (updatedRow === 1) {
      res.status(200).json(updatedProperty[0]);
    } else {
      res.status(404).json({ message: "Propiedad no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al editar la propiedad" });
  }
};

// eliminar una propiedad como administrador
const adminDeleteProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;

    // Elimina la propiedad de la base de datos 
    const deletedRowCount = await Property.destroy({
      where: { id: propertyId },
    });

    if (deletedRowCount === 1) {
      res.status(200).json({ message: "Propiedad eliminada con éxito" });
    } else {
      res.status(404).json({ message: "Propiedad no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la propiedad" });
  }
};

module.exports = {
  adminAddProperty,
  adminEditProperty,
  adminDeleteProperty,
};
