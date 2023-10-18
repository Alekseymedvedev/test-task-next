import {Props} from "next/script";
import RedirectButtons from "@/app/components/buttons/redirectButtons";
import cls from './page.module.scss'

type Props = {
    params: {
        id: string
    }
}

async function getData(id) {
    const res = await fetch(`http://localhost:5000/api/${id}`)
    if (!res) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function ({params: {id, game}}: Props) {
    const data = await getData(`${game}/${id}`)

    return (
        <>
            <RedirectButtons path={'/'}>Главная</RedirectButtons>
            <h1 className={cls.title}>{data.title}</h1>
        </>
    );
};

