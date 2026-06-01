const express = require('express');
const router = express.Router();
const expense = require('../models/expense');

router.get('/', async (req, res) => {
  try {
    const expenses = await expense.getAll();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newExpense = await expense.create(req.body);
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create expense' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await expense.deleteById(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete expense' });
  }
});

module.exports = router;
