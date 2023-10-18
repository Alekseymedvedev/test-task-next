import {createSlice} from "@reduxjs/toolkit";

type GameState = {
    data: [string, unknown][]
    lastItem: number
    value: {}[]
    provider: string[]
    currency: string[]
};

const initialState: GameState = {
    data: [],
    lastItem: 12,
    value: [],
    provider: [],
    currency: [],
};

export const game = createSlice({
    name: "game",
    initialState,
    reducers: {
        getGames: (state: GameState, action: { payload: {} }) => {
            state.data = Object.entries(action.payload)
            state.value = state.data

            const keysArr: any = Object.values(action.payload).filter((item, i) => Object.values(action.payload).findIndex(a => a.provider === item.provider) === i)
            let arrProvider = []
            let arrCurrency = []

            for (let i = keysArr.length - 1; i >= 0; i--) {
                if (arrProvider.indexOf(keysArr[i].provider) < 0) {
                    arrProvider.push(keysArr[i].provider);
                }
            }

            for (let i = keysArr.length - 1; i >= 0; i--) {
                for (let j = Object.keys(keysArr[i].real).length - 1; j >= 0; j--) {
                    if (arrCurrency.indexOf(Object.keys(keysArr[i].real)[j]) < 0) {
                        arrCurrency.push(Object.keys(keysArr[i].real)[j]);
                    }
                }
            }
            state.provider = arrProvider
            state.currency = arrCurrency
        },
        providerFilter: (state: GameState, action: { payload: string }) => {
            state.value = state.data.filter(item => item[1].provider === action.payload)

        },
        currencyFilter: (state: GameState, action: { payload: string }) => {
            state.value = state.data.filter(item => {
                const arr = Object.keys(item[1].real)
                for (let i = arr.length - 1; i >= 0; i--) {
                    if (arr[i] === action.payload) {
                        return true
                    }
                }
            })
        },
        dataSort: (state: GameState) => {
            const quickSort = (arr) => {
                if (arr.length <= 1) {
                    return arr
                }
                const pivot = arr[0]
                const less = arr.slice(1).filter(item => item[1].collections.popularity < pivot[1].collections.popularity)
                const greater = arr.slice(1).filter(item => item[1].collections.popularity > pivot[1].collections.popularity)

                return [...quickSort(less), pivot, ...quickSort(greater)]
            }
            state.value = quickSort(state.data)
        },
        increment: (state: GameState) => {
            state.lastItem += 12;
        },
    },
});

export const {getGames, providerFilter, currencyFilter, increment, dataSort} = game.actions;
export default game.reducer;