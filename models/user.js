
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El name es obligatorio']
    },
    falastname:{
        type: String,
        required: [true, 'El apellindo paterno es obligatorio']
    },
    molastname:{
        type: String,
        required: [true, 'El apellido materno es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    whatsapp: {
        type: String,
        required: ['Este campo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
});



UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model( 'User', UserSchema );