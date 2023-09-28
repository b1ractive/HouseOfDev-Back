const bcrypt = require("bcrypt");

const { Users, Appointment, Property, Rating } = require("../models");

(async function () {
  const generateHashedPassword = (pass) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = bcrypt.hashSync(pass, salt);
    return { salt, password };
  };

  const userData = [
    {
      name: "Nombre1",
      last_name: "Apellido1",
      email: "correo1@example.com",
      ...generateHashedPassword("clave1"),
      telephone: "1234567890",
      is_admin: false,
      createdAt: "2023-09-21 10:00:00",
      updatedAt: "2023-09-21 10:00:00",
    },
    {
      name: "Nombre2",
      last_name: "Apellido2",
      email: "correo2@example.com",
      ...generateHashedPassword("clave1"),
      telephone: "1434567890",
      is_admin: true,
      createdAt: "2023-09-21 11:00:00",
      updatedAt: "2023-09-21 11:00:00",
    },
    {
      name: "Nombre3",
      last_name: "Apellido3",
      email: "correo3@example.com",
      ...generateHashedPassword("clave1"),
      telephone: "1134567890",
      is_admin: false,
      createdAt: "2023-09-21 12:00:00",
      updatedAt: "2023-09-21 12:00:00",
    },
  ];

  const propertyData = [
    {
      location: "Avenida 1 Entre 63 y 64 1500, La Plata, La Plata",
      price: 305000,
      description: "1",
      tipe: "Locales en Venta en La Plata",
      description:
        "Local con destino comercial desarrollado en el frente, con garaje en un lateral, galpón ubicado en el fondo mas baños y vestuarios. Posee tambien patio abierto. Cuenta con los servicios de agua, gas, cloaca y electricidad.",
      name: "Locales en Venta en La Plata",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/resize/1/00/52/02/04/57/1200x1200/1874215699.jpg",
      category: "En Venta",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "74 Entre 120 y 119 13, Villa Elvira, La Plata",
      price: 109000,
      description: "2",
      tipe: "Casa en Venta La Plata - Villa Elvira",
      description:
        "Casa en venta ubicada en calle 74 Entre 120 y 119. Esta casa se encuentra en una zona altamente comercial,  cuenta con todos los servicios. Rapido acceso al centro de la ciudad. Acceso directo a la autopista La Plata-Buenos Aires por avenida 122. Incluye calefacción central y preinstalaciones de aires acondicionado. Esta casa ofrece todas las comodidades necesarias para una vida confortable. Si estás interesado, no dudes en contactarnos para obtener más información y programar una visita.",
      name: "Casa en Venta La Plata - Villa Elvira",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/52/07/23/64/1200x1200/1875484014.jpg",
      category: "En Venta",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "15 E/ 41 y 42 0, La Plata, La Plata",
      price: 51000,
      description: "3",
      tipe: "Departamento 1 Dormitorio en Venta La Plata",
      description:
        "15 e/ 41 y 42 Departamento en venta , cuenta con 1 dormitorio, Baño completo, Preinstalacion para split, Portero visor, Aberturas exterior de PVC, con DVH, Puerta de acero, Pisos de porcelanato, Frente de placard, Termotanque de 60 lts, El edificio cuenta con sum con parrilla",
      name: "Departamento 1 Dormitorio en Venta La Plata",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/resize/1/00/51/58/12/97/1200x1200/1864628768.jpg",
      category: "En Venta",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "Calle 202 0, Abasto, La Plata",
      price: 104000,
      description: "4",
      tipe: "Venta Casa 3 Ambientes Abasto - La Plata",
      description:
        "La propiedad se sitúa en un lote de 388 m2 distribuido en dos plantas. En la planta baja se encuentran la cocina-comedor, el living y un baño completo. En el primer piso, hay dos dormitorios con balcón y un toilette. En el fondo de la propiedad, se destaca un quincho totalmente equipado.",
      name: "Venta Casa 3 Ambientes Abasto - La Plata",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/resize/1/00/51/76/21/33/1200x1200/1870123194.jpg",
      category: "En Venta",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "19 y 66, La Plata, La Plata, GBA Sur ",
      price: 53000,
      description: "5",
      tipe: "Alaro Novus",
      description:
        "Alaró NOVUS es un edificio residencial diseñado, proyectado y construido por Alaró. Cuenta con 9 niveles de departamentos semipisos de 1 y 2 dormitorios de alta calidad, un local comercial en planta baja, cocheras y un espacio de uso común en la terraza. Esta ubicado frente a la Plaza Sarmiento, lo que le otorga un entorno con vistas privilegiadas en todos los departamentos.",
      name: "Alaro Novus",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/50/54/82/19/1200x1200/1868559457.jpg",
      category: "En Venta",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "L. N. Alem al 1000, Catalinas, Capital Federal",
      price: 6000,
      description: "6",
      tipe: "Oficinas en Alquiler en Piso Alto y Luminoso en Zona Catalinas",
      description:
        "Excelente oficina y ubicaciòn en la Zona de Catalinas, Centro, Pròximo a Puerto Madero y a Retiro.",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/52/33/65/40/1200x1200/1881422769.jpg",
      category: "En Alquiler",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "Araucarias 0, Araucarias, El Cazador",
      price: 1400,
      description: "7",
      tipe: "Casa en Alquiler en Puertos, Escobar, G. B. a. Zona Norte",
      description:
        "Local con destino comercial desarrollado en el frente, con garaje en un lateral, galpón ubicado en el fondo mas baños y vestuarios. Posee tambien patio abierto. Cuenta con los servicios de agua, gas, cloaca y electricidad.",
      name: "Casa en Alquiler en Puertos, Escobar, G. B. a. Zona Norte",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/51/53/47/64/1200x1200/1863422316.jpg",
      category: "En Alquiler",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "Santa Barbara, Santa Bárbara, Tigre",
      price: 4700,
      description: "8",
      tipe: "Casa Estilo Santa Fe Al Lago en Alquiler Anual en Santa Barbara",
      description:
        "Hall de acceso con un patio interno muy cálido, Living - Comedor, toillete con baño completo, Cocina con comedor diario, escritorio y playroom amplio y luminoso, Dependencia de servicio, Lavadero. En la planta alta encontramos 4 dormitorios, principal en suite con vestidor, otro baño completo y un escritorio con opción. En el exterior muy buen jardín parquizado con riego automático, playa amplia de arena con fogón, Muelle. Muy lindos living exteriores. Galería y Parrilla.",
      name: "Casa Estilo Santa Fe Al Lago en Alquiler Anual en Santa Barbara",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/51/93/84/82/1200x1200/1872314051.jpg",
      category: "En Alquiler",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "Distrito Quartier., Retiro, Capital Federal",
      price: 390000,
      description: "9",
      tipe: "Excelente Loft en Alquiler Temporario. Distrito Quartier, Retiro.",
      description:
        "Excelente Loft  amoblado a estrenar en Distrito Quartier. Estudio.",
      name: "Excelente Loft en Alquiler Temporario. Distrito Quartier, Retiro.",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/52/31/69/91/1200x1200/1881015756.jpg",
      category: "En Alquiler",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
    {
      location: "Baez al 600, Las Cañitas, Palermo",
      price: 305000,
      description: "10",
      tipe: "Departamento en Alquiler Opcion Mensual o Plazos Largos - Las Cañitas - Full Amenities - Imperdible",
      description:
        "Alquiler por mes completo! A metros de Av. del Libertador, Luis Maria Campos, con cercanía a varios medios de transporte y comercios.En excelente estado.SUPER LUMINOSO!!",
      name: "Departamento en Alquiler Opcion Mensual o Plazos Largos - Las Cañitas - Full Amenities - Imperdible",
      availability: true,
      image:
        "https://imgar.zonapropcdn.com/avisos/1/00/52/09/80/70/1200x1200/1876045409.jpg",
      category: "En Alquiler",
      createdAt: "2023-09-28 12:00:00",
      updatedAt: "2023-09-28 12:00:00",
    },
  ];

  await Users.bulkCreate(userData);
  await Property.bulkCreate(propertyData);
})();
