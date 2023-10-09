const Favorite = require("../models/Favorite");
const User = require("../models/User");
const Property = require("../models/Property");

const getFavorites = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Utiliza el modelo Favorite para buscar todos los favoritos de un usuario en la base de datos
    const favoritos = await Favorite.findAll({
      where: { userId: userId },
    });

    res.json({ favoritos });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener los favoritos del usuario" });
  }
};

const addFavorite = async (req, res) => {
  const userId = req.params.userId;
  const propertyId = req.body.propertyId;

  try {
    // Buscamos al usuario por su ID en la base de datos
    const usuario = await User.findByPk(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Crea una nueva instancia del modelo Favorite
    const nuevoFavorito = await Favorite.create({
      userId: userId,
      propertyId: propertyId,
    });

    // Obtén los detalles de la propiedad relacionada
    const propiedad = await Property.findByPk(propertyId);

    if (!propiedad) {
      return res.status(404).json({ mensaje: "Propiedad no encontrada" });
    }

    // Devolvemos la lista de favoritos actualizada del usuario y los detalles de la propiedad
    res.json({ favoritos: usuario.favorites, propiedad });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al agregar el favorito" });
  }
};

const deleteFavorite = async (req, res) => {
  const userId = req.params.userId;
  const favoriteId = req.params.favoriteId;

  try {
    // Buscamos al usuario por su ID en la base de datos
    const usuario = await User.findByPk(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Buscamos el favorito por su ID y que pertenezca al usuario
    const favorito = await Favorite.findOne({
      where: { id: favoriteId, userId: userId },
    });

    if (!favorito) {
      return res
        .status(404)
        .json({ mensaje: "Favorito no encontrado para este usuario" });
    }

    // Eliminamos el favorito de la base de datos
    await favorito.destroy();

    res.json({ mensaje: "Favorito eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el favorito" });
  }
};

module.exports = { addFavorite, getFavorites, deleteFavorite };
