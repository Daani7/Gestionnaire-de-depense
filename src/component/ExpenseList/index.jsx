import React from 'react';
import ExpenseItem from '../ExpenseItem';
import './style.scss';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
