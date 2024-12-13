import React, { useContext } from 'react';
import ExpenseContext from '../../store/ExpenseContext';
import './style.scss';

const TotalExpense = () => {
  const { state } = useContext(ExpenseContext);

  const totalExpense = state.expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);;

  const totalByCategory = state.expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  return (
    <div className="total-expense">
      <h2>Total des Dépenses</h2>
      <p>Total: <strong>{totalExpense}</strong> €</p>
      <h3>Par catégorie:</h3>
      <ul>
        {Object.keys(totalByCategory).map((category) => (
          <li key={category}>
            {category}: {totalByCategory[category].toFixed(2)} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalExpense;
