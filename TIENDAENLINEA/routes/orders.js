const express = require('express');
const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
    const order = await sequelize.models.orders.findAndCountAll();
    return res.status(200).json({ data: order });   
});

// Creating a new review
router.post('/', async (req, res) => {
    const { body } = req;
    const order = await sequelize.models.orders.create({
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity,
    });
    await orders.save();
    return res.status(201).json({ data: order })
});

// Update a review by id
router.put('/:id', async (req, res) => {
    const { body, params: { id } } = req;
    const order = await sequelize.models.orders.findByPk(id);
    if (!order) {
      return res.status(404).json({ code: 404, message: 'Product not found' });
    }
    const updatedOrder = await order.update({
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity,
    });
    return res.json({ data: updatedOrder });
});

// Delete a order by id
router.delete('/:id',  async (req, res) => {
    const { params: { id } } = req;
    const order = await sequelize.models.orders.findByPk(id);
    if (!order) {
        return res.status(404).json({ code: 404, message: 'order not found' });
      }
  await order.destroy();
  return res.json();
});

module.exports = router;