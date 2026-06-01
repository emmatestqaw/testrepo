import React from 'react';
import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenses, onDelete }) {
  if (!expenses.length) return <p>No expenses yet.</p>;

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ExpenseList;
