const Role = require('../models/role');
const User = require('../models/user');


const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( email = '' ) => {

    // Verificar si el email existe
    const existeEmail = await User.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
}

const existeUserPorId = async( id ) => {

    // Verificar si el email existe
    const existeUser = await User.findById(id);
    if ( !existeUser ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUserPorId
}

