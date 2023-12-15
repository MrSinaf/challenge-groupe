export function ShowList({state}) {
    return (
        <>
            {state.spents.map((item, index) => {
                if (state.filter === "All" || item.category === state.filter)
                    return <div key={index} className={'spent'}>
                        <p>{item.spent}€</p>
                        <p>{item.category}</p>
                    </div>
            })}
        </>
    )
}

export default ShowList;