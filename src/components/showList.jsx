function ShowList({state}) {
    return (
        <>
        <div className="expense-display">

            {state.spents.map((item, index) => {
                if (state.filter === "All" || item.category === state.filter)
                    return <div key={index} id={'spent'} className="expense-item">
                        <p>{item.category}</p>
                        <p>{item.spent}</p>
                        <p className="description ">Description : {item.description}</p> {/* Ajout de la description ici */}
                    </div>
            })}
            </div>
        </>
    )
}

export default ShowList;