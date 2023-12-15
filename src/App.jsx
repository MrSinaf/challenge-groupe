import ShowList from "./components/showList.jsx";
import ExpenseForm from './components/F1/form';
import {useEffect, useReducer} from 'react';
import './App.css'
import {categories} from './components/F1/form';
import Reducer, {initialState} from "./Utils/spentListReducer.jsx";

function App() {
    const [state, dispatch] = useReducer(Reducer, initialState);
    useEffect(() => dispatch({type: 'CalculateTotal'}), [state.spents, state.filter])

    return (
        <>
            <h1>Check Dépense Ez</h1>
            <ExpenseForm onAddExpense={expenseData => dispatch({type: 'AddSpent', payload: expenseData})}/>

            <div className="filter-category">
                <label htmlFor="categoryFilter">Filtrer par catégorie:</label>
                <select id="categoryFilter" value={state.filter}
                        onChange={event => dispatch({type: 'ChangeFilter', payload: event.target.value})}>
                    <option value="All">Toutes</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <ShowList state={state}/>
            <p className="Total">Total : {state.total} €</p>
        </>
    )
}

export default App;
