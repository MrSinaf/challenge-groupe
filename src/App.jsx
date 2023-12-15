import './App.css';
import ShowList from "./compents/showList.jsx";

function App() {

    return (
        <>
            <ShowList spents={[
                {spent: 15, category: "miam"},
                {spent: 30, category: "tic"},
                {spent: 40, category: "tic"},
                {spent: 50, category: "tic"},
                {spent: 415, category: "tac"}]} categoryFiltre={'tic'}/>
        </>
    )
}

export default App
