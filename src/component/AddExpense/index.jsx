import React, { useState } from 'react';
import './style.scss';

const AddExpense = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [label, setLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { amount: parseFloat(amount), category, label };
    onAddExpense(expense);
    setAmount('');
    setCategory('');
    setLabel('');
  };

  return (
    <form className='add-expense' onSubmit={handleSubmit}>
      <input
        
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Label"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Sélectionner une catégorie</option>
        <option value="Alimentation">Alimentation</option>
        <option value="Logement">Logement</option>
        <option value="Transport">Transport</option>
        <option value="Divertissement">Divertissement</option>
        <option value="Santé">Santé</option>
        <option value="Éducation">Éducation</option>
        <option value="Autres">Autres</option>
      </select>
      <button type="submit">Ajouter une dépense</button>
    </form>
  );
};

export default AddExpense;
