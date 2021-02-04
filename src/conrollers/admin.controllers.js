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

async function getOneAdmin(req, res) {
  const { admin_id } = req.params;

  try {
    const oneAdmin = await admin.findOne({
      where: { admin_id },
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
      message: "Administrador obtenido exitosamente",
      data: oneAdmin,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se encontraro ningún usuario",
    });
    console.log("ERROR POR BUSQUEDA DE ID" + err);
  }
}

async function createAdmin(req, res) {
  try {
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      contrasenia,
      role,
    } = req.body;

    let newAdmin = await admin.create(
      {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        contrasenia,
        role,
      },
      {
        fields: [
          "nombre",
          "apellido_paterno",
          "apellido_materno",
          "email",
          "contrasenia",
          "role",
        ],
      }
    );

    res.status(200).json({
      ok: true,
      message: "Administrador creado exitosamente",
      data: newAdmin,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se pudo crear un nuevo administrador",
    });
    console.log("Error :" + err);
  }
}

async function updateAdmin(req, res) {
  const { admin_id } = req.params;
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    email,
    contrasenia,
    role,
  } = req.body;

  try {
    const id = await admin.findAll({
      attributes: [
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
        "contrasenia",
        "role",
      ],
      where: {
        admin_id,
      },
    });

    const idUpdate = admin.update(
      {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        contrasenia,
        role,
      },
      {
        where: { admin_id },
      }
    );

    res.status(200).json({
      ok: true,
      message: "Administrador actualizado exitosamente",
      data: id,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se pudo actualizadar el administrador",
    });
    console.log("Error : " + err);
  }
}

async function deleteAdmin(req, res) {
  const { admin_id } = req.params;
  try {
    const elimnar = await admin.destroy({
      where: {
        admin_id,
      },
    });

    res.status(200).json({
      ok: true,
      message: "Administrador eliminado exitosamente",
      data: elimnar,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se pudo eliminar el administrador",
    });
    console.log("ERROR :" + err);
  }
}

module.exports = {
  getAdministrators,
  createAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
};
