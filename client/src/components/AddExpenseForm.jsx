import React, { useState } from 'react';

const CATEGORIES = ['Food', 'Transport', 'Bills', 'Entertainment', 'Other'];

function AddExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAdd({ title, amount: parseFloat(amount), category });
    setTitle('');
    setAmount('');
    setCategory(CATEGORIES[0]);
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((cat) => <option key={cat}>{cat}</option>)}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
