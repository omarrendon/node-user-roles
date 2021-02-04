const user = require("../models/user.model");

async function getUsers(req, res) {
  try {
    const users = await user.findAll({
      attributes: [
        "user_id",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
        "role",
      ],
    });

    res.status(200).json({
      ok: true,
      message: "Lista de usuarios obtenida exitosamente",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se encontraron usuarios",
    });
    console.log("ERROR" + err);
  }
}

async function getOneUser(req, res) {
  const { user_id } = req.params;

  try {
    const oneUser = await user.findOne({
      where: { user_id },
      attributes: [
        "user_id",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
        "role",
      ],
    });

    res.status(200).json({
      ok: true,
      message: "Usuario obtenido exitosamente",
      data: oneUser,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se encontraro ningún usuario",
    });
    console.log("ERROR POR BUSQUEDA DE ID" + err);
  }
}

async function createUser(req, res) {
  try {
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      contrasenia,
      role,
    } = req.body;

    console.log(
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      contrasenia,
      role
    );

    let newUser = await user.create(
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
      message: "Usuario creado exitosamente",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se pudo crear un nuevo usuario",
    });
    console.log("Error :" + err);
  }
}

async function updateUser(req, res) {
  const { user_id } = req.params;
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    email,
    contrasenia,
    role,
  } = req.body;

  try {
    const id = await user.findAll({
      attributes: [
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
        "contrasenia",
        "role",
      ],
      where: {
        user_id,
      },
    });

    const idUpdate = user.update(
      {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        contrasenia,
        role,
      },
      {
        where: { user_id },
      }
    );

    res.status(200).json({
      ok: true,
      message: "Usuario actualizado exitosamente",
      data: id,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se pudo actualizadar el usuario",
    });
    console.log("Error : " + err);
  }
}

async function deleteUser(req, res) {
  const { user_id } = req.params;
  try {
    const elimnar = await user.destroy({
      where: {
        user_id,
      },
    });

    res.status(200).json({
      ok: true,
      message: "Usuario eliminado exitosamente",
      data: elimnar,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "No se pudo eliminar el usuario",
    });
    console.log("ERROR :" + err);
  }
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
};
