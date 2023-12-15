import './App.css'
import React from 'react';
import ExpenseForm from './component/F1/form';

function App() {
  const handleNewExpense = (expenseData) => {
    console.log('Nouvelle dépense ajoutée:', expenseData);
    // Ici, vous pouvez ajouter une logique supplémentaire si nécessaire
  };

  return (
    <div>
      <ExpenseForm onAddExpense={handleNewExpense} />
    </div>
  );
}

export default App;

