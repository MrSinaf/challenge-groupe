function ShowList({spents, filtre}) {
    return (
        <>
            {spents.map((item, index) => {
                if (filtre === "All" || item.category === filtre)
                    return <div key={index} className={'spent'}>
                        <p>{item.spent}</p>
                        <p>{item.category}</p>
                    </div>
            })}
        </>
    )
}

export function CalculeTotal({spents, filtre}) {
    let moyenne = 0;
    let length = 0;
    for (const key of spents) {
        if (filtre === "All" || key.category === filtre) {
            moyenne += key.spent;
            length++;
        }
    }

    return <p>Totale : {moyenne / length}</p>
}

export default ShowList;