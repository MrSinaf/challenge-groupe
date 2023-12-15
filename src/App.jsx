import './App.css'
import React, {useState} from 'react';
import ExpenseForm from './components/F1/form';
import ShowList from "./components/showList.jsx";

function App() {
    const [spents, setSpents] = useState([{spent: 15, category: "Miam"}]);
    const [filtre, setFiltre] = useState("All");

    const handleNewExpense = (expenseData) => {
        setSpents(prevSpents => [...prevSpents, expenseData]);
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

export default App;
