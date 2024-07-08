
const { Router } = require('express');
const { check } = require('express-validator');


const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require('../middlewares');
const { esRoleValido, emailExiste, existeUserPorId } = require('../helpers/db-validators');

const { usersGet,
        usersPut,
        usersPost,
        usersDelete,
        usersPatch } = require('../controllers/users');

const router = Router();


router.get('/', usersGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUserPorId ),
    validarCampos
],usersPut );

router.post('/',[
    check('name', 'El name es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('email', 'El email no es válido').isEmail(),
    check('email').custom( emailExiste ),
    //check('rol').custom( esRoleValido ), 
    validarCampos
], usersPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUserPorId ),
    validarCampos
],usersDelete );

router.patch('/', usersPatch );





module.exports = router;