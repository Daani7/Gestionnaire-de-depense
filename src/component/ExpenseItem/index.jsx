import React from 'react';
import './style.scss';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <span>{expense.label}</span>
      <span>{expense.amount} €</span>
      <span>{expense.category}</span>
    </div>
  );
};

export default ExpenseItem;
