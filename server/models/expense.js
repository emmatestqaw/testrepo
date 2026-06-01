const pool = require('../db');

const getAll = async () => {
  const result = await pool.query('SELECT * FROM expenses ORDER BY created_at DESC');
  return result.rows;
};

const create = async ({ title, amount, category }) => {
  const result = await pool.query(
    'INSERT INTO expenses (title, amount, category) VALUES ($1, $2, $3) RETURNING *',
    [title, amount, category]
  );
  return result.rows[0];
};

const deleteById = async (id) => {
  await pool.query('DELETE FROM expenses WHERE id = $1', [id]);
};

module.exports = { getAll, create, deleteById };
