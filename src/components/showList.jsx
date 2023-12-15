function ShowList({state}) {
    return (
        <div className="form-row">
        <div className="expense-display">

            {state.spents.map((item, index) => {
                if (state.filter === "All" || item.category === state.filter)
                    return <div key={index} className="spend-card">
                        <p className="category">{item.category}</p>
                        <p className="price">{item.spent} €</p>
                        <p className="description">{item.description}</p> {/* Ajout de la description ici */}
                    </div>
            })}
            </div>
        </div>
    )
}

export default ShowList;