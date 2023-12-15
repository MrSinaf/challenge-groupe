import ShowList, {CalculeTotal} from "./components/showList.jsx";
import ExpenseForm from './components/F1/form';
import {useState} from 'react';
import './App.css'
import { categories } from './components/F1/form';

function App() {
    const [spents, setSpents] = useState([]);
    const [filtre, setFiltre] = useState("All");

    const handleNewExpense = (expenseData) => {
        setSpents(prevSpents => [...prevSpents, expenseData]);
    }


    const handleFilterChange = (event) => {
        setFiltre(event.target.value);
    };

    return (
        <>
            <div>
  <ExpenseForm onAddExpense={handleNewExpense}/>
                <div>
                <label htmlFor="categoryFilter">Filtrer par catégorie:</label>
                    <select id="categoryFilter" value={filtre} onChange={handleFilterChange}>
                        <option value="All">Toutes</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    </div>
            </div>
            <ShowList spents={spents} filtre={filtre}/>
            <CalculeTotal spents={spents} filtre={filtre}/>
        </>
    )
}

export default App;
