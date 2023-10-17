import {Card} from "@/app/components/card/card";
import {Providers} from "@/app/provider";
import React from "react";
import GameList from "@/app/components/gameList/gameList";
import Select from "@/app/components/select/select";

async function getData() {
  // const file = await fs.readFile('./src/app/data.json', 'utf8')
  const res = await fetch(`http://localhost:5000/api/`)
  if (!res) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const games = await getData()

  return (
      <Providers>
        <GameList data={games}/>
      </Providers>
  )
}
