import React, { useState } from 'react';

 export const categories = ["Alimentation", "Logement", "Transport", "Divertissement", "Santé", "Éducation", "Autres"];

function ExpenseForm({ onAddExpense }) {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

const handleDescriptionChange = (event) => {
    setEnteredDescription(event.target.value);
};

  

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
      category: selectedCategory,
      description: enteredDescription
    };

    onAddExpense(expenseData);

    // Reset the form
    setEnteredAmount('');
    setSelectedCategory('');
    setEnteredDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
  <div className="form-row">
    <div>
      <label htmlFor="amount">Montant:</label>
      <input
        type="number"
        id="amount"
        value={enteredAmount}
        onChange={handleAmountChange}
        required
      />
    </div>
    <div>
      <label htmlFor="category">Catégorie:</label>
      <select 
        id="category" 
        value={selectedCategory} 
        onChange={handleCategoryChange}
        required
      >
        <option value="">Choisir une catégorie</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  </div>
  
  <div className="form-row">
    <div className="button-container">
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={enteredDescription}
        onChange={handleDescriptionChange}
        required
        rows="4"
      ></textarea>
    </div>
  </div>
  
  <div className="button-container">
    <button type="submit">Ajouter</button>
  </div>
</form>

);

}

export default ExpenseForm;
