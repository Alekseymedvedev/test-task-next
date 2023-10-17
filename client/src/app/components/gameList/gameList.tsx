'use client'

import React, {FC, memo, useCallback, useEffect} from 'react'
import cls from './gameList.module.scss'
import {Card} from "@/app/components/card/card";
import {useAppDispatch, useAppSelector} from "@/app/hooks/hooks";
import gameReducer, {currencyFilter, getGames, increment, providerFilter} from "@/app/store/slice";
import {Select} from "@/app/components/select/select";

interface IType {
    data?: any
}

const GameList: FC<IType> = memo(({data}) => {
    const dispatch = useAppDispatch()
    const {value, provider, currency, lastItem} = useAppSelector((state) => state.gameReducer)

    useEffect(() => {
        dispatch(getGames(data))
    }, [data])

    const handlerProviderFilter = useCallback((value) => {
        dispatch(providerFilter(value))
    }, [value])

    const handlerCurrencyFilter = useCallback((value) => {
        dispatch(currencyFilter(value))
    }, [value])

    const handlerAdd = () => {
        dispatch(increment())
    }
    return (
        <>
            <Select data={currency} onChange={handlerCurrencyFilter}/>
            <Select data={provider} onChange={handlerProviderFilter}/>
            <ul className={cls.wrapper}>
                {
                    value.slice(0, lastItem).map((item: any) =>
                        <li key={item[0]}>
                            <Card title={item[1].title} id={item[0]}/>
                        </li>
                    )
                }
            </ul>
            <button onClick={handlerAdd}>показать еще</button>
        </>
    )
})
export default GameList