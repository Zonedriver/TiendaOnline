const express = require('express');
const router = express.Router();
const { sequelize } = require('../db');
const permission = require('../middlewares/permission');

// Adding routes handlers to 'notes' path
//router.use('/notes', require('./notes'));

//CRUD

// Handler for list all notes
router.get('/', permission('admin'), async (req, res) => {
    const user = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: user });    
})

// Handler for create a new note
router.post('/', permission('admin'), async (req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.create({
      name: body.name,
      lastname: body.lastname,
      type: body.type,
      email: body.email,
      password: body.password,
    });
    await user.save();
    return res.status(201).json({ data: user })
})

// Handler for update a specific note
router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const user = await sequelize.models.users.findByPk(id);
    if (!user) {
      return res.status(404).json({ code: 404, message: 'user not found' });
    }
    const updatedUser = await product.update({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        email: body.email,
        password: body.password,
    });
    return res.json({ data: updatedUser });
})

// Handler for delete a specific note
router.delete('/:id', permission('admin'), async (req, res) => {
    const {params: { id } } = req;
    const user = await sequelize.models.users.findByPk(id);
    if (!user) {
      return res.status(404).json({ code: 404, message: 'User not found' });
    }
    await user.destroy();
    return res.json();   
})

module.exports = router;