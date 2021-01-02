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
      ],
    });

    res.json(users);
  } catch (err) {
    console.log("ERROR" + err);
  }
}

async function getOneUser(req, res) {
  const { user_id } = req.params;

  try {
    const oneUser = await user.findOne({
      where: { id_alumo },
      attributes: [
        "id",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
      ],
    });

    res.status(200).json({ oneUser });
  } catch (err) {
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
    } = req.body;

    console.log(nombre, apellido_paterno, apellido_materno, email, contrasenia);

    let newUser = await user.create(
      {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        contrasenia,
      },
      {
        fields: [
          "nombre",
          "apellido_paterno",
          "apellido_materno",
          "email",
          "contrasenia",
        ],
      }
    );

    res.json({
      message: "User creado!",
      newUser,
    });
  } catch (err) {
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
  } = req.body;

  try {
    const id = await user.findAll({
      attributes: [
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "email",
        "contrasenia",
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
      },
      {
        where: { user_id },
      }
    );

    return res.json({
      message: "User Updated",
      data: id,
    });
  } catch (err) {
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
    res.json({
      message: "User eliminado",
      count: elimnar,
    });
  } catch (err) {
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
