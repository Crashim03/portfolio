import { JSX } from "react";

const me = {
  name: "Alexandre Duarte",
  description: "Blah blah",
  college: "Instituto Superior Técnico"
}

export default function Home() {

  return (
    <>
      <h1>{me.name}</h1>
      <h2>{me.college}</h2>
      <h3>{me.description}</h3>
      {Games()}
    </>
  );
}

async function Games() {
  const key = process.env.ITCH_KEY;
  if (!key) {
    throw new Error("ITCH_KEY environment variable is not set");
  }
  const request: string = `https://itch.io/api/1/${key}/my-games`;

  const games = await fetch(request, {
    method: 'GET'
  })

  const json = await games.json();
 
  if (!games.ok) {
    console.log("Error loading games");
  }

  const game_links: JSX.Element[] = [];

  json.games.forEach((game: { url: string; cover_url: string; }, index: number) => {
    game_links.push(Game(game.url, game.cover_url, index));
  });

  return game_links;
}

function Game(link: string, image_link: string, key: number) {
  return (
    <a href={link} key={key}><img src={image_link}/></a>
  );
}
