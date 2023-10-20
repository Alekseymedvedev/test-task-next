'use client'

import React, {FC, memo, useCallback, useEffect} from 'react'
import cls from './gameList.module.scss'
import {Card} from "@/app/components/card/card";
import {useAppDispatch, useAppSelector} from "@/app/hooks/hooks";
import {currencyFilter, dataSort, getGames, increment, providerFilter} from "@/app/store/slice";
import {Select} from "@/app/components/select/select";
import Button from "@/app/components/buttons/button";

interface IType {
    data: [string,{ title:string }][]
}

const GameList: FC<IType> = memo(({data}) => {
    const dispatch = useAppDispatch()
    const {value, provider, currency, lastItem} = useAppSelector((state) => state.gameReducer)

    useEffect(() => {
        dispatch(getGames(data))
    }, [data])

    const handlerProviderFilter = useCallback((val) => {
        dispatch(providerFilter(val))
    }, [])

    const handlerCurrencyFilter = useCallback((val) => {
        dispatch(currencyFilter(val))
    }, [])
    const handlerSort = useCallback(() => {
        dispatch(dataSort(data))
    }, [])
    const handlerAdd = useCallback(() => {
        dispatch(increment())
    }, [])
    if (value.length < 1) {
        return <h1>...Loading</h1>
    }
    return (
        <>
            <div className={cls.box}>
                <Select data={currency} onChange={handlerCurrencyFilter}/>
                <Select data={provider} onChange={handlerProviderFilter}/>
                <Button onClick={handlerSort}>Сортировать</Button>
            </div>
            <ul className={cls.list}>
                {
                    value.slice(0, lastItem).map((item) =>
                        <Card key={item[0]} title={item[1]?.title} id={item[0]}/>
                    )
                }
            </ul>
            <Button onClick={handlerAdd}>показать еще</Button>
        </>
    )
})
export default GameList