import React, {FC, memo} from 'react'
import cls from './select.module.scss'


interface IType {
    data?: string[]
    onChange: (value: number | string) => void
}


export const Select: FC<IType> = memo(({data, onChange}) => {
    // console.log('test render select')
    return (
        <select className={cls.select} onChange={(e) => onChange(e.target.value)}>
            {
                data && data?.map(item =>
                    <option key={item} value={item}>{item}</option>
                )
            }
        </select>
    )
})
