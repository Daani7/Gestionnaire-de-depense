import React from 'react';
import AddExpense from './component/AddExpense';
import ExpenseList from './component/ExpenseList';
import CategorySummary from './component/CategorySummary';
import TotalExpense from './component/TotalExpense';
import { ExpenseProvider, useExpenseContext } from './store/ExpenseContext';
import './App.scss';


const App = () => {
  const { state, dispatch } = useExpenseContext();

  const handleAddExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  return (
    <div className="app">
      <h1>Gestionnaire de Dépenses</h1>
      <TotalExpense />
      <AddExpense onAddExpense={handleAddExpense} />
      <ExpenseList expenses={state.expenses} />
      <CategorySummary expenses={state.expenses} />
    </div>
  );
};

export default () => (
  <ExpenseProvider>
    <App />
  </ExpenseProvider>
);
