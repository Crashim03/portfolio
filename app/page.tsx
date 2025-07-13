export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import GameList from '@/app/components/GameList'
import GameListSkeleton from '@/app/components/GameListSkeleton'
import { getGames } from "@/lib/data";

const me = {
  name: "Alexandre Duarte",
  description: "Blah blah",
  college: "Instituto Superior Técnico"
}

export default async function Home() {
  const games = await getGames();
  return (
    <div>
      <header>
        <h1>{me.name}</h1>
        <h2>{me.college}</h2>
        <h3>{me.description}</h3>
      </header>
      
        <main>
          <Suspense fallback={<GameListSkeleton />}>
            <GameList games={games} />
          </Suspense>
        </main>
    </div>
  );
}