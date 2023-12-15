export const initialState = {
    spents: [],
    filter: "All",
    total: 0
}

function Reducer(state, action) {
    switch (action.type) {
        case 'AddSpent':
            return {...state, spents: [...state.spents, action.payload]};
        case 'ChangeFilter':
            return {...state, filter: action.payload};
        case 'CalculateTotal':
            if (!state.spents)
                return;

            let moyenne = 0;
            for (const key of state.spents) {
                if (state.filter === "All" || key.category === state.filter)
                    moyenne += key.spent;
            }

            return {...state, total: moyenne};
    }
}

export default Reducer;