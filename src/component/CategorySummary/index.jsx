import React from 'react';
import './style.scss';

const CategorySummary = ({ expenses }) => {
  const categories = [
    'Alimentation',
    'Logement',
    'Transport',
    'Divertissement',
    'Santé',
    'Éducation',
    'Autres',
  ];

  const categoryTotals = categories.reduce((totals, category) => {
    totals[category] = expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    return totals;
  }, {});

  return (
    <div className="category-summary">
      {categories.map((category) => (
        <div key={category} className="category-item">
          <span>{category}:</span>
          <span>{categoryTotals[category].toFixed(2)} €</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySummary;
