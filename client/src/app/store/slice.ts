import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type GameState = {
    data: {}
    firstItem: number
    lastItem: number
    value: {}[]
    provider: string[]
    currency: string[]
};

const initialState: GameState = {
    data: {},
    firstItem: 0,
    lastItem: 12,
    value: [],
    provider: [],
    currency: [],
};

export const game = createSlice({
    name: "game",
    initialState,
    reducers: {
        getGames: (state: GameState, action: PayloadAction<{}>) => {
            state.data = action.payload
            state.value = Object.entries(state.data)

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
        providerFilter: (state: GameState, action: PayloadAction<string>) => {
            const arr = Object.entries(state.data)
            state.value = arr.filter(item => item[1].provider === action.payload)

        },
        currencyFilter: (state: GameState, action: PayloadAction<string>) => {
            state.value = Object.entries(state.data).filter(item => {
                const arr = Object.keys(item[1].real)
                for (let i = arr.length - 1; i >= 0; i--) {
                    if (arr[i] === action.payload) {
                        return true
                    }
                }

            })

        },
        increment: (state: GameState) => {
            state.lastItem += 12;
        },
    },
});

export const {getGames, providerFilter, currencyFilter, increment} = game.actions;
export default game.reducer;