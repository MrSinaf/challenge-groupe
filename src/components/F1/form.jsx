import React, { useState } from 'react';

 export const categories = ["Alimentation", "Logement", "Transport", "Divertissement", "Santé", "Éducation", "Autres"];

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
      spent: parseFloat(enteredAmount),
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
                required  // Assurez-vous que le montant est obligatoire
            />
        </div>
        <div>
            <label htmlFor="category">Catégorie:</label>
            <select 
                id="category" 
                value={selectedCategory} 
                onChange={handleCategoryChange}
                required  // Rend la sélection d'une catégorie obligatoire
            >
                <option value="">Choisir une catégorie</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
        <button type="submit">Ajouter</button>
    </form>
);

}

export default ExpenseForm;
