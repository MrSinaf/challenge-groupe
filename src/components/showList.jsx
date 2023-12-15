function ShowList({spents, categoryFiltre}) {
    return (
        <>
            {spents.map((item, index) => {
                if (categoryFiltre === "Total" || item.category === categoryFiltre)
                    return <div key={index} className={'spent'}>
                        <p>{item.spent}</p>
                        <p>{item.category}</p>
                    </div>
            })}
        </>
    )
}

export default ShowList;