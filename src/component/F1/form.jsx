import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      amount: parseFloat(enteredAmount),
      category: selectedCategory
    };

    onAddExpense(expenseData);

    // Reset the form
    setEnteredAmount('');
    setSelectedCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Montant:</label>
        <input 
          type="number" 
          id="amount" 
          value={enteredAmount} 
          onChange={handleAmountChange} 
        />
      </div>
      <div>
        <label htmlFor="category">Catégorie:</label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={handleCategoryChange}>
          <option value="">Choisir une catégorie</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ExpenseForm;
