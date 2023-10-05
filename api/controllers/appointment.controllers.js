const transporter = require("../utils/mailer");
const Appointment = require("../models/Appointment");

const addReserve = async (req, res) => {
  try {
    const { userId, propertyId, date } = req.body;

    const existingReservation = await Appointment.findOne({
      where: {
        propertyId: propertyId,
        date: date,
      },
    });

    if (existingReservation) {
      return res.status(400).json({
        error: "Ya hay una reserva para esta propiedad en esta fecha",
      });
    }

    const nuevaReserva = await Appointment.create({
      userId,
      propertyId,
      date,
    });

    const correoReserva = {
      from: `House Of Dev <HouseOfDev@gmail.com>`,
      to: "kevin.jn99@gmail.com", // Cambia esto al correo del usuario real
      subject: "Confirmación de Reserva",
      text: `Tu reserva para el ${date} ha sido confirmada.`,
    };

    transporter.sendMail(correoReserva, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({
          error: "Hubo un error al enviar el correo de confirmación de reserva",
        });
      } else {
        console.log(
          "Correo de confirmación de reserva enviado con éxito:",
          info.response
        );
        res.status(201).json({ mensaje: "Reserva realizada con éxito" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al procesar la reserva" });
  }
};

const confirmReserve = (req, res) => {
  try {
    const { usuario, fechaVisita } = req.body;

    const correoConfirmacionVisita = {
      from: `House Of Dev <HouseOfDev@gmail.com>`,
      to: usuario.email,
      subject: "Confirmación de Fecha de Visita",
      html: `Hola ${usuario.nombre}, tu visita está programada para el ${fechaVisita}.
      <button><a href="http://localhost:5173">INGRESAR A HOUSEOFDEV</a></button>`,
    };

    transporter.sendMail(correoConfirmacionVisita, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({
          error:
            "Hubo un error al enviar el correo de confirmación de fecha de visita",
        });
      } else {
        console.log(
          "Correo de confirmación de fecha de visita enviado con éxito:",
          info.response
        );
        res.status(200).json({
          mensaje:
            "Correo de confirmación de fecha de visita enviado con éxito",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al procesar la confirmación de visita" });
  }
};

module.exports = { addReserve, confirmReserve };
