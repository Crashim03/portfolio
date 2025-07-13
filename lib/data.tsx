export async function getGames() {
    const key = process.env.ITCH_KEY || '';

    if (key === '') {
        console.log("ITCH_KEY environment variable is not set");
    }

    const request: string = `https://itch.io/api/1/${key}/my-games`;

    const games = await fetch(request, {
    method: 'GET'
    })

    if (!games.ok) {
        console.log("Error loading games");
        return []
    }

    const json = await games.json();

    return json.games;
}