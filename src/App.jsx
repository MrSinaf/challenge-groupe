import './App.css'
import React from 'react';
import ExpenseForm from './components/F1/form';
import ShowList from "./components/showList.jsx";

function App() {
    const spents = [{spent: 15, category: "miam"}];
    let filtre = "Total";

    const handleNewExpense = (expenseData) => {
        console.log('Nouvelle dépense ajoutée:', expenseData);
        spents.push(expenseData)
    };

    return (
        <>
            <div>
                <ExpenseForm onAddExpense={handleNewExpense}/>
            </div>
            <ShowList spents={spents} categoryFiltre={filtre}/>
        </>
    )
}

export default App
