import React from 'react';

function ExpenseCard({ expense, onDelete }) {
  return (
    <div className="expense-card">
      <div className="expense-info">
        <span className="expense-title">{expense.title}</span>
        <span className="expense-category">{expense.category}</span>
      </div>
      <div className="expense-actions">
        <span className="expense-amount">£{parseFloat(expense.amount).toFixed(2)}</span>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ExpenseCard;
