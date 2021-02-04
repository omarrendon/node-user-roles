const admin = require("../models/admin.model");

async function getAdministrators(req, res) {
  try {
    const administratos = await admin.findAll({
      attributes: [
        "admin_id",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
        "role",
      ],
    });

    res.status(200).json({
      ok: true,
      message: "Lista de administradores obtenida exitosamente",
      data: administratos,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "No se encontraron administradores",
    });
    console.log("ERROR" + error);
  }
}

module.exports = { getAdministrators };
