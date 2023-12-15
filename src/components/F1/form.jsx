import React, {useState} from 'react';

export const categories = ["Alimentation", "Logement", "Transport", "Divertissement", "Santé", "Éducation", "Autres"];

function ExpenseForm({onAddExpense}) {
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
        <div className="form-container">
            <div className="input-group">
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-row">
                        <div className="input-price">
                            <input
                                type="number"
                                id="amount"
                                value={enteredAmount}
                                onChange={handleAmountChange}
                                placeholder="Montant"
                                required
                            />
                            <label htmlFor="amount" className="euro"> €</label>
                        </div>
                        <div className="select-category">
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
                            <textarea
                                id="description"
                                value={enteredDescription}
                                onChange={handleDescriptionChange}
                                required
                                rows="4"
                                placeholder="Achat d'un dauphin"
                            ></textarea>
                        </div>
                    </div>

                    <div className="button-container">
                        <button type="submit">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default ExpenseForm;
