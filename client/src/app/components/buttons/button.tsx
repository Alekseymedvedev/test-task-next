import React, {FC, memo, ReactNode} from 'react'
import cls from './button.module.scss'

interface IType {
    children?: ReactNode
    onClick: () => void
}

export const Button: FC<IType> = memo(({children, onClick}) => {
    return (
        <button className={cls.btn} onClick={onClick}>{children}</button>
    )
})
export default Button