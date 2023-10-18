"use client"
import React, {FC, memo, ReactNode} from 'react'
import cls from './button.module.scss'
import { useRouter} from "next/navigation";
import Link from "next/link";

interface IType {
    children?: ReactNode
    path: string
}

export const RedirectButtons: FC<IType> = memo(({children,path}) => {
    const { push } = useRouter()
    return (
        // <button className={cls.btn} onClick={()=>  push('/')}>
        //     {children}
        // </button>
        <Link className={cls.btn} href={'/'}>Главная</Link>
    )
})
export default RedirectButtons