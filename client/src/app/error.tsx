"use client"


export default function errorPage({error}:{error:Error}){
    console.log(error)
    return <h1>Ошибка при загрузке данных</h1>
}