import './App.css'
import React, { useState } from 'react';
import ExpenseForm from './components/F1/form';
import ShowList from "./components/showList.jsx";
import { categories } from './components/F1/form';

function App() {
    const [spents, setSpents] = useState([{ spent: 15, category: "Miam", description: "sdsazedgqsgdgsdfdsgsdfhbfsdnbeqbzerqbzrzrebqbsfqsfbqsdfbqbsfqsdfgq"}]);
    const [filtre, setFiltre] = useState("All");


    const handleNewExpense = (expenseData) => {
        setSpents(prevSpents => [...prevSpents, expenseData]);
    }


    const handleFilterChange = (event) => {
        setFiltre(event.target.value);
    };

    return (
        <>
            <div className="form-container">
                <div className="input-group">
                    <ExpenseForm onAddExpense={handleNewExpense} />
                </div>
                <div className="filter-category">
                    <label htmlFor="categoryFilter">Filtrer par catégorie:</label>
                    <select id="categoryFilter" value={filtre} onChange={handleFilterChange}>
                        <option value="All">Toutes</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

            </div>
            <div className="form-row">
                <ShowList spents={spents} categoryFiltre={filtre} />
            </div>
        </>
    )
}

export default App; 
