function ShowList({spents, categoryFiltre}) {
    return (
        <>
        <div className="expense-display">

            {spents.map((item, index) => {
                if (categoryFiltre === "All" || item.category === categoryFiltre)
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