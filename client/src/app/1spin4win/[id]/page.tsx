import {Props} from "next/script";
import Link from "next/link";
import {Metadata} from "next";

type Props = {
    params: {
        id: string
    }
}

export const metadata: Metadata = {
    title: '1'
}

async function getData(id) {
    const res = id ? await fetch(`http://localhost:5000/api/1spin4win/${id}`) : await fetch(`http://localhost:5000/api/1spin4win/${id}`)
    if (!res) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function ({params: {id}}: Props) {
    const a = await getData(id)

    return (
        <div>
            <Link href={'/'}>Главная</Link>
            {a.title}
        </div>
    );
};

