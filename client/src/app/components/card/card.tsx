import React, {FC, memo} from 'react'
import cls from './card.module.scss'
import Image from 'next/image'
import Link from "next/link";

interface IType {
    id: string
    title: string
}

export const Card: FC<IType> = memo(({id, title}) => {
    // console.log('test render card')
    return (
        <Link href={`${id}`}>

            <div className={cls.img}>
                <Image
                    src={`https://cdn2.softswiss.net/i/s2/${id}.png`}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt={title}
                />
            </div>
            <div>{title}</div>
        </Link>
    )
})