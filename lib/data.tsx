export async function getGames() {
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
    return json.games;
}