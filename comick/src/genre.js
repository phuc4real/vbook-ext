load('config.js');

function execute() {
    let response = fetch(GENRES);
    if (!response.ok) return null;

    let data = response.json().pageProps.genres.filter(e => e.group === "Genre");

    return Response.success(
        data.map(x => ({ title: x.name, input: `${SEARCH}?sort=created_at&genres=${x.slug}`, script: "gen.js" }))
    );
}