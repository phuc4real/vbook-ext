load('config.js');

function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let jsonString = doc.select("script#__NEXT_DATA__").first().html();
    let json = JSON.parse(jsonString);
    let data = json.props.pageProps;

    let genres = data.comic.md_comic_md_genres.map(
        x =>
            ({
                title: x.md_genres.name,
                input: `${SEARCH}?sort=created_at&genres=${x.md_genres.slug}`,
                script: "gen.js"
            })
    );

    return Response.success({
        name: data.comic.title,
        cover: IMG + data.comic.md_covers[0].b2key,
        author: data.authors.map(author => author.name).join(", "),
        ongoing: data.comic.status == 1,
        description: data.comic.desc,
        genres: genres
    });

}