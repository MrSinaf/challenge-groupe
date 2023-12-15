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
            <div>
                <ExpenseForm onAddExpense={expenseData => dispatch({type: 'AddSpent', payload: expenseData})}/>
                <div>
                    <label htmlFor="categoryFilter">Filtrer par catégorie:</label>
                    <select id="categoryFilter" value={state.filter} onChange={event => dispatch({type: 'ChangeFilter', payload: event.target.value})}>
                        <option value="All">Toutes</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            <ShowList state={state}/>
            <p>Total : {state.total}€</p>
        </>
    )
}

export default App;
